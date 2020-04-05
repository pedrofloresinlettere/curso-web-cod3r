let contador = 1
while (contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}   

// toda essa estrutura acima representa um FOR (declaração de constante, lanço (expressão) e incremento)

for(let i = 1; i <= 10; i++) { // declaração, expressão e incremento
    console.log(`i = ${i}`)
} 

const notas = [6.7, 7.4, 9.8, 8.1, 7.7] //navegando através do arrey
for(let i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`)
}