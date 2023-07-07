import express from 'express';

import 'dotenv/config';
import './Shared/Services/TranslationsYup';

import { router } from './Routes';

const server = express();

server.use(express.json());
server.use(router);

export { server };
