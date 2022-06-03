const distancia = parseInt(prompt("Qual a distância a ser percorrida em km?"))

const velocidade = parseInt(prompt("Qual a velocidade em km?"))

const tempo = distancia/velocidade

document.write (`O tempo requerido para percorrer ${distancia}km à ${velocidade}km/h, é de ${tempo} horas.`) 