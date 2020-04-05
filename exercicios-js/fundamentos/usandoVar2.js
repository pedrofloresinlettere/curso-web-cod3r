var numero = 1
{
    var numero = 2
    console.log('dentro =', numero) // escopo menor, mais restrito
}
console.log('fora =', numero) // escopo maior, mais abrangente

// Estão em escopos diferentes

/* um não interfere no outro pois não estão
no mesmo escopo.

Logo, o de dentro imprimi o de dentro e o de fora
imprimi o de fora */

