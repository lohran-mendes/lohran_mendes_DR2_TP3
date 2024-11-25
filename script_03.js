//“script_03.js” → Crie um programa que calcule o novo valor de um salário a partir de um valor percentual de reajuste. O valor atual do salário e o valor percentual do reajuste devem ser informados pelo usuário.Ex: salário = 5432.10 (R$5.432,10) e o percentual = 7.3 (7,3%).

const salarioAtual = Number(prompt('Insira o valor do seu salário atual'))
const porcentagemReajuste = Number(prompt('Insira o valor percentual do reajuste'))

if (salarioAtual > 0 && !isNaN(porcentagemReajuste)) {
  const valorReajustado = (salarioAtual +( (salarioAtual * porcentagemReajuste) / 100)).toFixed(2)
  alert(`O salário com reajuste será de R$${valorReajustado}`)
} else {
  alert('Insira valores numéricos!')
}