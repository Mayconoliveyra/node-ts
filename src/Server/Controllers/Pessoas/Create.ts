import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { IPessoa } from '../../Database/Models/Pessoa';
import { PessoasProvider } from '../../Database/Providers/Pessoas';
import { validation } from '../../Shared/Middleware/Validation';

interface IBodyProps extends Omit<IPessoa, 'id'> {}

export const createValidation = validation((get) => ({
  body: get<IBodyProps>(
    yup.object().shape({
      email: yup.string().required().email(),
      cidadeId: yup.number().integer().required(),
      nomeCompleto: yup.string().required().min(3),
    }),
  ),
}));

export const create = async (req: Request<{}, {}, IBodyProps>, res: Response) => {
  const result = await PessoasProvider.create(req.body);

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message,
      },
    });
  }

  return res.status(StatusCodes.CREATED).json(result);
};
