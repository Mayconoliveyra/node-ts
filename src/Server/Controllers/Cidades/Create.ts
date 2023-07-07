import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { ICidade } from '../../Database/Models/Cidade';
import { validation } from '../../Shared/Middleware/Validation';

interface IBodyProps extends Omit<ICidade, 'id'> {}

export const createValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      nome: yup.string().required().min(3),
    }),
  ),
}));

export const create = async (req: Request<{}, {}, IBodyProps>, res: Response) => {
  console.log('[Create] Não implementado!');

  return res.status(StatusCodes.CREATED).json(1);
};
