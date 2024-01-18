
import React from 'react';
import MyComponent from './MyComponent.jsx';
const App = ({ socket }) => {
  // Puedes pasar el socket como prop a los componentes secundarios
  return (
    <div>
      <h1>¡Bienvenido a la aplicación de Bingo!</h1>
      <MyComponent socket={socket} />
    </div>
  );
};

export default App;




