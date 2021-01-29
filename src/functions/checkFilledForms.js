import { validaCampos }  from './calcFunctions.js'

export default function checkFilledForms(valorProduto, valorImpostoPorcentagem, valorDolar, aliquotaIof) {
    var mensagem = ''
    if ((mensagem += validaCampos(valorProduto, valorImpostoPorcentagem, valorDolar, aliquotaIof)) === '')
        document.getElementById("botaoConverter").removeAttribute("disabled");
    else
        document.getElementById("botaoConverter").setAttribute("disabled", "disabled");
}