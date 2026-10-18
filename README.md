# FlaStore

**Nome:** André Guilherme Amorim Pereira — **RGM:** 114.034
**Tema do projeto:** loja virtual de produtos do Flamengo (FlaStore).

## Interface criada

A página simula a tela inicial de uma loja virtual. Ela tem uma barra de navegação com o nome da loja, uma seção de apresentação com título, descrição e botão, um alerta de frete grátis, um carrossel de destaques, seis categorias e seis produtos em cards, além de um rodapé. O layout é responsivo com `container`, `row` e `col`.

## Componentes Bootstrap utilizados

`navbar`, `container`, `row`, `col`, `card`, `button`, `badge`, `alert`, `carousel`, `footer`, além de classes utilitárias (`ratio`, `g-*`, `my-*`, `text-center`).
Todas Pegas do site de documentação oficial do bootstrap.

## Diferença entre `let`, `const` e `var`

- `const`: valor que não será reatribuído. Usei em `nomeLoja`, `categoria`, `preco` e outros valores fixos.
- `let`: valor que pode mudar. Usei em `produtosNoCarrinho` e `quantidade`, que são alterados ao longo do código.
- `var`: forma antiga de declarar variáveis. Tem escopo de função e permite redeclaração, o que gera erros difíceis de achar. Por isso a prática atual prioriza `let` e `const`, que têm escopo de bloco e são mais previsíveis.

## Tipos de dados utilizados

- string: `titulo`, `cliente`
- number: `estoque`, `preco`
- boolean: `disponivel`, `compraGrande`
- null: `cupomAplicado`

## Condição com `if/else`

Verifico se o produto está em estoque: se `estoqueAtual > 0`, o Console mostra "Produto disponível"; caso contrário, mostra "Produto esgotado". No desafio final, também verifico se o subtotal é maior ou igual a 100 para decidir entre "Frete grátis" e "Frete pago". Testei os dois caminhos alterando os valores das variáveis.

## Maior dificuldade encontrada

Conseguir ver, entender como o bootstrap funciona na parte pratica, entender o que cada parte da documentação está sendo falada, e me acostumar com usar o style da página dentro do INDEX.
Tentar entender como mudar o width, ou seja, mudar os tamanhos das imagens, saber o que vai no object-fit, e as diferenças entre fill, contain e cover

## Como a dificuldade foi resolvida

Testando o código, lendo a documentação, pesquisando no google sobre como funciona cada coisa, e nos casos mais extremos como a parte de mudar o tamanho da imagem(não consegui fazer isso 100% da forma que eu queria), perguntando para a IA como fazer, e aplicando no código.