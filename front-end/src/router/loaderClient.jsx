import { getPaginatedClientes } from '../service/cliente'

export async function loaderClient () {
  const clientes = await getPaginatedClientes(1, 5)
  return { clientes }
}
