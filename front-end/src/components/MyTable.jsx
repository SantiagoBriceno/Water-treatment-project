import { Table, Text, Td, Tr, Thead, Tbody, Th, Tfoot, Heading, VStack, HStack, Button, Divider } from '@chakra-ui/react'

export default function ({ data, dataAtributes, paginate }) {
  return (

    <VStack p={4} bg='white' boxShadow='md' rounded='md' w='100%'>
      <Heading textAlign='center'>Clientes</Heading>
      <Divider borderColor='gray.400' />
      <Table colorScheme='gray'>
        <HeaderTable headers={dataAtributes} />
        <BodyTable dataAtributes={dataAtributes} data={data} />
        <ButtonsTable paginate={paginate} colSpan={dataAtributes.length} />
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

const ButtonsTable = ({ colSpan, paginate }) => {
  console.log(paginate)
  return (
    <Tfoot>
      <Tr>
        <Td colSpan={colSpan}>
          <HStack justifyContent='flex-end'>
            <Button onClick={paginate.handlePage} id='previous' _hover={{ background: 'gray.300' }}>
              Anterior
            </Button>
            <Text>
              {paginate.currentPage} / {paginate.totalPages}
            </Text>
            <Button onClick={paginate.handlePage} id='next' _hover={{ background: 'gray.300' }}>
              Siguiente
            </Button>
          </HStack>
        </Td>

      </Tr>
    </Tfoot>
  )
}
