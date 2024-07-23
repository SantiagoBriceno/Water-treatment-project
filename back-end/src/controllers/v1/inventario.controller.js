import service from '../../services/v1/inventario.service.js'

export const getInventory = async (req, res) => {
  try {
    const inventory = await service.getInventory()
    res.status(200).json(inventory)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
