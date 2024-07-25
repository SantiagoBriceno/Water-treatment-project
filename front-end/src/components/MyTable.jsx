import { Table, Td, Tr, Thead, Tbody, Th, Tfoot, Heading, Stack, VStack, HStack, Button } from '@chakra-ui/react'

export default function ({ headers, data, dataAtributes, paginatedFunction }) {
  console.log(data)
  return (
    <>
      <VStack>
        <Heading>Clientes</Heading>
        <Table variant='striped' colorScheme='teal'>
          <HeaderTable headers={headers} />
          <BodyTable dataAtributes={dataAtributes} data={data} />
          <ButtonsTable />
        </Table>
      </VStack>
    </>
  )
}

const HeaderTable = ({ headers }) => {
  return (
    <Thead>
      <Tr>
        {headers.map((header, index) => (
          <Th key={index}>{header}</Th>
        ))}
      </Tr>
    </Thead>
  )
}

const BodyTable = ({ data, dataAtributes }) => {
  console.log(dataAtributes)
  return (
    <Tbody>
      {data.map((row, index) => (
        <Tr key={index}>
          {dataAtributes.map((atribute, index) => (
            <Td key={index}>{row[atribute]}</Td>
          ))}
        </Tr>
      ))}
    </Tbody>
  )
}

const ButtonsTable = () => {
  return (
    <Tfoot>
      <Tr>
        <HStack>
          <Button>
            Anterior
          </Button>
          <Button>
            Siguiente
          </Button>
        </HStack>
      </Tr>
    </Tfoot>
  )
}
