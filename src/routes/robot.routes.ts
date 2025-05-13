import { Router } from 'express';
import {
  createRobot,
  getRobots,
  getRobotById,
  updateRobot,
  deleteRobot
} from '../controllers/robot.controller'; // ✅ que el archivo exista y se llame exactamente así

const router = Router();

router.post('/', createRobot);
router.get('/', getRobots);
router.get('/:id', getRobotById);
router.patch('/:id', updateRobot);
router.delete('/:id', deleteRobot);

export default router;
