import React, {Component} from 'react'

export default class ValoresDigitaveis extends Component {
  render() {
    return (
      <div>
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
      </div>)
  }
}