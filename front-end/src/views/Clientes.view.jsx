import ClientForm from '../components/ClientForm'
import MyTable from '../components/MyTable'
import { useClients } from '../hooks/useClients'
import MyClientContainer from '../components/MyClientContainer'
import { useLoaderData } from 'react-router-dom'

export default function () {
  const { clientes } = useLoaderData()
  const { data, onSubmit, CLIENT_ATRIBUTES, paginate } = useClients({ clientes })
  return (
    <MyClientContainer>
      <ClientForm onSubmit={onSubmit} />
      {(clientes.length !== 0 && CLIENT_ATRIBUTES.length !== 0)
        ? <MyTable data={data} dataAtributes={CLIENT_ATRIBUTES} paginate={paginate} />
        : <p>Cargando...</p>}

    </MyClientContainer>

  )
}
