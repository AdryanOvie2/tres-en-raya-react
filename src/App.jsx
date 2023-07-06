import { useState } from 'react';
import './App.css'

// eslint-disable-next-line react/prop-types
function Square({value}){

  const [valor, setValor] = useState(null);

  function handleClick(){
    console.log('Clicked');
  }

  return(
    <button 
    className='square'
    onClick={handleClick}
    >
      {value}
    </button>
  );
}

function Board() {
  return (
    <>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
      <div className='board-row'>
        <Square />
        <Square />
        <Square />
      </div>
    </>
  )
}

export default Board
