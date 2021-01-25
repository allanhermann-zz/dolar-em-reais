import React, { Component } from 'react'
import "../CSS/FormaDePagamento.css"

export default class FormaDePagamento extends Component {
  render() {
    return (
      <div id="colunaFormaPagamento">
        <p id="tituloRadio">Tipo de compra</p>
        <div id="linhaFormaPagamento">
          <label id="radio1">
            <input type="radio" name="formaPagamento" id="dinheiro" value="dinheiro" defaultChecked /> Dinheiro
            <span class="checkmark"></span>
          </label>
          <label id="radio2">
            <input type="radio" name="formaPagamento" id="cartao" value="cartao" /> Cartão
            <span class="checkmark"></span>
          </label>
        </div>
      </div>
    )
  }
}