var valorReaisCalculado = 0.0
var mensagem = ''

function insereValoresRestantes(valorImpostoPorcentagem, valorProduto, valorDolar, aliquotaIof) {
    var valorDolarComImposto = ((1 + valorImpostoPorcentagem) * valorProduto)
    var valorReaisSemImposto = (valorProduto * valorDolar * (1 + valorImpostoPorcentagem))
    mensagem = ("Alíquota IOF: " + (aliquotaIof * 100).toFixed(2) + "\n")
    mensagem += ("Dólar sem imposto: " + valorProduto.toFixed(2) + "\n")
    mensagem += ("Dólar com imposto: " + valorDolarComImposto.toFixed(2) + "\n")
    mensagem += ("Real sem impostos: " + valorReaisSemImposto.toFixed(2) + "\n")
    return mensagem
}

function insereReaisComImpostoDinheiro(valorProduto, valorImpostoPorcentagem, valorDolar, aliquotaIof) {
    var valorReaisComImpostoDinheiro = (
        (valorProduto * (1 + valorImpostoPorcentagem)) *
        (valorDolar * (1 + aliquotaIof))
    )
    mensagem = ("Real com impostos:  " + valorReaisComImpostoDinheiro.toFixed(2) + "\n\nConsultado preço com impostos sobre Dinheiro")
    return mensagem
}

function insereReaisComImpostoCartao(valorProduto, valorImpostoPorcentagem, valorDolar, aliquotaIof) {
    valorReaisCalculado = (
        (valorProduto * (1 + (valorImpostoPorcentagem + aliquotaIof))) *
        (valorDolar)
    )
    mensagem = ("Real com impostos: " + valorReaisCalculado.toFixed(2) + "\n\nConsultado preço com impostos sobre Cartão")
    return mensagem
}

function validaCampos(valorProduto, valorImpostoPorcentagem, valorDolar, aliquotaIof) {
    mensagem = ''
    if (!(valorProduto > 0))
        mensagem += "Preencha o valor a ser convertido com um numero acima de 0\n"
    if (!(valorImpostoPorcentagem > 0))
        mensagem += "Preencha o Valor do Imposto Estadual com um numero acima de 0\n"
    if (!(aliquotaIof >= 0.0))
        mensagem += "Selecione a forma de pagamento \n"
    if (!(valorDolar >= 0))
        mensagem += "Ocorreu um erro e o valor da cotação do dólar não pode ser carregado. \n Por favor, atualize seu navegador e tente novamente.\n"
    return (mensagem)
}

function exibeMensagem(mensagem) {
    if (mensagem !== '')
        document.getElementById("resultText").innerText = mensagem
    else {
        mensagem += "Ocorreu um erro inesperado!"
        exibeMensagem()
    }
}

const definirCalculo = (valorProduto, valorImpostoPorcentagem,valorDolar,aliquotaIof) => {
    valorImpostoPorcentagem = (parseFloat(document.getElementById("valorImposto")?.value / 100))
    valorProduto = (parseFloat(document.getElementById("valorPagar")?.value))
    mensagem = ''

    if ((mensagem += validaCampos(valorProduto, valorImpostoPorcentagem, valorDolar, aliquotaIof)) === '') {
      switch (document.querySelector('input[name="formaPagamento"]:checked').value) {
        case "cartao":
          aliquotaIof = 0.064
          mensagem += insereValoresRestantes(valorImpostoPorcentagem, valorProduto, valorDolar, aliquotaIof)
          mensagem += insereReaisComImpostoCartao(valorProduto, valorImpostoPorcentagem, valorDolar, aliquotaIof)
          break

        case "dinheiro":
          aliquotaIof = 0.011
          mensagem += insereValoresRestantes(valorImpostoPorcentagem, valorProduto, valorDolar, aliquotaIof)
          mensagem += insereReaisComImpostoDinheiro(valorProduto, valorImpostoPorcentagem, valorDolar, aliquotaIof)
          break

        default:
          console.log("Forma de pagamento não selecionada ou inválida")
          mensagem += "Selecione a forma de pagamento"
          break
      }
    }
    exibeMensagem(mensagem)
  }

  export default definirCalculo