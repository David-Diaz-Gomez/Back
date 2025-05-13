import mongoose from 'mongoose';
import 'dotenv/config';  // carga automáticamente las variables de .env

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error('❌ MONGODB_URI no está definida en .env');
  process.exit(1);
}

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(uri);
    console.log('📦 Conectado a MongoDB Atlas');
  } catch (err) {
    console.error('❌ Error conectando a MongoDB:', err);
    process.exit(1);
  }
};
