// “script_09.js” → Crie um programa que receba o valor da altura e do peso de uma pessoa e retorne o seu IMC - Índice de Massa Corporal e a sua classificação. IMC = peso / altura².

const peso = Number(prompt('Insira o seu peso aqui.'));
const altura = Number(prompt('Insira a sua altura em metros aqui.'));

if (peso > 0 && altura > 0) {
  const imc = (peso / Math.pow(altura, 2)).toFixed(2)
  const textoImc = `O seu Índice de Massa Corporal é de ${imc}`
  if (imc < 18.5) {
    alert(`${textoImc}, você está abaixo do peso.`)
  } else if (imc >= 18.5 && imc < 24.9) {
    alert(`${textoImc}, você está com o peso normal.`)
  } else if (imc >= 25 && imc < 29.9) {
    alert(`${textoImc}, você está com sobrepeso.`)
  } else if (imc >= 30 && imc < 34.9) {
    alert(`${textoImc}, você está obesidade grau 1`)
  } else if (imc >= 35 && imc < 39.9) {
    alert(`${textoImc}, você está obesidade grau 2`)
  } else if (imc >= 40) {
    alert(`${textoImc}, você está obesidade grau 3`)
  }
} else {
  alert('Insira valores numéricos válidos.')
}