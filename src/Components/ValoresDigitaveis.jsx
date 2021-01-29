import React, { Component } from 'react'
import '../css/ValoresDigitaveis.css'
import checkFilledForms from "../functions/checkFilledForms.js"

export default class ValoresDigitaveis extends Component {
  render() {
    return (
      <div id="controlesDigitaveis">
        <div className="coluna">
          <p className="textoTitulo" id="dolar">Dólar</p>
          <div id="textBoxDiv">
            <input type="text" id="symbolDollar" value="$" disabled />
            <input type="number" id="valorPagar" onBlur={() => {
              (
                (parseFloat(document.getElementById("valorPagar").value) < 0) &&
                (parseFloat(document.getElementById("valorPagar").value *= -1))
              )
            }} min="0.01 " placeholder="0" onChange={() =>
              checkFilledForms(
                parseFloat(document.getElementById("valorPagar").value),
                parseFloat(document.getElementById("valorImposto").value),
                this.props.valorDolar,
                this.props.aliquotaIof
              )} />
          </div>

        </div>

        <div className="coluna">
          <p className="textoTitulo">Taxa do Estado</p>
          <div id="textBoxDiv">
            <input type="number" id="valorImposto" onBlur={() => {
              (
                (parseFloat(document.getElementById("valorImposto").value) < 0) &&
                (parseFloat(document.getElementById("valorImposto").value *= -1))
              )
            }} min="0.01" placeholder="0" onChange={() =>
              checkFilledForms(
                parseFloat(document.getElementById("valorPagar").value),
                parseFloat(document.getElementById("valorImposto").value),
                this.props.valorDolar,
                this.props.aliquotaIof
              )} />
            <input type="text" id="symbolPercentage" value="%" disabled />
          </div>

        </div>

      </div>)
  }
}