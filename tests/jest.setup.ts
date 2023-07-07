import supertest from 'supertest';

import { server } from '../src/Server';
import { Knex } from '../src/Server/Database/Knex';

beforeAll(async () => {
  await Knex.migrate.latest();
});

afterAll(async () => {
  await Knex.destroy();
});

export const testServer = supertest(server);
