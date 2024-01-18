import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config();
const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server);

// Configuración de MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
mongoose.connection.once('open', () => {
  console.log('Conectado a MongoDB Atlas');
});
app.use(express.json());
app.use('/auth', authRoutes);

// Configuración de Socket.IO
io.on('connection', (socket) => {
  console.log('Nuevo usuario conectado');

  // Ejemplo: Manejar un evento del cliente
  socket.on('exampleEventFromClient', (data) => {
    console.log('Recibido desde el cliente:', data);
    // Puedes emitir eventos de vuelta al cliente si es necesario
    // socket.emit('exampleEventFromServer', { responseData: 'Respuesta desde el servidor' });
  });

  // Importante: Limpiar eventos cuando el usuario se desconecta
  socket.on('disconnect', () => {
    console.log('Usuario desconectado');
  });
});


server.listen(process.env.PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
