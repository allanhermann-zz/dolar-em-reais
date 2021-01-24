import React, {Component} from 'react'
import definirCalculo from "../Utils/calcFunctions.js";

export default class BotaoConverter extends Component {
    render() {
        return (
            <div id="botaoDiv">
                <input type="button" id="botaoConverter" value="Converter" onClick={() => definirCalculo(
                    this.props.valorProduto,
                    this.props.valorImpostoPorcentagem,
                    this.props.valorDolar,
                    this.props.aliquotaIof
                )} />
            </div>
        )
    }
}