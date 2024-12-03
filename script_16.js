//“script_16.js” → Crie uma aplicação que apresente para o usuário, um passo a passo para fazer um café. No arquivo script.js, siga as etapas abaixo:

// Utilize o switch, para resolver o exercício.
// Permita que o usuário escolha o passo, que deseja receber as instruções. Por exemplo: Supondo que haja 10 passos para o processo, que ele possa escolher ver apenas do passo informado em diante.
// Considere que o café deverá ainda ser torrado e moído pela máquina de café.
// Assim que terminar, salve todos os links para os exercícios realizados em PDF nomeando o arquivo conforme a regra “nome_sobrenome_DR2_TP3.PDF” e poste como resposta a este TP.
const stepStart = Number(prompt('Insira de qual passo você irá começar.'))

if(Number.isInteger(stepStart) && stepStart > 0 && stepStart < 11)
switch (stepStart) {
  case 1:
    alert("Passo 1: Escolha os grãos de café.");
  case 2:
    alert("Passo 2: Torra os grãos de café.");
  case 3:
    alert("Passo 3: Moa os grãos de café.");
  case 4:
    alert("Passo 4: Adicione a água na máquina.");
  case 5:
    alert("Passo 5: Coloque o pó de café no filtro.");
  case 6:
    alert("Passo 6: Inicie o processo de filtragem.");
  case 7:
    alert("Passo 7: Aguardar o café ser filtrado.");
  case 8:
    alert("Passo 8: Sirva o café na xícara.");
  case 9:
    alert("Passo 9: Adicione leite ou açúcar se desejar.");
  case 10:
    alert("Passo 10: Pronto! Aproveite seu café.");
} else alert('Insira um valor válido!')