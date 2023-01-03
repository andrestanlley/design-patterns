### Repositorio desenvolvido durante o curso "Design Patterns em TypeScript Entendendo Padrões de Projetos" da HCode

# Padrões de projetos

Padrões de projetos são soluções já válidadas para resolver determinado problema, evitando determinados tipos de erros ou comportamentos.

## SOLID

- S - Princípio da Responsabilidade Única.

`“Nunca deve haver mais de um motivo para uma classe mudar.”`

- O - Princípio Aberto/Fechado (Open/Closed)

`“Aberto para extensão e fechado para modificação”`

- L - Princípio da Substituição de Liskov

`“Uma classe derivada pode ser substituível por sua classe base”`

- I - Princípio da Segregação de Interfaces

`“Classes não devem ser forçadas a depender de métodos que não usam”`

- D - Princípio da Inversão de Dependência

`“Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações; Abstrações não devem depender de detalhes”`

## Criacional
`Trabalham com a criação de objetos flexíveis e reutilizáveis.`

#### Factory Method
- Neste padrão devemos substituir as chamadas diretas (new) para um método intermediario que fará o papel de fábrica, este método irá controlar como os objetos que estendem a classe serão instanciados.
Ex: a classe Veiculo implementa a interface Transporte, e as subclasses concretas carros, motos e bicicletas que herdam de Veiculo e implementam os metodos da interface.

### Abstract Factory
- Devemos declarar explicitamente interfaces para cada produto distinto da família de produtos (ex: veículos e aeronaves). Todas as variantes dos produtos devem serguir essas interfaces. Declaramos então a fábrica abstrata, uma interface com metodos de criação para todos os produtos que fazem parte da família de produtos (ex: criarTransporteVeiculo, criarTransporteAeronave), estes devem retornar tipos abstratos de produtos representados pelas interfaces.

### Builder
- No builder iremos quebrar o processo de criação do objeto em etapas e em vários métodos, esses componentes serão chamados builders, que são os itens para construir o objeto. Esta sequencia será guiada por um diretor que recebe quais os métodos ele precisa e dispara a sequência para os builders.
## Estrutural
`Definem como trabalhar com objetos e classes em estruturas maiores e complexas, e ainda assim flexíveis e eficientes.`

### Adapter
- Podemos utilizar o adapter para converter a interface de um objeto de maneira que outro objeto possa compreender as informações, ele encobre um dos objetos para esconder as regras de négocio e qualquer dificuldade da conversão, permite que classes com interfaces incompatíveis trabalhem juntas.

## Comportamental
`Trabalham com a comunicação eficiente e designam as responsabilidades comuns aos objetos.`