import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000'); // Reemplaza con la URL de tu servidor de socket

// Puedes pasar el socket como una propiedad al contexto de tu aplicación
// Esto facilitará el acceso al socket desde cualquier componente en tu aplicación
const app = (
  <React.StrictMode>
    <App socket={socket} />
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));

