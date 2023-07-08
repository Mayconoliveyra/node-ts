import { PasswordCrypto } from '../../../Shared/Services/PasswordCrypto';
import { ETableNames } from '../../ETableNames';
import { Knex } from '../../Knex';
import { IUsuario } from '../../Models/Usuario';

export const create = async (usuario: Omit<IUsuario, 'id'>): Promise<number | Error> => {
  try {
    const usuarioFromDB = await Knex(ETableNames.usuario)
      .select()
      .where('email', '=', usuario.email)
      .first();

    if (usuarioFromDB) return new Error('E-mail já utilizado');

    const hashedPassword = await PasswordCrypto.hashPassword(usuario.senha);

    const [result] = await Knex(ETableNames.usuario)
      .insert({ ...usuario, senha: hashedPassword })
      .returning('id');

    if (typeof result === 'object') {
      return result.id;
    } else if (typeof result === 'number') {
      return result;
    }

    return new Error('Erro ao cadastrar o registro');
  } catch (error) {
    console.log(error);
    return new Error('Erro ao cadastrar o registro');
  }
};
