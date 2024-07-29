const nombre = {
  required: 'Este campo es requerido',
  minLength: { value: 3, message: 'El nombre debe tener al menos 3 caracteres' },
  maxLength: { value: 50, message: 'El nombre no debe tener más de 50 caracteres' },
  pattern: { value: /^[a-zA-ZñÑ\s]*$/, message: 'El nombre solo puede contener letras y espacios' }
}

const documento = {
  required: 'Este campo es requerido',
  minLength: { value: 6, message: 'El documento debe tener al menos 6 caracteres' },
  maxLength: { value: 10, message: 'El documento no debe tener más de 10 caracteres' },
  pattern: { value: /^[0-9]*$/, message: 'El documento solo puede contener números' }
}

const telefono = {
  required: 'Este campo es requerido',
  minLength: { value: 11, message: 'El teléfono debe tener al menos 7 caracteres' },
  maxLength: { value: 11, message: 'El teléfono no debe tener más de 15 caracteres' },
  pattern: { value: /^[0-9]*$/, message: 'El teléfono solo puede contener números' }
}

export default {
  nombre,
  documento,
  telefono
}
