import './App.css';
import React, { useState } from 'react';
import camavinga from "./camavinga.jpg";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {

  const [input,setInput] = useState();

  function handleInput(event) {
    setInput(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> CLASH OF CLANS SKILL-CHECK</h1>
        <p> INGRESE SU ID:</p>
        <input onChange = {handleInput}></input> 
        <p> SU ID: </p>
        <p>{input}</p>
        <img style={{ width: '1px', height: '1px' }} src={camavinga} alt="Camavinga" />

      </header>
    </div>
  );
}

export default App;
