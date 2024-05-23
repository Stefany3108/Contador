import React, { useState } from 'react'; 
import './Contador.css';

  

function Contador() { 

  const [contador, setContador] = useState(0); 
 
  const incrementar = () => { 
    setContador(contador + 1); 
  }; 
 

  const decrementar = () => { 
    setContador(contador - 1); 
  }; 

  
  return ( 
    <div className='container'> 
      <h2>Contador</h2> 
      <p>Valor: {contador}</p> 
      <button className='botton' onClick={incrementar}>Incrementar</button> 
      <button className='botton' onClick={decrementar}>Decrementar</button> 
    </div> 
  ); 
} 

  

export default Contador; 