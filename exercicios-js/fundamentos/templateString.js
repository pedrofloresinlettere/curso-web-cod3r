const nome = 'Receba'   
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`  // o que esta entre chaves o sistema terá de interpretar
console.log(concatenacao, template) 

// expressoes
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)