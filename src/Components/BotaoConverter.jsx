import React, { Component } from 'react'
import definirCalculo from "../Utils/calcFunctions.js";
import "../CSS/BotaoConverter.css"
import checkFilledForms from '../Utils/checkFilledForms.js'

export default class BotaoConverter extends Component {
    componentDidUpdate(){
        checkFilledForms(-1,-1,0,0)
    }

    render() {
        return (
            <div id="botaoDiv">
                <input type="button" id="botaoConverter" onClick={() =>
                    definirCalculo(
                        this.props.valorProduto,
                        this.props.valorImpostoPorcentagem,
                        this.props.valorDolar,
                        this.props.aliquotaIof
                    )} />
                <p/>
            </div>
        )
    }
}