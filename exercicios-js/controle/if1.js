function soNoticiaBoa(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soNoticiaBoa(7.8)
soNoticiaBoa(6.1)

function seforverdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}

seforverdadeEuFalo()
seforverdadeEuFalo(null)
seforverdadeEuFalo(undefined)
seforverdadeEuFalo(NaN)
seforverdadeEuFalo('')
seforverdadeEuFalo(0)
seforverdadeEuFalo(-1)
seforverdadeEuFalo(' ')
seforverdadeEuFalo('?')
seforverdadeEuFalo([])
seforverdadeEuFalo([1, 2])
seforverdadeEuFalo({})