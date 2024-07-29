import { config } from 'dotenv'

config()

export const PORT = process.env.CHAT_PORT || 3001
