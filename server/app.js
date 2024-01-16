// app.js
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

const app = express();

app.use(cors());
app.use(express.json());

// Configuración de rutas y controladores

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose.connect('mongodb://localhost/bingo', {

});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});
