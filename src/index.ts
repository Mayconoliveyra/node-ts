import { server } from './Server';

server.listen(process.env.PORT || 3333, () =>
  console.log(`Back-end iniciado na porta ${process.env.PORT || 3333}.`),
);
