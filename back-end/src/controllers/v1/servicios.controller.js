import service from '../../services/v1/servicios.service.js'

export const getAllServicios = async (req, res) => {
  try {
    const servicios = await service.getAllServicios()
    res.status(200).json(servicios)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getAllServiciosPaginated = async (req, res) => {
  try {
    const servicios = await service.getAllServiciosPaginated(req.query.page, req.query.limit)
    res.status(200).json(servicios)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getServicioById = async (req, res) => {
  try {
    const servicio = await service.getServicioById(req.params.id)
    res.status(200).json(servicio)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const postServicio = async (req, res) => {
  try {
    const servicio = await service.postServicio(req.body)
    res.status(201).json(servicio)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateServicio = async (req, res) => {
  try {
    const servicio = await service.updateServicio(req.params.id, req.body)
    res.status(200).json(servicio)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteServicio = async (req, res) => {
  try {
    const servicio = await service.deleteServicio(req.params.id)
    res.status(200).json(servicio)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
