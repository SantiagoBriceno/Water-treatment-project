import { useForm } from 'react-hook-form'
import { Button, Heading, FormControl, FormErrorMessage, FormLabel, Input, InputLeftAddon, InputGroup, Select } from '@chakra-ui/react'
import MyInput from './form/MyInput'

export default function () {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (values) => {
    console.log(values)
  }

  const onError = () => {
    console.log(Object.keys(errors))
  }

  return (
    <>
      <Heading>
        Nuevo cliente
      </Heading>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        {/* Nombre del cliente */}
        <MyInput
          id='nombre'
          isInvalid={errors.nombre}
          label='Nombre del cliente'
          placeholder='Jaimito López'
          errorMessage={errors.nombre && errors.nombre.message}
          formProps={{
            ...register('nombre',
              {
                required: 'Este campo es requerido',
                minLength: { value: 3, message: 'El nombre debe tener al menos 3 caracteres' },
                maxLength: { value: 50, message: 'El nombre no debe tener más de 50 caracteres' }
              }
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
                {
                  required: 'Este campo es requerido',
                  minLength: { value: 6, message: 'El documento debe tener al menos 6 caracteres' },
                  maxLength: { value: 10, message: 'El documento no debe tener más de 10 caracteres' }
                }
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
              {
                minLength: { value: 7, message: 'El teléfono debe tener al menos 7 caracteres' },
                maxLength: { value: 15, message: 'El teléfono no debe tener más de 15 caracteres' }
              }
            )
          }}
        />

        <Button type='submit'>Guardar nuevo cliente</Button>
      </form>
    </>
  )
}
