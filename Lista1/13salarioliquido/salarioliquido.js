const recebidoPorHora = parseInt(prompt(`Digite quanto ganha por hora`))

const horasTrabalhadasPorMes = parseInt(prompt(`Digite quantas horas trabalha ao mês`))

const SalarioBruto = horasTrabalhadasPorMes * recebidoPorHora

const salarioLiquido = SalarioBruto - ((SalarioBruto/100)* 24)

//24 Porque eo valor que dá ao somar os três descontos.

document.write(`Aplicando os descontos, o seu salario dará R$${salarioLiquido} reais.`)