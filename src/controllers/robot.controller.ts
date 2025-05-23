import { Request, Response } from 'express';
import { RobotModel } from '../models/robot.model';
import { CreateRobotDTO, UpdateRobotDTO } from '../dtos/robot.dto';

export const createRobot = async (req: Request, res: Response): Promise<void> => {
  try {
    const dto: CreateRobotDTO = req.body;
    console.log('DTO recibido:', dto); 
    const robot = new RobotModel(dto);
    await robot.save();
    res.status(201).json(robot);
  } catch (error) {
    res.status(400).json({ message: 'Error al crear robot', error });
  }
};

export const getRobots = async (_req: Request, res: Response): Promise<void> => {
  try {
    const robots = await RobotModel.find();
    res.status(200).json(robots);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener robots', error });
  }
};

export const getRobotById = async (req: Request, res: Response): Promise<void> => {
  try {
    const robot = await RobotModel.findById(req.params.id);
    if (!robot) {
      res.status(404).json({ message: 'Robot no encontrado' });
      return;
    }
    res.status(200).json(robot);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el robot', error });
  }
};

export const updateRobot = async (req: Request, res: Response): Promise<void> => {
  try {
    const dto: UpdateRobotDTO = req.body;
    const robot = await RobotModel.findByIdAndUpdate(req.params.id, dto, { new: true });
    if (!robot) {
      res.status(404).json({ message: 'Robot no encontrado' });
      return;
    }
    res.status(200).json(robot);
  } catch (error) {
    res.status(400).json({ message: 'Error al actualizar el robot', error });
  }
};

export const deleteRobot = async (req: Request, res: Response): Promise<void> => {
  try {
    const robot = await RobotModel.findByIdAndDelete(req.params.id);
    if (!robot) {
      res.status(404).json({ message: 'Robot no encontrado' });
      return;
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el robot', error });
  }
};
