import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import { CidadesController } from '../Controllers/Cidades';
import { PessoasController } from '../Controllers/Pessoas';
import { UsuariosController } from '../Controllers/Usuarios';

import { ensureAuthenticated } from './../Shared/Middleware/EnsureAuthenticated';

const router = Router();

router.get('/', (req, res) => res.status(StatusCodes.OK).json('API TESTADA!.'));

router.get(
  '/cidades',
  ensureAuthenticated,
  CidadesController.getAllValidation,
  CidadesController.getAll,
);
router.post(
  '/cidades',
  ensureAuthenticated,
  CidadesController.createValidation,
  CidadesController.create,
);
router.get(
  '/cidades/:id',
  ensureAuthenticated,
  CidadesController.getByIdValidation,
  CidadesController.getById,
);
router.put(
  '/cidades/:id',
  ensureAuthenticated,
  CidadesController.updateByIdValidation,
  CidadesController.updateById,
);
router.delete(
  '/cidades/:id',
  ensureAuthenticated,
  CidadesController.deleteByIdValidation,
  CidadesController.deleteById,
);

router.get(
  '/pessoas',
  ensureAuthenticated,
  PessoasController.getAllValidation,
  PessoasController.getAll,
);
router.post(
  '/pessoas',
  ensureAuthenticated,
  PessoasController.createValidation,
  PessoasController.create,
);
router.get(
  '/pessoas/:id',
  ensureAuthenticated,
  PessoasController.getByIdValidation,
  PessoasController.getById,
);
router.put(
  '/pessoas/:id',
  ensureAuthenticated,
  PessoasController.updateByIdValidation,
  PessoasController.updateById,
);
router.delete(
  '/pessoas/:id',
  ensureAuthenticated,
  PessoasController.deleteByIdValidation,
  PessoasController.deleteById,
);

router.post('/entrar', UsuariosController.signInValidation, UsuariosController.signIn);
router.post('/cadastrar', UsuariosController.signUpValidation, UsuariosController.signUp);

export { router };
