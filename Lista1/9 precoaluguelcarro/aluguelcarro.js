const dias = Number(prompt("Digite o tempo de aluguel do carro em dias:"))

const km = Number(prompt("Digite a quantidade de km andados com o carro:"))

const precoPelosDias = dias*60

const precoPelosKm = km*0.15

const PrecoTotal = dias1 + km1

document.write(`Atualmente o aluguel do carro custa R\$${PrecoTotal}`)