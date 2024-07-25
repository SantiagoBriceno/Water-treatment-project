import ClientForm from '../components/ClientForm'
import MyTable from '../components/MyTable'
import { useClients } from '../hooks/useClients'
// import MyClientContainer from '../components/MyClientContainer'

const bodyAtribute = ['nombre', 'documento', 'telefono']

export default function () {
  const { data } = useClients()
  return (
    <>
      <ClientForm />
      {data.length !== 0 && bodyAtribute !== 0 ? <MyTable data={data} headers={bodyAtribute} dataAtributes={bodyAtribute} /> : <p>Cargando...</p>}

    </>

  )
}
