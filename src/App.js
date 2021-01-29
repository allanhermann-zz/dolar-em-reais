import React from 'react'
import './css/App.css';
import fetchDadosDolar from './functions/fetchAPI.js'
import BotaoConverter from "./components/BotaoConverter.jsx";
import FormaDePagamento from './components/FormaDePagamento.jsx';
import Infos from './components/Infos.jsx';
import TextoResultado from './components/TextoResultado.jsx';
import ValoresDigitaveis from './components/ValoresDigitaveis.jsx';
import BotaoVoltar from './components/BotaoVoltar.jsx'

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
      <Infos
        valorDolar={valorDolar}
        dataPesquisa={dataPesquisa}
        horaPesquisa={horaPesquisa}
      />
      <ValoresDigitaveis
        valorDolar={valorDolar}
        aliquotaIof={aliquotaIof} />
      <FormaDePagamento />
      <BotaoConverter
        valorProduto={valorProduto}
        valorImpostoPorcentagem={valorImpostoPorcentagem}
        valorDolar={valorDolar}
        aliquotaIof={aliquotaIof}
      />
      <BotaoVoltar />
      <TextoResultado />
    </div>
  );
}


