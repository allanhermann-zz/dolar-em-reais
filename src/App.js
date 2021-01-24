import React from 'react'
import './App.css';
import fetchDadosDolar from './Utils/fetchAPI.js'
import { definirCalculo } from "./Utils/calcFunctions.js";

const { useEffect, useState } = React;
var aliquotaIof = 0.0
var valorImpostoPorcentagem = -1
var valorProduto = -1
var mensagem = ''

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
      <div id="tituloDiv">
        <h1>Conversor de Dólar em Real</h1>
      </div>
      <div id="valorDiv">
        <p>Dólar: {parseFloat(valorDolar).toFixed(2)}</p>
        <p>Data da pesquisa: {dataPesquisa}</p>
        <p>Hora da esquisa: {horaPesquisa}</p>
      </div>
      <div id="textBoxDiv">
        <input type="number" id="valorPagar" onBlur={() => {
          (parseFloat(document.getElementById("valorPagar").value) < 0) &&
            (parseFloat(document.getElementById("valorPagar").value *= -1))
        }} min="0.01 " placeholder="Valor a pagar" />
      </div>
      <div id="textBoxDiv">
        <input type="number" id="valorImposto" onBlur={() => {
          (parseFloat(document.getElementById("valorImposto").value) < 0) &&
            (parseFloat(document.getElementById("valorImposto").value *= -1))
        }} min="0.01" placeholder="Valor do Imposto Estadual" />
      </div>
      <div id="selectDiv">
        <input type="radio" name="formaPagamento" id="dinheiro" value="dinheiro" defaultChecked /> Dinheiro
        <input type="radio" name="formaPagamento" id="cartao" value="cartao" /> Cartão
             <div id="resultDiv">
          <p id="resultText" onChange={() => document.getElementById("resultText").innerText = mensagem}></p>
        </div>
        <div id="botaoDiv">
          <input type="button" id="botaoConverter" value="Converter" onClick={() => definirCalculo(valorProduto, valorImpostoPorcentagem, valorDolar, aliquotaIof)} />
        </div>
      </div>
    </div>
  );
}