import { Router } from 'express';
import CarController from '../Controllers/CarController';

const router = Router();

router.post('/', (req, res, next) => new CarController().create(req, res, next));
router.get('/', (req, res, next) => new CarController().findAll(req, res, next));

export default router;