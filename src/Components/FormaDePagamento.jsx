import React, { Component } from 'react'
import "../CSS/FormaDePagamento.css"
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const StyledTypography = styled(Typography)`
   && {
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 18px;
    color: #2E3742;
     // customise your styles here
   }
`;

const GreenRadio = withStyles({
  root: {
    color: "#008B57",
    '&$checked': {
      color: "#008B57",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export default class FormaDePagamento extends Component {

  state = {
    selectedValue: 'dinheiro',
  };

  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
  };

  render() {
    return (
      <div id="colunaFormaPagamento">
        <p id="tituloRadio">Tipo de compra</p>
        <div id="linhaFormaPagamento">
          <RadioGroup row>
            <FormControlLabel id="radioDinheiro" name="formaPagamento" value="dinheiro" control={
              <GreenRadio checked={this.state.selectedValue === 'dinheiro'} onChange={this.handleChange} />
            } label={
              <StyledTypography>Dinheiro</StyledTypography>}
            />
            <FormControlLabel id="radioCartao" name="formaPagamento" value="cartao" control={
              <GreenRadio checked={this.state.selectedValue === 'cartao'} onChange={this.handleChange} />
            } label={
              <StyledTypography>Cartão</StyledTypography>}
            />
          </RadioGroup>
        </div>
      </div>
    )
  }
}