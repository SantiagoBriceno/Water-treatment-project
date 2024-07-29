import { Factura } from '../../models/factura.js'

const getAllFacturas = async () => {
  const facturas = await Factura.find()
  return facturas
}

const getAllFacturasPartial = async (page, limit) => {
  const totalFacturas = await getTotalFacturas()
  const totalPages = Math.ceil(totalFacturas / limit)
  const facturas = await Factura.find()
    .skip((page - 1) * limit)
    .limit(limit)
  return { facturas, totalPages }
}

const getTotalFacturas = async () => {
  const total = await Factura.countDocuments()
  return total
}

const getFacturaById = async (id) => {
  const factura = await Factura.findById(id)
  return factura
}

const postFactura = async (factura) => {
  const createdFactura = await Factura.create(factura)
  return createdFactura
}

const updateFactura = async (id, factura) => {
  const updatedFactura = await Factura.findByIdAndUpdate(id, factura)
  return updatedFactura
}

const deleteFactura = async (id) => {
  const deletedFactura = await Factura.findByIdAndDelete(id)
  return deletedFactura
}

export default {
  getAllFacturas,
  getAllFacturasPartial,
  getFacturaById,
  postFactura,
  updateFactura,
  deleteFactura
}
