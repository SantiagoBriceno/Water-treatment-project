import ClientForm from '../components/ClientForm'
import MyTable from '../components/MyTable'
import { useClients } from '../hooks/useClients'
import MyClientContainer from '../components/MyClientContainer'

export default function () {
  const { data, onSubmit, CLIENT_ATRIBUTES, paginate } = useClients()
  return (
    <MyClientContainer>
      <ClientForm onSubmit={onSubmit} />
      {(data.length !== 0 && CLIENT_ATRIBUTES.length !== 0)
        ? <MyTable data={data} dataAtributes={CLIENT_ATRIBUTES} paginate={paginate} />
        : <p>Cargando...</p>}

    </MyClientContainer>

  )
}
