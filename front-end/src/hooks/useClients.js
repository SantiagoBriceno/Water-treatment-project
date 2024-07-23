import { useEffect, useState } from 'react'
import { createCliente, getClientes } from '../service/cliente'
export const useClients = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getClientes().then(setData)
  }, [])

  const onSubmit = (values) => {
    const { nombre, tipoDocumento, documento, telefono } = values
    const newClient = {
      nombre,
      documento: `${tipoDocumento}-${documento}`,
      telefono
    }

    createCliente(newClient).then((response) => {
      console.log(response.message[0].msg)
    })
  }
  return { onSubmit, data }
}
