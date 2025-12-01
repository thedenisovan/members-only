import { NeonComments } from '../db/query';

const defaultUsers: Express.User[] = [
  {
    name: 'Harry',
    surname: 'Potter',
    email: 'harry.potter2000@hogwarts.co.uk',
    pass: 'Ronald666!',
    isMember: 'on',
    isAdmin: 'Odin',
  },
  {
    name: 'Rubeus',
    surname: 'Hagrid',
    email: 'hagrid@hogwarts.co.uk',
    pass: 'Hagrid123!',
    isMember: 'on',
    isAdmin: 'Thor',
  },
  {
    name: 'Albus',
    surname: 'Dumbledore',
    email: 'dumbledore@hogwarts.co.uk',
    pass: 'ElderWand1!',
    isMember: 'on',
    isAdmin: 'Odin',
  },
  {
    name: 'Darth',
    surname: 'Vader',
    email: 'vader@empire.gov',
    pass: 'Force999!',
    isMember: 'not',
    isAdmin: 'Thor',
  },
  {
    name: 'Rick',
    surname: 'Sanchez',
    email: 'rick@citadel.net',
    pass: 'MortyIsAnnoying1!',
    isMember: 'not',
    isAdmin: 'Thor',
  },
  {
    name: 'Hermione',
    surname: 'Granger',
    email: 'hermione@hogwarts.co.uk',
    pass: 'Polyjuice55!',
    isMember: 'on',
    isAdmin: 'Thor',
  },
  {
    name: 'Ron',
    surname: 'Weasley',
    email: 'ron@hogwarts.co.uk',
    pass: 'Scabbers88!',
    isMember: 'on',
    isAdmin: 'Thor',
  },
];

const defaultComments: NeonComments[] = [
  {
    title: 'First Impression',
    message: 'Hogwarts looks amazing, i will never return to London!',
    creation_time: '2000-01-09',
    creator_id: 1,
  },
  {
    title: 'Chosen Ones Update',
    message: 'Ready for another year of chaos at Hogwarts.',
    creation_time: '2000-01-10',
    creator_id: 1,
  },
  {
    title: 'Game Keeper Thought',
    message: 'Got a new creature today — probably dangerous.',
    creation_time: '2000-01-11',
    creator_id: 6,
  },
  {
    title: 'Head Teacher Note',
    message: 'Sometimes the smallest choices shift destiny.',
    creation_time: '2000-01-12',
    creator_id: 7,
  },
  {
    title: 'Dark Log',
    message: 'The Empire requires discipline. Don’t test me.',
    creation_time: '2000-01-13',
    creator_id: 8,
  },
  {
    title: 'Smartest Man In Universe Entry',
    message: 'I upgraded the portal gun again. Probably broke five timelines.',
    creation_time: '2000-01-14',
    creator_id: 9,
  },
  {
    title: 'Granger Report',
    message: 'Research complete. Now let’s fix everyone else’s mistakes.',
    creation_time: '2000-01-15',
    creator_id: 10,
  },
  {
    title: 'Ginger Comment',
    message: 'If anything goes wrong, it wasn’t my fault this time.',
    creation_time: '2000-01-16',
    creator_id: 11,
  },
];

export default defaultUsers;
export { defaultComments };
