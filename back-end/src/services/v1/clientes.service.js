import { Cliente } from '../../models/cliente.js'

const getAllClientes = async () => {
  const clientes = await Cliente.find()
  return clientes
}

// Clientes paginados
const getAllClientesPatials = async (page, limit) => {
  const clientes = await Cliente.find()
    .skip((page - 1) * limit)
    .limit(limit)
  return clientes
}

const getClienteById = async (id) => {
  const cliente = await Cliente.findById(id)
  return cliente
}

const getClienteByDocumento = async (documento) => {
  const cliente = await Cliente.findOne({ documento })
  return cliente
}

const postCliente = async (cliente) => {
  const createdCliente = await Cliente.create(cliente)
  return createdCliente
}

const updateCliente = async (id, cliente) => {
  const updatedCliente = await Cliente.findByIdAndUpdate(id, cliente)
  return updatedCliente
}

const deleteCliente = async (id) => {
  const deletedCliente = await Cliente.findByIdAndDelete(id)
  return deletedCliente
}

export default {
  getAllClientes,
  getAllClientesPatials,
  getClienteById,
  getClienteByDocumento,
  postCliente,
  updateCliente,
  deleteCliente
}