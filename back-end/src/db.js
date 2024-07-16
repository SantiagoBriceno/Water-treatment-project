import mongoose from 'mongoose'
import { MONGO_URI } from './config/config'
console.log(MONGO_URI)

export const pool = () => {
  mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))
}
