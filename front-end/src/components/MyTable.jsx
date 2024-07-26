import { Table, Td, Tr, Thead, Tbody, Th, Tfoot, Heading, VStack, HStack, Button, Divider } from '@chakra-ui/react'

export default function ({ headers, data, dataAtributes, paginatedFunction }) {
  return (

    <VStack p={4} bg='gray.200' boxShadow='md' rounded='md' w='100%'>
      <Heading textAlign='center'>Clientes</Heading>
      <Divider borderColor='gray.400' />
      <Table colorScheme='gray'>
        <HeaderTable headers={headers} />
        <BodyTable dataAtributes={dataAtributes} data={data} />
        <ButtonsTable colSpan={dataAtributes.length} />
      </Table>
    </VStack>

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
        <Tr _hover={{ background: 'gray.300' }} key={index}>
          {dataAtributes.map((atribute, index) => (
            <Td key={index}>{row[atribute]}</Td>
          ))}
        </Tr>
      ))}
    </Tbody>
  )
}

const ButtonsTable = ({ colSpan }) => {
  return (
    <Tfoot>
      <Tr>
        <Td colSpan={colSpan}>
          <HStack justifyContent='flex-end'>
            <Button _hover={{ background: 'gray.300' }}>
              Anterior
            </Button>
            <Button _hover={{ background: 'gray.300' }}>
              Siguiente
            </Button>
          </HStack>
        </Td>

      </Tr>
    </Tfoot>
  )
}
