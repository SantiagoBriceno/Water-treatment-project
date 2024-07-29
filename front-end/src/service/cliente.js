import { RUTA_CLIENTS } from '../config/config'

export const getClientes = async () => {
  const response = await fetch(RUTA_CLIENTS)
  const data = await response.json()
  return data
}

export const getPaginatedClientes = async (page, pageSize) => {
  const response = await fetch(`${RUTA_CLIENTS}/partials?page=${page}&limit=${pageSize}`)
  const data = await response.json()
  return data
}

export const getClienteById = async (id) => {
  const response = await fetch(`${RUTA_CLIENTS}/${id}`)
  const data = await response.json()
  return data
}

export const createCliente = async (cliente) => {
  console.log(cliente)
  const response = await fetch(RUTA_CLIENTS, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cliente)
  })
  const data = await response.json()
  const status = response.status
  return { data, status }
}

export const updateCliente = async (id, cliente) => {
  const response = await fetch(`${RUTA_CLIENTS}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(cliente)
  })
  const data = await response.json()
  return data
}

export const deleteCliente = async (id) => {
  const response = await fetch(`${RUTA_CLIENTS}/${id}`, {
    method: 'DELETE'
  })
  const data = await response.json()
  return data
}
