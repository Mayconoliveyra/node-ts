import { server } from './Server';
import { Knex } from './Server/Database/Knex';

const startServer = () => {
  server.listen(process.env.PORT || 3333, () => {
    console.log(`App rodando na porta ${process.env.PORT || 3333}`);
  });
};

if (process.env.NODE_ENV !== 'dev') {
  Knex.migrate
    .latest()
    .then(() => {
      startServer();
    })
    .catch(console.log);
} else {
  startServer();
}
