import React, { Component } from 'react'
import "../css/BotaoVoltar.css"

export default class BotaoVoltar extends Component {
    render() {
        return (
            <div id="botaoDiv">
                <input type="button" id="botaoVoltar" onClick={() => window.location.reload()} />
            </div>
        )
    }
}