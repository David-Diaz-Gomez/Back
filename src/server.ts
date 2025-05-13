import app from './app';
import { connectDB } from './config/database';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;

const start = async () => {
  await connectDB();
  app.listen(PORT, () =>
    console.log(`🚀 Server listo en http://localhost:${PORT}`)
  );
};

start();
