import mongoose from 'mongoose';
import 'dotenv/config';  // carga automáticamente las variables de .env

const env = process.env.NODE_ENV;
const uri =
  env === 'production'
    ? process.env.MONGODB_URI_PROD
    : process.env.MONGODB_URI_LOCAL;
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
