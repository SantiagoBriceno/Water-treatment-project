import { useEffect, useState } from 'react'
import { createCliente, getPaginatedClientes } from '../service/cliente'
import { useToast } from '@chakra-ui/react'
import { CLIENT_ATRIBUTES } from '../config/config'
import clientToast from '../utils/MyToast'
export const useClients = ({ clientes }) => {
  const [data, setData] = useState(clientes.clientes)
  const [firstRender, setFirstRender] = useState(true)
  const toast = useToast()

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
      const { data, status } = response
      if (status === 201) { // EXITO
        const { message } = data
        clientToast(toast, status, message)
      } else if (status === 400) { // CASO QUE EXPRESS VALIDATOR DEVUELVA ERRORES
        const { errors } = data
        const cantErrors = errors.length
        clientToast(toast, status, `Se encontraron ${cantErrors} errores`)
        // AQUI VA EL TOAST
      } else { // CASO DE ERROR DE SERVER (500)
        const message = 'Error en el servidor'
        clientToast(toast, status, message)
        // AQUI VA EL TOAST
      }
    })
  }
  return { onSubmit, data, CLIENT_ATRIBUTES, paginate: { handlePage, currentPage, totalPages } }
}
