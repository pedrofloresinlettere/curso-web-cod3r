const peso1 = 1.0
const peso2 = Number('2.0')
console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // esse nº é inteiro?
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871
const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)
console.log(media.toFixed(2)) // casas decimais // toFixed é uma função
console.log(media.toString()) // Transformar um valor em string
console.log(media.toString(2)) // Transformando em número binário (código binário)

console.log(typeof media)
console.log(typeof Number) 
/* o tipo do midia é numérico
 * já o tipo Number é uma função
*/