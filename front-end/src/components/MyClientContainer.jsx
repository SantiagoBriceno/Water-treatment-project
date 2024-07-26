import { Box, Flex, HStack, Stack } from '@chakra-ui/react'
export default function ({ children }) {
  return (

    <Flex boxShadow='md' rounded='md' bg='gray.300' p={4} gap={8}>

      {children}

    </Flex>

  )
}
