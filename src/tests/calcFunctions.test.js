import { validaCampos } from '../functions/calcFunctions.js'

test("Testando metodo validaCampos", () => {
    expect(validaCampos(0, 1, 1, 1)).toBe("Preencha o valor a ser convertido com um numero acima de 0\n")
    expect(validaCampos(1, 0, 1, 1)).toBe("Preencha o Valor do Imposto Estadual com um numero acima de 0\n")
    expect(validaCampos(1, 1, -1, 1)).toBe("Ocorreu um erro e o valor da cotação do dólar não pode ser carregado. \n Por favor, atualize seu navegador e tente novamente.\n")
    expect(validaCampos(1, 1, 1, -1)).toBe("Selecione a forma de pagamento \n")
    expect(validaCampos(1, 1, 1, 1)).toBe("")
    expect(validaCampos(0, 0, -1, -1)).toBe("Preencha o valor a ser convertido com um numero acima de 0\nPreencha o Valor do Imposto Estadual com um numero acima de 0\nSelecione a forma de pagamento \nOcorreu um erro e o valor da cotação do dólar não pode ser carregado. \n Por favor, atualize seu navegador e tente novamente.\n")
})