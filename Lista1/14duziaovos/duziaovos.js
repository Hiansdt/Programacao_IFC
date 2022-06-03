const Ovos = parseInt(prompt(`digite a quantidade de ovos que possue`))

const total = vOvos / 12

const resto = vOvos % 12

if  (resto === 0) {
    document.write(`Você possue ${Math.floor(total)} dúzias de ovos`)
} else {
    document.write(`Você possue ${Math.floor(total + 1)} dúzias de ovos`)
}