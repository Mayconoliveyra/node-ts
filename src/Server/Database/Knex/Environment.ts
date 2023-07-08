import { Knex } from 'knex';
import path from 'path';

export const development: Knex.Config = {
  client: 'mysql2',
  migrations: {
    directory: path.resolve(__dirname, '..', 'Migrations'),
  },
  seeds: {
    directory: path.resolve(__dirname, '..', 'Seeds'),
  },
  connection: {
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT || 5432),
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    dateStrings: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    typeCast: function (field: any, next: any) {
      if (field.type == 'TINY' && field.length == 1) {
        return field.string() == '1'; // 1 = true, 0 = false
      }
      return next();
    },
  },
};

export const test: Knex.Config = {
  ...development,
  connection: ':memory:',
};

export const production: Knex.Config = {
  client: 'mysql2',
  migrations: {
    directory: path.resolve(__dirname, '..', 'Migrations'),
  },
  seeds: {
    directory: path.resolve(__dirname, '..', 'Seeds'),
  },
  connection: {
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT || 5432),
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    dateStrings: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    typeCast: function (field: any, next: any) {
      if (field.type == 'TINY' && field.length == 1) {
        return field.string() == '1'; // 1 = true, 0 = false
      }
      return next();
    },
  },
};
