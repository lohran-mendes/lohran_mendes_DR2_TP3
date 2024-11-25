//“script_04.js” → Crie um programa que calcule a área, perímetro e o diâmetro de um círculo, tendo o comprimento do raio informado pelo usuário. Use Math.PI.

const raio = Number(prompt('Insira o comprimento do raio deste circulo'))

if (raio > 0) {
  const area = (Math.PI * Math.pow(raio, 2)).toFixed(2);
  const perimetro = (2 * Math.PI * raio).toFixed(2);
  const diametro = (2 * raio).toFixed(2);
  alert(`A área do circulo é igual a ${area}, o perímetro é igual a ${perimetro} e o seu diâmetro é ${diametro}`)
} else {
  alert('Insira um valor numérico maior que zero!')
}