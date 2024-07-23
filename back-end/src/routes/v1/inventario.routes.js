import { Router } from 'express'
import { getInventory } from '../../controllers/v1/inventario.controller'
const router = Router()

router.get('/', getInventory)
