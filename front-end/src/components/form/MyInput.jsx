import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'

export default function ({ id, label, errorMessage, formProps, isInvalid, ...rest }) {
  return (
    <FormControl id={id} isInvalid={isInvalid}>
      <FormLabel>{label}</FormLabel>
      <Input {...formProps} {...rest} />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  )
}
