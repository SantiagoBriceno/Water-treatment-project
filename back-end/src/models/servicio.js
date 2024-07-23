import { Schema, model } from 'mongoose'

const servicioSchema = new Schema({
  descripcion: {
    type: String,
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

export const Servicio = model('Servicio', servicioSchema)
