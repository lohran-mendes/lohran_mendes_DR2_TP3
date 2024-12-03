// “script_12.js” → Uma loja está em promoção e fornece 20% de desconto para gestantes e 15% de desconto para aposentados e 10% para pensionistas. Esses descontos são aplicados se o valor da compra for maior ou igual a R$80,00. Se o valor da compra for abaixo de R$80,00 o desconto é 15% para gestantes, 10% para aposentados e 5% para pensionistas. No arquivo script.js, siga as etapas abaixo:

// Crie uma aplicação que solicite o valor total da compra efetuada e um código que identifique se o comprador é:
// Gestante (A)
// Aposentado (B)
// Pensionista (C)
// A aplicação deve retornar o valor final da compra de acordo com o tipo de consumidor.
// Caso o tipo de consumidor não exista, exibir uma mensagem informando erro e não exibir o valor da compra do usuário.

const inputTotalValue = Number(prompt('Insira o valor total da sua compra.'))
const typeCustomer = (prompt('O cliente é Gestante(A), Aposentado(B) ou Pensionista(C)?').trim().toLowerCase())
let discountValue = 0;
let typeDiscount = '';

if (inputTotalValue > 80) {
  switch (typeCustomer) {
    case 'a':
      discountValue = inputTotalValue - (inputTotalValue * 0.2)
      typeDiscount = '20%';
      break;
    case 'b':
      discountValue = inputTotalValue - (inputTotalValue * 0.15)
      typeDiscount = '15%';
      break;
    case 'c':
      discountValue = inputTotalValue - (inputTotalValue * 0.1)
      typeDiscount = '10%';
      break;
    default:
      break;
  } 
  alert(`O valor com o desconto de ${typeDiscount} ficou igual a R$${discountValue.toFixed(2)}`)
} else if( inputTotalValue > 0) {
  switch (typeCustomer) {
    case 'a':
      discountValue = inputTotalValue - (inputTotalValue * 0.15)
      typeDiscount = '15%';
      break;
    case 'b':
      discountValue = inputTotalValue - (inputTotalValue * 0.1)
      typeDiscount = '10%';
      break;
    case 'c':
      discountValue = inputTotalValue - (inputTotalValue * 0.05)
      typeDiscount = '5%';
      break;
    default:
      break;
  } 
  alert(`O valor com o desconto de ${typeDiscount} ficou igual a ${discountValue.toFixed(2)}`)
} else{
  alert('O valor inserido não é válido.')
}