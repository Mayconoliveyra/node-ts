import { ICidade } from '../../Models/Cidade';
import { IPessoa } from '../../Models/Pessoa';

declare module 'knex/types/tables' {
  interface Tables {
    cidade: ICidade;
    pessoa: IPessoa;
    // usuario: IUsuario
  }
}
