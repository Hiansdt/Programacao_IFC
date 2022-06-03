const nota_primeira_prova = Number(prompt("Digite a nota da primeira prova:"))

const nota_segunda_prova = Number(prompt("Digite a nota da segunda prova:"))

const nota_primeiro_exercicio = Number(prompt("Digite a nota do primeiro exercício;"))

const nota_segundo_exercicio = Number(prompt("Digite a nota do segundo exercício:"))

const media_ponderada = ((nota_primeira_prova*0.7) + (nota_segunda_prova*0.7))/2 + ((nota_primeiro_exercicio*0.3) + (nota_segundo_exercicio*0.3))/2

if (media_ponderada>=6) {document.write("APROVADO")
    
} else {document.write("REPROVADO")
    
}
