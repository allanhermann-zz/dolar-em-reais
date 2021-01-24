import React from 'react'
import './App.css';
import fetchDadosDolar from './Utils/fetchAPI.js'
import BotaoConverter from "./Components/BotaoConverter.jsx";
import FormaDePagamento from './Components/FormaDePagamento.jsx';
import Infos from './Components/Infos.jsx';
import TextoResultado from './Components/TextoResultado.jsx';
import Titulo from './Components/Titulo.jsx';
import ValoresDigitaveis from './Components/ValoresDigitaveis.jsx';

const { useEffect, useState } = React;
var aliquotaIof = 0.0
var valorImpostoPorcentagem = -1
var valorProduto = -1

export default function App() {
  const [valorDolar, setValorDolar] = useState('');
  const [dataDolar, setDataDolar] = useState('')

  useEffect(() => {
    fetchDadosDolar().then(dadosDolarEncontrados => {
      setValorDolar(parseFloat(dadosDolarEncontrados.ask) || "Não foi possível encontrar os dados da moeda.")
      setDataDolar(dadosDolarEncontrados.create_date.split(" ") || "Não foi possível encontrar os dados da moeda")
    })
  }, [])

  var dataPesquisa = dataDolar[0]
  var horaPesquisa = dataDolar[1]

  console.log(dataDolar)

  return (
    <div className="App">
      <Titulo />
      <Infos
        valorDolar={valorDolar}
        dataPesquisa={dataPesquisa}
        horaPesquisa={horaPesquisa}
      />
      <ValoresDigitaveis />
      <FormaDePagamento />
      <TextoResultado />
      <BotaoConverter
        valorProduto={valorProduto}
        valorImpostoPorcentagem={valorImpostoPorcentagem}
        valorDolar={valorDolar}
        aliquotaIof={aliquotaIof}
      />
    </div>
  );
}