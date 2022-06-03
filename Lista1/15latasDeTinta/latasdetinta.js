const vmetros = Number(prompt(`Digite quantos metros quadrados precisa pintar`))

const vmetrosPintadosPorLata = vmetros / (18*3)

const vLatasNecessarias = math.floor(vmetrosPintadosPorLata) + 1

document.write (`Você precisará de ${vLatasNecessarias} latas de tinta para pintar ${vmetros} metros quadrados`)