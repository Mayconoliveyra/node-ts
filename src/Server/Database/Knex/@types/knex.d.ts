import { ICidade } from '../../Models/Cidade';
import { IPessoa } from '../../Models/Pessoa';
import { IUsuario } from '../../Models/Usuario';

declare module 'knex/types/tables' {
  interface Tables {
    cidade: ICidade;
    pessoa: IPessoa;
    usuario: IUsuario;
  }
}
