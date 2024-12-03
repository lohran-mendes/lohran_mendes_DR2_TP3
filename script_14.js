//“script_14.js” → No arquivo script.js, siga as etapas abaixo:

// Crie uma aplicação que solicite ao usuário 4 valores: X, A, B e C, onde X é um número inteiro e positivo e A, B e C são quaisquer valores reais.
// O programa deve escrever os valores lidos e:
// Se x=1, escreva os três valores A, Be C em ordem crescente.
// Se x=2, escreva os três valores A, B e C em ordem decrescente.
// Se x=3, escreva os três valores A, B e C de forma que o maior fique entre os outros dois.
// Caso contrário, exiba uma mensagem indicando que o valor de x não corresponde a nenhuma das condições acima.

const inputX = Number(prompt('Insira o valor inteiro de X'))
const inputA = Number(prompt('Insira o valor de A'))
const inputB = Number(prompt('Insira o valor de B'))
const inputC = Number(prompt('Insira o valor de C'))
const inputArray = [inputA, inputB, inputC];

if(Number.isInteger(inputX) && inputX > 0 && inputX < 4 && !isNaN(inputA) && !isNaN(inputB) && !isNaN(inputC)){
switch (inputX) {
  case 1:
    inputArray.sort((a, b) => a - b)
    alert(`Ordem Crescente -> ${inputArray}`)
    break;
  case 2:
    inputArray.sort((a, b) => b - a)
    alert(`Ordem decrescente -> ${inputArray}`)
    break;
  case 3:
    let valueMax = Math.max(...inputArray)
    let indexMax = inputArray.indexOf(valueMax)
    inputArray.splice(indexMax, 1)
    inputArray.splice(1, 0, valueMax)
    alert(`Maior valor no centro -> ${inputArray}`)
    break;
  default:
    break;
}} else {
  alert('Insira valores válidos!')
}