import express from 'express';
const server = express();

server.get('/', (req, res) => res.status(200).json('Olá dev'));

export { server };
