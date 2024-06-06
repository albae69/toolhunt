import { Database } from 'bun:sqlite'

export const client = new Database('./src/models/toolhunt.db')
