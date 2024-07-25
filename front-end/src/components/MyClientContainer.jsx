import { Box, HStack, Stack } from '@chakra-ui/react'
export default function ({ children }) {
  return (
    <Box bg='red' p={4}>
      <HStack bg='blue' spacing={4} mb={4}>
        <Stack bg='green' alignItems='start' spacing={4}>
          {children}
        </Stack>
      </HStack>
    </Box>
  )
}
