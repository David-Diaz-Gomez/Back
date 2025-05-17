// src/app.ts
import express from 'express';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';
import robotRoutes from './routes/robot.routes';

const app = express();

// 1) Habilitar CORS
//    En desarrollo puedes usar '*' para permitir cualquier origen.
//    En producción restringe a tu frontend real (por ejemplo, process.env.FRONTEND_URL).
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173' ,
  methods: ['GET','POST','PATCH','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization']
}));

// 2) Parseo de body
app.use(json());
app.use(urlencoded({ extended: true }));

// 3) Rutas
app.use('/api/robot', robotRoutes);

export default app;
