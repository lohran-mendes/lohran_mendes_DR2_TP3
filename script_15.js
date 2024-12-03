//“script_15.js” → Um time de e-sports tem duas opções para mascote, o RoboRat e o SuperKeyboard. No arquivo script.js, siga as etapas abaixo:

// Crie uma aplicação que solicite ao usuário a quantidade de votos recebida por cada mascote, mais a quantidade de votos inválidos.
// Informe a porcentagem de votos de cada mascote e a porcentagem de votos inválidos.
// Informe também a porcentagem de votos de cada mascote, considerando apenas os votos válidos.
// Informe qual será o novo mascote do time.

const inputAmountVoteRoborat = Number(prompt('Insira a quantidade de votos no Roborat.'))
const inputAmountVoteSuperKeyboard = Number(prompt('Insira a quantidade de votos no SuperKeyboard.'))
const inputAmountVoteInvalid = Number(prompt('Insira a quantidade de votos Inválidos/nulos.'))

if (inputAmountVoteRoborat >= 0 && inputAmountVoteSuperKeyboard >= 0 && inputAmountVoteInvalid >= 0) {
  const totalVotes = inputAmountVoteRoborat + inputAmountVoteSuperKeyboard + inputAmountVoteInvalid;
  const percentVoteRoborat = ((inputAmountVoteRoborat * 100) / totalVotes).toFixed(1);
  const percentVotesuperKeyboard = ((inputAmountVoteSuperKeyboard * 100) / totalVotes).toFixed(1);
  const percentVoteInvalid = ((inputAmountVoteInvalid * 100) / totalVotes).toFixed(1);

  alert(`A porcentagem de votos inválidos foi de ${percentVoteInvalid}%, a de votos no Roborat foi igual a ${percentVoteRoborat}% e a do SuperKeyboard foi de ${percentVotesuperKeyboard}%. 
    \nConsiderando apenas os votos válidos Roborat ficou com ${((inputAmountVoteRoborat * 100) / (totalVotes - inputAmountVoteInvalid)).toFixed(1)}% e o SuperKeyboard com ${((inputAmountVoteSuperKeyboard * 100) / (totalVotes - inputAmountVoteInvalid)).toFixed(1)}%.`)
} else alert('Insira valores válidos!')