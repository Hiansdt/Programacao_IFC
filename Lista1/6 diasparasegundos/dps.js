const dias = Number(prompt("Digite o número de dias:"))

const horas = Number(prompt("Digite o número de horas:"))

const minutos = Number(prompt("Digite o número de dias:"))

const segundosEmUmDia = dias*86400

const segundosEmUmaHora = horas*3600

const segundosEmUmMinuto = minutos*60

const segundosTotal = segundosEmUmDia+segundosEmUmMinuto+segundosEmUmaHora

document.write (`${dias} dias, ${horas} horas e ${minutos} minutos, é igual a ${segundosTotal} segundos.`)