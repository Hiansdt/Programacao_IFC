const salario = Number(prompt("Digite o salário em reais:"))

const aumento = Number(prompt("digite a porcentagem de aumento:"))

const salarioArredondado = salario.toFixed (2)

const aumentoArredondado = aumento.toFixed (2)

const salarioComAumento = (salarioArredondado * (aumentoArredondado / 100)) + salario

const salarioComAumentoArredondado = salarioComAumento.toFixed (2)

document.write (`${salarioArredondado} reais com ${aumentoArredondado}% de aumento, é igual a ${salarioComAumentoArredondado} reais.`)

