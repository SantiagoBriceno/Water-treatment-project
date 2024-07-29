import { Servicio } from '../../models/servicio.js'

const getAllServicios = async () => {
  const servicios = await Servicio.find()
  return servicios
}

const getAllServiciosPartials = async (page, limit) => {
  const totalServicios = await getTotalServicios()
  const totalPages = Math.ceil(totalServicios / limit)
  const servicios = await Servicio.find()
    .skip((page - 1) * limit)
    .limit(limit)
  return { servicios, totalPages }
}

const getTotalServicios = async () => {
  const total = await Servicio.countDocuments()
  return total
}

const getServicioById = async (id) => {
  const servicio = await Servicio.findById(id)
  return servicio
}

const postServicio = async (servicio) => {
  const createdServicio = await Servicio.create(servicio)
  return createdServicio
}

const updateServicio = async (id, servicio) => {
  const updatedServicio = await Servicio.findByIdAndUpdate(id, servicio)
  return updatedServicio
}

const deleteServicio = async (id) => {
  const deletedServicio = await Servicio.findByIdAndDelete(id)
  return deletedServicio
}

export default {
  getAllServicios,
  getAllServiciosPartials,
  getServicioById,
  postServicio,
  updateServicio,
  deleteServicio
}
