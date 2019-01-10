/**
 * a função map mapeia um array para outro array de mesmo tamanho, possibilitando que seus dados
 * sejam transformados.
 */

 const nums = [1, 2, 3, 4, 5]

 // for com propósito

 let resultado = nums.map(function(e){
     return e * 2
 })

 console.log(`
 ${nums}
 ${resultado}`)

 const soma10 = e => e + 10
 const triplo = e => e * 3
 const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

 resultado = resultado.map(soma10)
 console.log(resultado)
 resultado = resultado.map(triplo)
 console.log(resultado)
 resultado = resultado.map(paraDinheiro)
 console.log(resultado)

 resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
 console.log(resultado)