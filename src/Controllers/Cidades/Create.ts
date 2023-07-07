import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { validation } from '../../Shared/Middleware/Validation';

interface ICidade {
  nome: string;
}
export const createValidation = validation((getSchema) => ({
  body: getSchema<ICidade>(
    yup.object().shape({
      nome: yup.string().required().min(3),
    }),
  ),
}));

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  console.log('[Create] Não implementado!');

  return res.status(StatusCodes.CREATED).json(1);
};
