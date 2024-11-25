// “script_07.js” → Construa um algoritmo que determine, dada uma idade, se uma pessoa brasileira:

// É obrigada a votar (maiores de 18 até 70 anos).
// Tem voto eletivo (de 16 anos em diante até 18 anos e maiores de 70 anos).
// Não pode votar (menores de 16 anos).

const idadeFornecida = Number(prompt('Insira aqui qual é a sua idade atual!'))

if ( idadeFornecida >= 16 && idadeFornecida < 18 || idadeFornecida >= 70) {
  alert('A pessoa tem o voto eletivo!')
} else if (idadeFornecida >= 18 && idadeFornecida <= 70) {
  alert('A pessoa é obrigada a votar!')
} else if (idadeFornecida >= 0 && idadeFornecida< 16) {
  alert('A pessoa não pode votar')
} else {
  alert('Insira uma idade válida!')
}