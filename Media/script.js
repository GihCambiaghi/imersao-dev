var nome = "Giovanna"
var notaDoPrimeiroBimestre = 9
var notaDoSegundoBimestre = 7
var notaDoTerceiroBimestre = 4
var notaDoQuartoBimestre = 2

var notaSomada = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre)

var media = notaSomada / 4

if (media >= 6) {
  console.log("Você foi aprovado")
} else {
  console.log("Você foi reprovado")
}

var notaFixada = media.toFixed(1)

console.log("Bem vinda " + nome)
console.log(media)

// isso é um comentario

// Revisão
// Variáveis, strings, console.log, toFixed, operações matemáticas, concatenação 