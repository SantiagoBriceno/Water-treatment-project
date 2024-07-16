import { Servicio } from '../../models/servicio.js'

const getAllServicios = async () => {
  const servicios = await Servicio.find()
  return servicios
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
  getServicioById,
  postServicio,
  updateServicio,
  deleteServicio
}
