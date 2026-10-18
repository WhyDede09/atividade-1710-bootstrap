// ===== Exercício 1: conexão com o JavaScript =====
console.log("Meu primeiro script foi executado!");

// ===== Exercício 2: instruções e comentários =====
// A atividade número 2.
console.log("Projeto: FlaStore");
console.log(10 + 5);
console.log("A atividade começou");

// ===== Exercício 3: variáveis com const e let =====
const nomeLoja = "FlaStore"; // não muda
const categoria = "Camisas"; // não muda
let produtosNoCarrinho = 3; // pode mudar

console.log(produtosNoCarrinho);
produtosNoCarrinho = 5; // alterando o valor da variável let
console.log(produtosNoCarrinho);

// ===== Exercício 4: var (contexto histórico) =====
var exemploAntigo = "Declaração utilizada em códigos antigos";
console.log(exemploAntigo);

// ===== Exercício 5: tipos de dados =====
const titulo = "Camisa Titular"; // string
const estoque = 12; // number
const disponivel = true; // boolean
const cupomAplicado = null; // null

console.log(titulo);
console.log(estoque);
console.log(disponivel);
console.log(cupomAplicado);

// ===== Exercício 6: operadores =====
const precoCamisa = 175;
const precoBone = 45;
const desconto = 5;

const soma = precoCamisa + precoBone;
const subtracao = soma - desconto;
const multiplicacao = precoCamisa * 2;
const divisao = soma / 2;
const compraGrande = soma >= 40;

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(compraGrande);

// ===== Exercício 7: strings e template literals =====
const cliente = "André";
const itemComprado = "Camisa Titular";
const quantidadeComprada = 2;

const mensagem = `O cliente ${cliente} comprou ${quantidadeComprada} unidade(s) de ${itemComprado} na ${nomeLoja}.`;
console.log(mensagem);

// ===== Exercício 8: decisão com if e else =====
// Teste os dois caminhos alterando o valor de estoqueAtual (ex.: 0 e 12).
const estoqueAtual = 12;

if (estoqueAtual > 0) {
  console.log("Produto disponível");
} else {
  console.log("Produto esgotado");
}

// ===== Exercício 10: desafio integrador =====
const produto = "Boné Oficial";
const preco = 45;
let quantidade = 2;
const frete = 10;

const subtotal = preco * quantidade;
const totalComFrete = subtotal + frete;

console.log(`Pedido: ${quantidade}x ${produto}. Subtotal: R$ ${subtotal}. Total com frete: R$ ${totalComFrete}.`);

if (subtotal >= 100) {
  console.log("Frete grátis");
} else {
  console.log("Frete pago");
}

quantidade = 4; // mudando a quantidade para testar o outro caminho
const novoSubtotal = preco * quantidade;

console.log(`Novo pedido: ${quantidade}x ${produto}. Subtotal: R$ ${novoSubtotal}.`);

if (novoSubtotal >= 100) {
  console.log("Frete grátis");
} else {
  console.log("Frete pago");
}