import React, {Component} from 'react'

export default class FormaDePagamento extends Component {
    render() {
      return (
        <div id="selectDiv">
          <input type="radio" name="formaPagamento" id="dinheiro" value="dinheiro" defaultChecked /> Dinheiro
          <input type="radio" name="formaPagamento" id="cartao" value="cartao" /> Cartão
        </div>
      )
    }
  }