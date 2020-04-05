// Funcao sem retorno
function imprimirSoma (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3) //Soma
imprimirSoma(2)  // 2 + undefined = NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // soma e ignora o resto
imprimirSoma() // NaN

// funcao com retorno
function soma(a, b = 1) { // estou tratando a variável b de tal forma que ela tem o padrão 1 quando não determinada
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())