import { check } from 'express-validator'
import { validateResult } from '../helpers/validateHelper.js'
import { Cliente } from '../models/cliente.js'

export const validateCreate = [
  check('nombre')
    .exists()
    .not()
    .isEmpty(),
  check('documento')
    .exists()
    .not()
    .isEmpty()
    .custom(async (value, { req }) => {
      const cliente = await Cliente.findOne({ documento: value })
      if (cliente) {
        throw new Error('Nro. de documento ya registrado')
      }
    }),
  check('telefono')
    .exists()
    .not()
    .isEmpty()
    .isMobilePhone(),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]
