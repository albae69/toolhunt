import { client } from './client'

client.exec(`
CREATE TABLE IF NOT EXISTS tools (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    url TEXT NOT NULL,
    image TEXT NOT NULL,
    category TEXT NOT NULL,
    verified INTEGER DEFAULT 0,
    is_public INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS analytics (
    id TEXT PRIMARY KEY,
    tool_id TEXT NOT NULL,
    visits INTEGER DEFAULT 1,
    FOREIGN KEY (tool_id) REFERENCES tools (id)
);
`)
