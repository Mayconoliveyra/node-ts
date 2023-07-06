import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (req, res) => res.status(200).json('Olá dev'));
router.get('/teste', (req, res) => res.status(StatusCodes.OK).json('Olá dev TESTE'));

router.post('/post', (req, res) => {
  console.log(req.body);

  return res.status(StatusCodes.CREATED).json('Olá dev Post');
});

export { router };
