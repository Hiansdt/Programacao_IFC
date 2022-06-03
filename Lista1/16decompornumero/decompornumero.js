const numero = parseInt(prompt(`Digite um numero menor que 1000`))



const centenas = Math.floor(numero/100)

const dezenas = (numero - (Math.floor(numero/100))*100)/10

const unidades = numero - (Math.floor(numero/10)*10)



document.write(`${Math.floor(centenas)}, ${Math.floor(dezenas)}, ${Math.floor(unidades)}`)