import { Schema, model } from 'mongoose'

const facturaSchema = new Schema({
  cliente: {
    type: Schema.Types.ObjectId,
    ref: 'Cliente',
    required: true
  },
  montoTotal: {
    type: Number,
    required: true
  },
  abonoTotal: {
    type: Number,
    required: true
  },
  abonos: [{
    monto: {
      type: Number,
      required: true
    },
    fecha: {
      type: Date,
      required: true
    }
  }],
  fecha: {
    type: Date,
    required: true
  },
  gastosAdicionales: {
    type: Number
  },
  items: [{
    servicio: {
      type: Schema.Types.ObjectId,
      ref: 'Servicio',
      required: true
    },
    cantidad: {
      type: Number,
      required: true
    },
    monto: {
      type: Number,
      required: true
    }
  }]
},
{
  timestamps: true,
  versionKey: false
})

export const Factura = model('Factura', facturaSchema)
