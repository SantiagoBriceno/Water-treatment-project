import { Schema, model } from 'mongoose'

const clienteSchema = new Schema({
  documento: {
    type: String,
    unique: true
  },
  nombre: {
    type: String,
    required: true
  },
  telefono: {
    type: String,
    required: true
  },
  direccion: {
    type: String
  }
},
{
  timestamps: true,
  versionKey: false
})

export const Cliente = model('Cliente', clienteSchema)
