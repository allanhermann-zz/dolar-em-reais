import React from 'react'
import './App.css';
import fetchValorDolar from './Components/fetchValorDolar.js'
 
const {useEffect, useState} = React;

function App() {
  const [valorDolarExibido,setValorDolarExibido] = useState('');

  useEffect(() =>{
    fetchValorDolar().then(valorDolar =>
        setValorDolarExibido(valorDolar || 'Não foi possível encontrar os dados da moeda.')
        )
  },[]) 

  return (
      <div className="App">
        <h1>Conversor de Dólar em Real</h1>
        <p>Valor do Dólar: {valorDolarExibido}</p>
      </div>
      );
  }

export default App;

