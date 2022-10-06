import { Client, ClientConfig } from 'pg';

const {
  PGPORT,
  PGHOST,
  PGUSER,
  PGDATABASE,
  PGPASSWORD,
} = process.env;

const credentials: ClientConfig = {
  user: PGUSER || "postgres",
  host: PGHOST || "localhost",
  database: PGDATABASE || "postgres",
  password: PGPASSWORD || "1",
  port: Number(PGPORT) || 5432,
};

export const db = new Client(credentials);

db.connect();
