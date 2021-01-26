import React, { Component } from 'react'
import "../CSS/BotaoVoltar.css"

export default class BotaoVoltar extends Component {
    render() {
        return (
            <div id="botaoDiv">
                <input type="button" id="botaoVoltar" onClick={() => window.location.reload()} />
            </div>
        )
    }
}