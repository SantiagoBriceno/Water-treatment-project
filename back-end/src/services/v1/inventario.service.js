import { Inventario } from '../../models/inventario'

const getInventario = async () => {
  const inventario = await Inventario.find()
  return inventario
}

export default {
  getInventario
}
