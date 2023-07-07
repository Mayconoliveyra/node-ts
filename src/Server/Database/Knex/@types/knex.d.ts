import { ICidade } from '../../Models/Cidade';

declare module 'knex/types/tables' {
  interface Tables {
    cidade: ICidade;
    // pessoa: IPessoa
    // usuario: IUsuario
  }
}
