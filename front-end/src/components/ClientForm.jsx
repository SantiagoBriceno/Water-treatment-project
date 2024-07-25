import { useForm } from 'react-hook-form'
import { Button, Heading, FormControl, FormErrorMessage, FormLabel, Input, InputLeftAddon, InputGroup, Select } from '@chakra-ui/react'
import { useClients } from '../hooks/useClients'
import MyInput from './form/MyInput'
import clientObjectValidator from '../validators/clientObjectValidator'

export default function () {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { onSubmit } = useClients()
  return (
    <>
      <Heading>
        Nuevo cliente
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Nombre del cliente */}
        <MyInput
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
              {...register('documento',
                clientObjectValidator.documento
              )}
            />
          </InputGroup>
          <FormErrorMessage>{errors.documento && errors.documento.message}</FormErrorMessage>
        </FormControl>
        {/* Teléfono del cliente */}
        <MyInput
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

        <Button type='submit'>Guardar nuevo cliente</Button>
      </form>
    </>
  )
}
