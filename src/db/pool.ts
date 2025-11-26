const { Pool } = require('pg');
require('dotenv').config();

export const pool = new Pool({
  connectionString: process.env.CONNECTION_STRING,
});
