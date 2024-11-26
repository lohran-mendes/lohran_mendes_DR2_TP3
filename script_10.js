// “script_10.js” → Uma fábrica produz vários tipos de doces que são enviados para as lojas em caixas de vários tipos e tamanhos. Construa um programa que obtenha a quantidade de doces fabricados e a capacidade da caixa e informe quantas caixas completas vão ser necessárias e se será necessário uma caixa adicional para os doces que restaram. Considere a distribuição dos doces por caixas grandes (com 100 doces), médias (com 50 doces) e pequenas (com 20 doces).

const quantidadeDoces = Number(prompt('quantidade de doces'));
const tamanhoCaixa = Number(prompt('Qual o tamanho da caixa? pequena(1), média(2) ou grande(3)?'));

const extensoCaixas = ['pequenas', 'médias', 'grandes'];
const numeroCaixas = [20, 50, 100];

if (quantidadeDoces > 0 && (tamanhoCaixa === 1 || tamanhoCaixa === 2 || tamanhoCaixa === 3)) {
const quantidadeCaixas = Math.ceil(quantidadeDoces / numeroCaixas[tamanhoCaixa - 1]);
alert(`A quantidade mínima de caixas ${extensoCaixas[tamanhoCaixa - 1]} necessárias para ${quantidadeDoces} doces é: ${quantidadeCaixas}`)
} else {
  alert('Você não inseriu valores válidos.')
}