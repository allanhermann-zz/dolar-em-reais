const visibilityManipulation = () => {
    document.getElementById("botaoDiv").style.display = "none"
    document.getElementById("colunaFormaPagamento").style.display = "none"
    document.getElementById("controlesDigitaveis").style.display = "none"
    document.getElementById("resultDiv").style.display = "flex"
    document.getElementById("botaoVoltar").style.display = "block"
}

export default visibilityManipulation;