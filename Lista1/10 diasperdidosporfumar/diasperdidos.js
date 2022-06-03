const cigarrospordia = Number(prompt("Digite a média de cigarros fumados por dia:"))

const anosfumando = Number(prompt("Digite a quantidade de anos fumando:"))

const diasfumando = anosfumando * 365

const cigarrosfumados = diasfumando * cigarrospordia

const tempoperdidoemmin = cigarrosfumados*10

const tempoperdidoemhoras = tempoperdidoemmin/60

const tempoperdidoemdias = tempoperdidoemhoras/24

document.write(`O tempo perdido foi de ${tempoperdidoemhoras.toFixed(2)} horas. Ou ${tempoperdidoemdias.toFixed(0)} dias.`)
