import { Router } from 'express'
import { deleteServicio, getAllServicios, getServicioById, postServicio, updateServicio } from '../../controllers/v1/servicios.controller.js'

const router = Router()

router.get('/', getAllServicios)
router.get('/:id', getServicioById)
router.post('/', postServicio)
router.patch('/:id', updateServicio)
router.delete('/:id', deleteServicio)

export default router
