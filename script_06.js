// “script_06.js” → Crie um programa que leia um número inteiro e mostre se o mesmo é positivo, negativo ou zero.

const numeroInserido = Number(prompt('Insira um número'))

if (!isNaN(numeroInserido)) {
  let textoRetornado = '';

  if (numeroInserido === 0) {
    textoRetornado = 'você inseriu o número zero!'
  } else if (Number.isInteger(numeroInserido)) {
    textoRetornado = 'você inseriu um número inteiro'
  } else if (!Number.isInteger(numeroInserido)) {
    textoRetornado = 'você inseriu um número decimal'
  }

  if (numeroInserido > 0) {
    textoRetornado += ' positivo!'
  } else if (numeroInserido < 0) {
    textoRetornado += ' negativo!'
  }

  alert(textoRetornado)
} else {
  alert('o valor inserido não é um número!')
}