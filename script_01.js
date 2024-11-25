//“script_01.js” → Crie um programa que calcule a área de um quadrado, sendo que o comprimento do lado é informado pelo usuário. A área do quadrado é calculada elevando-se o lado ao quadrado.Use Math.pow para aplicar a potenciação.

const comprimentoQuadrado = Number(prompt('Insira o comprimento do lado do quadrado'))
if (comprimentoQuadrado > 0) {
  const areaQuadrado = Math.pow(comprimentoQuadrado, 2)
  alert(`A área do quadrado é igual a ${areaQuadrado}`)
} else {
  alert(`Insira um número maior que zero para fazer o calculo.`)
}