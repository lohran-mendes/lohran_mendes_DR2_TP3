//“script_02.js” → Crie um programa que calcule a área de um retângulo, sendo que os comprimentos da altura e da base são números inteiros informados pelo usuário. A área do retângulo é calculada multiplicando-se a altura pela base.

const comprimentoBase = Number(prompt('Insira o comprimento da base do retângulo'))
const comprimentoAltura = Number(prompt('Insira o comprimento da altura do retângulo'))

if(Number.isInteger(comprimentoBase) && comprimentoBase > 0 && Number.isInteger(comprimentoAltura) && comprimentoAltura> 0){
  const areaRetangulo = comprimentoBase * comprimentoAltura
  alert(`A área do retângulo é igual a ${areaRetangulo}`)
} else {
  alert(`Insira números interos maiores que zero para fazer o calculo.`)
}