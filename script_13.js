// “script_13.js” → Tendo como dados de entrada a altura e o peso de uma pessoa, construa um algoritmo que calcule seu IMC, utilizando a seguinte fórmula:

// IMC = peso / (altura*altura)

// No arquivo script.js, siga as etapas abaixo:

// Crie uma aplicação que solicite ao usuário a altura e o peso.
// A aplicação deve informar o IMC do usuário e em qual classificação o usuário se encontra, seguindo a imagem abaixo.
const inputHeight = Number(prompt('Insira aqui a sua altura em metros.'))
const inputWeight = Number(prompt('Insira aqui o seu peso em quilogramas.'))
const imc = inputWeight / (Math.pow(inputHeight, 2));
let classificationImc = '';

if (inputHeight > 0 && inputWeight > 0) {
  if (imc < 18.5) {
    classificationImc = 'abaixo do peso'
  } else if (imc < 25) {
    classificationImc = 'com peso normal'
  } else if (imc < 30) {
    classificationImc = 'com sobrepeso'
  } else if (imc < 35) {
    classificationImc = 'com obesidade grau I'
  } else if (imc < 40) {
    classificationImc = 'com obesidade grau II'
  } else {
    classificationImc = 'com obesidade grau III'
  }

  alert(`O seu imc é igual a ${imc.toFixed(2)} e você está ${classificationImc}`)
} else alert('Valores inseridos não são válidos.')
