import { Client } from 'pg';
import DbQuery from './query';
import defaultUsers, { defaultComments } from '../public/defaultData';
require('dotenv').config();

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
  // Populates db with pre made comments
  for (let i = 0; i < defaultComments.length; i++) {
    await DbQuery.createNewComment(defaultComments[i]!);
  }
  await client.end();
  console.log('done');
}
