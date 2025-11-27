import { NeonUsers } from '../db/query';

const defaultUsers: NeonUsers[] = [
  {
    name: 'Harry',
    surname: 'Potter',
    email: 'harry.potter2000@hogwarts.co.uk',
    password: 'Ronald666!',
    isMember: true,
    isAdmin: true,
  },
  {
    name: 'Rubeus',
    surname: 'Hagrid',
    email: 'hagrid@hogwarts.co.uk',
    password: 'Hagrid123!',
    isMember: true,
    isAdmin: false,
  },
  {
    name: 'Albus',
    surname: 'Dumbledore',
    email: 'dumbledore@hogwarts.co.uk',
    password: 'ElderWand1!',
    isMember: true,
    isAdmin: true,
  },
  {
    name: 'Darth',
    surname: 'Vader',
    email: 'vader@empire.gov',
    password: 'Force999!',
    isMember: false,
    isAdmin: false,
  },
  {
    name: 'Rick',
    surname: 'Sanchez',
    email: 'rick@citadel.net',
    password: 'MortyIsAnnoying1!',
    isMember: false,
    isAdmin: false,
  },
  {
    name: 'Hermione',
    surname: 'Granger',
    email: 'hermione@hogwarts.co.uk',
    password: 'Polyjuice55!',
    isMember: true,
    isAdmin: false,
  },
  {
    name: 'Ron',
    surname: 'Weasley',
    email: 'ron@hogwarts.co.uk',
    password: 'Scabbers88!',
    isMember: true,
    isAdmin: false,
  },
];

export default defaultUsers;
