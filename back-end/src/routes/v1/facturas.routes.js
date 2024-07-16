import { Router } from 'express'
import { deleteFactura, getAllFacturas, getFacturaById, postFactura, updateFactura } from '../../controllers/v1/facturas.controller.js'

const router = Router()

router.get('/', getAllFacturas)
router.get('/:id', getFacturaById)
router.post('/', postFactura)
router.patch('/:id', updateFactura)
router.delete('/:id', deleteFactura)
