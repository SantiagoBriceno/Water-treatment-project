import service from '../../services/v1/clientes.service.js'

export const getAllClientes = async (req, res) => {
  try {
    const clientes = await service.getAllClientes()
    res.status(200).json(clientes)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getAllClientesPartials = async (req, res) => {
  try {
    const data = await service.getAllClientesPatials(req.query.page, req.query.limit)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getClienteById = async (req, res) => {
  try {
    const cliente = await service.getClienteById(req.params.id)
    res.status(200).json(cliente)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getClienteByDocumento = async (req, res) => {
  try {
    const cliente = await service.getClienteByDocumento(req.params.documento)
    res.status(200).json(cliente)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const postCliente = async (req, res) => {
  try {
    const cliente = await service.postCliente(req.body)
    res.status(201).json({ cliente, message: 'Cliente creado con éxito' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateCliente = async (req, res) => {
  try {
    const cliente = await service.updateCliente(req.params.id, req.body)
    res.status(200).json(cliente)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteCliente = async (req, res) => {
  try {
    const cliente = await service.deleteCliente(req.params.id)
    res.status(200).json(cliente)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
