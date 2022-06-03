const preco = Number(prompt("Digite o preço inicial em reais:"))

const desconto = Number(prompt("Digite a porcentagem de desconto:"))

const precoComDesconto = (prec * (desc / 100)) + prec

const precoComDescontoArredondado = precoComDesconto.toFixed (2)

document.write (`O preço com desconto é igual a ${precoComDescontoArredondado} reais.`)