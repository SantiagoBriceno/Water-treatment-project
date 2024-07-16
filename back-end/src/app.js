import { pool } from './db.js'
import express from 'express'
import cors from 'cors'

pool()

const app = express()
app.use(cors())
app.use(express.json())

export default app
