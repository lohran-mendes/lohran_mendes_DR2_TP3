// “script_11.js” → Escreva um programa que simule um caixa eletrônico que receba um valor de saque inteiro e múltiplo de 10 e mostre quantas notas de 100, 50, 20 e 10 ele paga. Não considere a quantidade de notas disponíveis no cofre do caixa-eletrônico.

const valorSacar = Number(prompt('Insira o valor a ser sacado em reais.'))

if (valorSacar > 0 && valorSacar % 10 === 0) {
  let notasVinte = '';
  let notasCinquenta = '';
  let notasCem = '';

  const notasDez = `${valorSacar / 10} notas de dez`;
  if (valorSacar % 20 == 0) notasVinte = `ou ${valorSacar / 20} notas de vinte`;
  if (valorSacar % 50 == 0) notasCinquenta = `ou ${valorSacar / 50} notas de cinquenta`;
  if (valorSacar % 100 == 0) notasCem = `ou ${valorSacar / 100} notas de cem`;

  const textoFinal = `Você pode sacar ${notasDez} ${notasVinte} ${notasCinquenta} ${notasCem}`
  alert(textoFinal)

} else if (valorSacar % 10 !== 0) alert('Coloque um valor inteiro multiplo de 10!')
else alert('O valor inserido não é válido!')
