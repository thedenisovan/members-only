import { NeonUsers } from '../db/query';

const defaultUsers: NeonUsers[] = [
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

export default defaultUsers;
