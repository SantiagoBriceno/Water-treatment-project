import mongoose from 'mongoose'
import { MONGO_URI } from './config/config.js'

export const pool = () => {
  mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))
}
