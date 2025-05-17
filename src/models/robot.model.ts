import { Schema, model, Document } from 'mongoose';

export interface IRobot extends Document {
  name: string;
  email: string;
  empresa: string;
}

const RobotSchema = new Schema<IRobot>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  empresa: { type: String, required: true }
}, {
  timestamps: true
});

export const RobotModel = model<IRobot>('Robot', RobotSchema);
