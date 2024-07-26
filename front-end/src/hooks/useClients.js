import { useEffect, useState } from 'react'
import { createCliente, getPaginatedClientes } from '../service/cliente'
import { CLIENT_ATRIBUTES } from '../config/config'
export const useClients = () => {
  const [data, setData] = useState([])

  // Para paginación en tabla

  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [pageSize] = useState(5)

  // PARA TRAER A TODOS LOS CLIENTES
  // useEffect(() => {
  //   getClientes().then(setData)
  // }, [])

  // CLIENTES PAGINADOS

  useEffect(() => {
    getPaginatedClientes(currentPage, pageSize).then((response) => {
      console.log(response)
      setData(response)
      // MODIFICAR
      setTotalPages(1)
      // setTotalPages(response.totalPages)
    })
  }, [currentPage, pageSize])

  const handlePage = (e) => {
    if ((e.target.id === 'previous' && currentPage === 1) || (e.target.id === 'next' && currentPage === totalPages)) {
      return
    }
    if (e.target.id === 'previous') {
      setCurrentPage((prev) => prev - 1)
    } else {
      setCurrentPage((prev) => prev + 1)
    }
  }

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
  return { onSubmit, data, CLIENT_ATRIBUTES, paginate: { handlePage, currentPage, totalPages } }
}
