const { Client } = require('pg');
import DbQuery from './query';
require('dotenv').config();
import defaultUsers from '../public/defaultData';

export default async function main() {
  console.log('...seeding');
  const client = new Client({
    connectionString: process.env.CONNECTION_STRING,
  });

  await client.connect();

  // Populates db with pre made users
  for (let i = 0; i < defaultUsers.length; i++) {
    await DbQuery.createNewUser(defaultUsers[i]!);
  }
  await client.end();
  console.log('done');
}
