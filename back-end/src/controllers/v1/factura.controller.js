import service from '../../services/v1/factura.service'

export const getAllFacturas = async (req, res) => {
  try {
    const facturas = await service.getAllFacturas()
    res.status(200).json(facturas)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getFacturaById = async (req, res) => {
  try {
    const factura = await service.getFacturaById(req.params.id)
    res.status(200).json(factura)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const postFactura = async (req, res) => {
  try {
    const factura = await service.postFactura(req.body)
    res.status(201).json(factura)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateFactura = async (req, res) => {
  try {
    const factura = await service.updateFactura(req.params.id, req.body)
    res.status(200).json(factura)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteFactura = async (req, res) => {
  try {
    const factura = await service.deleteFactura(req.params.id)
    res.status(200).json(factura)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
