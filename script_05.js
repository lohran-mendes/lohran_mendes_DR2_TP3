//“script_05.js” → Crie um programa que receba um valor de temperatura em Celsius e converta-o para Fahrenheit. F = (C * 9/5)+32

const tempCelcius = Number(prompt('Insira o valor da temperatura em Celcius'))

if(!isNaN(tempCelcius)) {
   const tempFahr = ((tempCelcius * 9/5)+32).toFixed(2);
   alert(`${tempCelcius}°C equivale a ${tempFahr}°F`)
} else {
  alert('Insira números para fazer a conversão!')
}