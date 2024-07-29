import express from 'express'
import { Server } from 'socket.io'
import { createServer } from 'node:http'
import { PORT } from './config.js'

const app = express()
const server = createServer(app)
const io = new Server(server)

io.on('connection', () => {
  console.log('Usuario conectado')
})

app.get('/', (req, res) => {
  res.send('<h1>Este es el servidor</h1>')
})

server.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})
