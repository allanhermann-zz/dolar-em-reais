import React, {Component} from 'react'

export default class Infos extends Component {

    render() {
      return (
        <div id="valorDiv">
          <p>Dólar: {parseFloat(this.props.valorDolar).toFixed(2)}</p>
          <p>Data da pesquisa: {this.props.dataPesquisa}</p>
          <p>Hora da esquisa: {this.props.horaPesquisa}</p>
        </div>
      )
    }
  }