import React from 'react';
import '../../assets/styles/helloworld.scss';

const HolaMundo = () => {
  const Hello = 'Hola mundo';
  const isTrue = true;

  return (
    <div className='HolaMundo'>
      <h1>{Hello}</h1>
      <h2>Curso básico de React</h2>
      <img src='https://i.imgur.com/lzxrKcK.jpg' alt='Code' />
      {isTrue ? <h1>Esto es verdadero</h1> : <h1>Soy Falso</h1>}
      {isTrue && <h1>Soy verdadero</h1>}
    </div>
  );
};

export default HolaMundo;
