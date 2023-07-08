import express from 'express';
import fs from 'fs';
import moment from 'moment';
import morgan from 'morgan-body';
import path from 'path';

import 'dotenv/config';
import './Shared/Services/TranslationsYup';

import { router } from './Routes';

const server = express();

const log = fs.createWriteStream(
  path.join(__dirname, '..', './logs', `express-${moment().format('YYYY-MM-DD')}.log`),
  {
    flags: 'a',
  },
);

morgan(server, {
  noColors: true,
  stream: log,
  prettify: true,
  filterParameters: ['senha', 'email', 'accessToken'],
});

server.use(express.json());
server.use(router);

export { server };
