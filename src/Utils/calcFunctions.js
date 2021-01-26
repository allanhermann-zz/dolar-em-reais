import visibilityManipulation from "./visibilityManipulation.js"

var valorReaisCalculado = 0.0
var mensagemTop = 'O resultado do cálculo é'
var mensagemConvertida = "R$ "
var mensagemMid = ''
var mensagemInf = ''

function insereValoresRestantes(valorImpostoPorcentagem, valorProduto, valorDolar, aliquotaIof) {
    var valorDolarComImposto = ((1 + valorImpostoPorcentagem) * valorProduto)
    var valorReaisSemImposto = (valorProduto * valorDolar * (1 + valorImpostoPorcentagem))
    mensagemInf = ("Alíquota IOF: " + (aliquotaIof * 100).toFixed(2) + "\n")
    mensagemInf += ("Dólar sem imposto: " + valorProduto.toFixed(2) + "\n")
    mensagemInf += ("Dólar com imposto: " + valorDolarComImposto.toFixed(2) + "\n")
    mensagemInf += ("Real sem impostos: " + valorReaisSemImposto.toFixed(2) + "\n")
    return mensagemInf
}

function insereReaisComImpostoDinheiro(valorProduto, valorImpostoPorcentagem, valorDolar, aliquotaIof) {
    var valorReaisCalculado = (
        (valorProduto * (1 + valorImpostoPorcentagem)) *
        (valorDolar * (1 + aliquotaIof))
    )
    mensagemConvertida += valorReaisCalculado.toFixed(2)
    mensagemInf = ("Real com impostos:  " + valorReaisCalculado.toFixed(2) + "\n\nConsultado preço com impostos sobre Dinheiro")
    return mensagemInf
}

function insereReaisComImpostoCartao(valorProduto, valorImpostoPorcentagem, valorDolar, aliquotaIof) {
    valorReaisCalculado = (
        (valorProduto * (1 + (valorImpostoPorcentagem + aliquotaIof))) *
        (valorDolar)
    )
    mensagemConvertida += valorReaisCalculado.toFixed(2)
    mensagemInf = ("Real com impostos: " + valorReaisCalculado.toFixed(2) + "\n\nConsultado preço com impostos sobre Cartão")
    return mensagemInf
}

export function validaCampos(valorProduto, valorImpostoPorcentagem, valorDolar, aliquotaIof) {
    mensagemInf = ''
    if (!(valorProduto > 0))
        mensagemInf += "Preencha o valor a ser convertido com um numero acima de 0\n"
    if (!(valorImpostoPorcentagem > 0))
        mensagemInf += "Preencha o Valor do Imposto Estadual com um numero acima de 0\n"
    if (!(aliquotaIof >= 0.0))
        mensagemInf += "Selecione a forma de pagamento \n"
    if (!(valorDolar >= 0))
        mensagemInf += "Ocorreu um erro e o valor da cotação do dólar não pode ser carregado. \n Por favor, atualize seu navegador e tente novamente.\n"
    return (mensagemInf)
}

function exibeMensagem() {
    if (mensagemInf !== '') {
        document.getElementById("mensagemTop").innerText = mensagemTop
        document.getElementById("mensagemConvertida").innerText = mensagemConvertida
        document.getElementById("mensagemMid").innerText = mensagemMid
        document.getElementById("mensagemInf").innerText = mensagemInf
        visibilityManipulation()
    } else {
        mensagemTop += "Ocorreu um erro inesperado!"
        mensagemConvertida = ''
        mensagemMid = ''
        mensagemInf = ''
        exibeMensagem()
    }
}

const definirCalculo = (valorProduto, valorImpostoPorcentagem, valorDolar, aliquotaIof) => {
    valorImpostoPorcentagem = (parseFloat(document.getElementById("valorImposto")?.value / 100))
    valorProduto = (parseFloat(document.getElementById("valorPagar")?.value))
    mensagemInf = ''

    if ((mensagemInf += validaCampos(valorProduto, valorImpostoPorcentagem, valorDolar, aliquotaIof)) === '') {
        switch (document.querySelector('input[name="formaPagamento"]:checked').value) {
            case "cartao":
                aliquotaIof = 0.064
                mensagemInf += insereValoresRestantes(valorImpostoPorcentagem, valorProduto, valorDolar, aliquotaIof)
                mensagemInf += insereReaisComImpostoCartao(valorProduto, valorImpostoPorcentagem, valorDolar, aliquotaIof)
                break

            case "dinheiro":
                aliquotaIof = 0.011
                mensagemInf += insereValoresRestantes(valorImpostoPorcentagem, valorProduto, valorDolar, aliquotaIof)
                mensagemInf += insereReaisComImpostoDinheiro(valorProduto, valorImpostoPorcentagem, valorDolar, aliquotaIof)
                break

            default:
                console.log("Forma de pagamento não selecionada ou inválida")
                mensagemInf += "Selecione a forma de pagamento"
                break
        }
    }
    mensagemMid = "Compra no dinheiro e taxa de " + (valorImpostoPorcentagem * 100).toFixed(2) + "\nCotação do dólar: $ 1.00 = R$ " + valorDolar.toFixed(2)
    exibeMensagem()
}

export default definirCalculo;