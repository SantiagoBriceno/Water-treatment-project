import { pool } from './db.js'
import express from 'express'
import cors from 'cors'
import clientesRouter from './routes/v1/clientes.routes.js'

pool()

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/v1/clientes', clientesRouter)

export default app
