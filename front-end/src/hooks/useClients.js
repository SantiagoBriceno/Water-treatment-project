import { useEffect, useState } from 'react'
import { createCliente, getPaginatedClientes } from '../service/cliente'
import { CLIENT_ATRIBUTES } from '../config/config'
export const useClients = ({ clientes }) => {
  const [data, setData] = useState(clientes.clientes)
  const [firstRender, setFirstRender] = useState(true)

  // Para paginación en tabla

  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(clientes.totalPages)
  const [pageSize] = useState(5)

  // PARA TRAER A TODOS LOS CLIENTES
  // useEffect(() => {
  //   getClientes().then(setData)
  // }, [])

  // CLIENTES PAGINADOS

  useEffect(() => {
    if (firstRender) {
      return
    }
    getPaginatedClientes(currentPage, pageSize).then((response) => {
      const { clientes, totalPages } = response
      setData(clientes)
      // MODIFICAR
      setTotalPages(totalPages)
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
      setFirstRender(false)
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
      console.log(response)
      console.log(response.message[0].msg)
    })
  }
  return { onSubmit, data, CLIENT_ATRIBUTES, paginate: { handlePage, currentPage, totalPages } }
}
