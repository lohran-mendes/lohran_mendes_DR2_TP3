// “script_11.js” → Escreva um programa que simule um caixa eletrônico que receba um valor de saque inteiro e múltiplo de 10 e mostre quantas notas de 100, 50, 20 e 10 ele paga. Não considere a quantidade de notas disponíveis no cofre do caixa-eletrônico.

const valorSacar = Number(prompt("Insira o valor a ser sacado em reais."));

if (valorSacar > 0 && valorSacar % 10 === 0) {
  const notasDez = `${valorSacar / 10} nota(s) de dez`;
  const notasVinte = valorSacar % 20 === 0 ? `ou ${valorSacar / 20} nota(s) de vinte` : "";
  const notasCinquenta = valorSacar % 50 === 0 ? `ou ${valorSacar / 50} nota(s) de cinquenta` : "";
  const notasCem = valorSacar % 100 === 0 ? `ou ${valorSacar / 100} nota(s) de cem` : "";

  alert(`Você pode sacar R$${valorSacar} em um formato de ${notasDez} ${notasVinte} ${notasCinquenta} ${notasCem}`);
} else if (valorSacar % 10 !== 0)
  alert("Coloque um valor inteiro multiplo de 10!");
else alert("O valor inserido não é válido!");
