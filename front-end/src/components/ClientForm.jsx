import { useForm } from 'react-hook-form'
import { Button, Heading, FormControl, FormErrorMessage, FormLabel, Input, InputLeftAddon, InputGroup, Select, Stack, Divider, Grid } from '@chakra-ui/react'
import { useClients } from '../hooks/useClients'
import MyInput from './form/MyInput'
import clientObjectValidator from '../validators/clientObjectValidator'

export default function ({ onSubmit }) {
  const { register, handleSubmit, formState: { errors } } = useForm()
  return (
    <Stack p={4} bg='gray.200' boxShadow='md' rounded='md' w='30%'>
      <Heading textAlign='center'>
        Nuevo cliente
      </Heading>
      <Divider borderColor='gray.400' />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid gap={6} mb={6}>
          {/* Nombre del cliente */}
          <MyInput
            variant='filled'
            id='nombre'
            isInvalid={errors.nombre}
            label='Nombre del cliente'
            placeholder='Jaimito López'
            errorMessage={errors.nombre && errors.nombre.message}
            formProps={{
              ...register('nombre',
                clientObjectValidator.nombre
              )
            }}
          />
          {/* Documento del cliente, puede ser cedula de indentidad (V) o Numero de Rif (J) */}
          <FormControl id='documento' isInvalid={errors.documento}>
            <FormLabel>Documento</FormLabel>
            <InputGroup>
              <InputLeftAddon p={0}>
                <Select rounded='none' {...register('tipoDocumento')}>
                  <option value='V'>V</option>
                  <option value='J'>J</option>
                </Select>
              </InputLeftAddon>
              <Input
                variant='filled'
                {...register('documento',
                  clientObjectValidator.documento
                )}
              />
            </InputGroup>
            <FormErrorMessage>{errors.documento && errors.documento.message}</FormErrorMessage>
          </FormControl>
          {/* Teléfono del cliente */}
          <MyInput
            variant='filled'
            id='telefono'
            isInvalid={errors.telefono}
            label='Teléfono'
            placeholder='0412123456'
            errorMessage={errors.telefono && errors.telefono.message}
            formProps={{
              ...register('telefono',
                clientObjectValidator.telefono
              )
            }}
          />
        </Grid>
        <Button _hover={{ background: 'gray.300' }} w='auto' type='submit'>Guardar nuevo cliente</Button>

      </form>
    </Stack>
  )
}
