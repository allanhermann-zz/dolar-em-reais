import React, {Component} from 'react'
import "../css/TextoResultado.css"

export default class TextoResultado extends Component {
    render() {
      return (
        <div id="resultDiv">
          <p id="mensagemTop" />
          <p id="mensagemConvertida" />
          <p id="mensagemMid" />
          <p id="mensagemInf" />
        </div>
      )
    }
  }