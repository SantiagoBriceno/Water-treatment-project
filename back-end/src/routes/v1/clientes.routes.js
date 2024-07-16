import { Router } from 'express'
import { deleteCliente, getAllClientes, getClienteByDocumento, getClienteById, postCliente, updateCliente } from '../../controllers/v1/clientes.controller.js'

const router = Router()

router.get('/', getAllClientes)
router.get('/:id', getClienteById)
router.get('/documento/:documento', getClienteByDocumento)
router.post('/', postCliente)
router.patch('/:id', updateCliente)
router.delete('/:id', deleteCliente)

export default router
