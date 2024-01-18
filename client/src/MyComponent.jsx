// MyComponent.jsx
import React, { useState } from 'react';

const MyComponent = ({ socket }) => {
  const [bingoCard, setBingoCard] = useState(generarNuevoTarjeton());

  // Función para generar un nuevo tarjetón de bingo
  function generarNuevoTarjeton() {
    // Implementa la lógica para generar un tarjetón con números al azar
    // Puedes usar el rango de números que has establecido para el juego
    const nuevoTarjeton = [...Array(25)].map(() => Math.floor(Math.random() * 75) + 1);
    return nuevoTarjeton;
  }

  // Función para marcar un número en el tarjetón cuando se extrae una balota
  function marcarNumero(numero) {
    setBingoCard((prevCard) =>
      prevCard.map((cell) => (cell === numero ? 'X' : cell))
    );

    // Envía al servidor la información de que el jugador marcó un número
    socket.emit('marcarNumero', { numero });
  }

  return (
    <div>
      <h2>Mi Tarjetón de Bingo</h2>
      <div>
        {bingoCard.map((cell, index) => (
          <div
            key={index}
            className={`bingo-cell ${cell === 'X' ? 'marked' : ''}`}
            onClick={() => marcarNumero(cell)}
          >
            {cell}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyComponent;
