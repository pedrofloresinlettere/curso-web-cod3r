// Armazenando uma funcao em uma variavel (X)
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma (2, 3)

// Armazenando uma funcao arrow em uma variável (X redumido)
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implícito (X Super Resumido)
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))