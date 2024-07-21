import { Schema, model } from 'mongoose'

const inventarioModel = new Schema({
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  cantidad: {
    type: Number,
    required: true
  },
  precio: {
    type: Number,
    required: true
  }
},
{
  timestamps: true,
  versionKey: false
})

export const Inventario = model('Inventario', inventarioModel)
