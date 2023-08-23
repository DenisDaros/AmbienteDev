# Ambiente Dev

### Sumário

<details>
  <summary><strong>👨‍💻 O que foi desenvolvido</strong></summary><br />

  Neste projeto você vai ver conceitos básicos para construir um ambiente de desenvolvimento:

  - Iniciar um projeto com NPM;
  - Instalar bibliotecas externas;
  - Instalar um Bundler e Web Server (Vite);
</details>

### Orientações

<details>
  <summary><strong>Rodando na sua máquina</strong></summary><br />

1. Clone o repositório

	*  Use o comando: `git@github.com:DenisDaros/AmbienteDev.git`

2. Instale as dependências

	* Para isso, use o seguinte comando: `npm install`

3. Rode a aplicação 

	* Para isso, use o seguinte comando: `npm run dev`
</details>

<details>
  <summary><strong>Iniciando um projeto com NPM</strong></summary><br />

Este guia irá ajudá-lo a dar os primeiros passos na criação de um projeto utilizando o NPM (Node Package Manager). O NPM é uma ferramenta essencial para gerenciar dependências e automatizar tarefas em projetos JavaScript e Node.js.

1. Instalação do Node.js e NPM
Antes de iniciar um projeto com o NPM, você precisa ter o Node.js instalado no seu sistema. O Node.js inclui o NPM por padrão. Para verificar se você tem o Node.js instalado, abra o terminal e digite:
    * `node -v`

Se a versão do Node.js for exibida, isso significa que o Node.js está instalado. Caso contrário, você precisará instalá-lo a partir do site oficial do Node.js.

2. Iniciando um Novo Projeto
Após ter o Node.js instalado, você pode iniciar um novo projeto com o NPM. Siga estes passos:

    2.1. Crie uma Pasta para o Projeto
Crie uma nova pasta para o seu projeto e navegue até ela usando o terminal:
    * `mkdir meu-projeto`
    * `cd meu-projeto`

    2.2. Inicialize o Arquivo package.json
O arquivo package.json é um arquivo de configuração que contém informações sobre o seu projeto e suas dependências. Para criar um arquivo package.json com configurações padrão, execute o seguinte comando:
    * `npm init -y`

O parâmetro -y indica que você aceita as configurações padrão sem precisar responder a perguntas.

3. Gerenciando Dependências
Com o arquivo package.json criado, você pode começar a gerenciar as dependências do seu projeto. Dependências são bibliotecas e pacotes que seu projeto utiliza. Para instalar uma nova dependência, execute o seguinte comando:
    * `npm install nome-da-dependencia`
    

    no caso será a Vite, por isso ficará
    
    * `npm install vite`

As dependências instaladas são automaticamente listadas no arquivo package.json na seção dependencies.

4. Criando Scripts Personalizados
O arquivo package.json também permite criar scripts personalizados para automatizar tarefas comuns. Por exemplo, você pode criar um script para iniciar um servidor de desenvolvimento ou executar testes. Edite a seção "scripts" no arquivo package.json:
    * `"scripts": {
  "start": "vite --open"
}`

    Agora, você pode executar esses scripts usando o comando npm run nome-do-script. Por exemplo:

    * `npm run start`

5. Conclusão
Iniciar um projeto com o NPM é o primeiro passo para construir um ambiente de desenvolvimento organizado e gerenciável. O NPM permite instalar dependências, criar scripts personalizados e muito mais, tornando o desenvolvimento mais eficiente e estruturado.
</details>
<details>
  <summary><strong>Biblioteca externa</strong></summary><br />

Nesse projeto de desenvolvimento de um ambiente dev, existem algumas funcionalidades como um gerador de senhas seguro e um validador de campos de formulário,
ambos fazendo uso de bibiotecas externas, abaixo explicarei o passo a passo para se fazer uso de cada uma delas

Existem algumas vantagens em optarmos por usar uma biblioteca externa. Além de economizarmos tempo e linha código, bibliotecas populares recebem constantes atualizações e bugfixes, deixando, via de regra, nosso código mais seguro e performático.

Nesse projeto vamos utilizar a biblioteca nanoid, que é extremamente leve e consegue gerar uma sequência de caracteres aleatórios para se criar uma senha.

1. Para instalar

	*  Use o comando: `npm install nanoid`

Nesse projeto estou usando a sintaxe **import/export** no arquivo main.js. Para que se consiga utilizar essa sintaxe (ES Modules) no código, precisa adicionar a chave **"type": "module"** no arquivo package.json

src/main.js

import { nanoid } from 'nanoid'

const randomPassword = nanoid()

console.log(randomPassword)

Ao rodar o arquivo javascript diretamente com o node: node src/main.js, o código funciona, Ao rodar a aplicação no navegador, temos um erro.
Isso acontece porque o navegador não sabe que essa biblioteca está no node_modules. Essa forma de importar funciona no node, mas não no navegador.

Para que funcione, precisamos instalar uma ferramenta de desenvolvimento que faça isso para nós: aqui vamos usar o **vite**.

O Vite fornece ferramentas de desenvolvimento para nossa aplicação, como, por exemplo, um servidor de desenvolvimento (também comumente chamado de dev-server) e um bundler para compilação final da aplicação.

1. Para utilizar o dev-server

  *  no terminal: `npx vite --open`

Ao executar o comando, o Vite irá criar um servidor local e executar a aplicação que se encontra no arquivo index.html. É importante se certificar de que esse arquivo está na raiz da aplicação.

Observe que agora o erro anterior não aparece mais no navegador e o console.log() mostra corretamente a senha gerada pela biblioteca nanoid.



</details>
<details>
  <summary><strong>Vite</strong></summary><br />

Um "bundler" é uma ferramenta utilizada no desenvolvimento front-end para combinar e empacotar vários arquivos de código-fonte, como JavaScript, CSS, imagens e outros recursos, em um único ou em poucos arquivos otimizados para produção. Isso é feito para melhorar o desempenho do carregamento do site ou aplicativo, reduzindo o número de requisições feitas ao servidor.

O "Vite" é um bundler moderno e rápido, criado especificamente para o desenvolvimento front-end. Diferentemente dos bundlers tradicionais, que exigem etapas de compilação demoradas, o Vite adota uma abordagem de desenvolvimento rápido baseada em ES modules (módulos ECMAScript), permitindo que os desenvolvedores escrevam código modular no estilo ES6 sem a necessidade de processos de compilação complexos durante o desenvolvimento.

Fundamentos importantes para compreensão:

ES Modules: O Vite aproveita os módulos ES nativos, permitindo que os desenvolvedores importem e exportem código no estilo ES6. Isso melhora a velocidade de carregamento e a modularidade do código.

On-Demand Compilation: Ao acessar um arquivo, o Vite compila-o apenas quando necessário, em vez de compilar tudo de uma vez. Isso acelera o desenvolvimento.

Dev Server: O servidor de desenvolvimento do Vite é altamente otimizado, com HMR rápido e eficiente para atualizações de código instantâneas no navegador.

Configuração Simplificada: A configuração do Vite é direta e requer menos configuração em comparação com outros bundlers mais complexos.

Build Otimizado para Produção: O Vite é eficiente em produção, gerando bundles otimizados e com divisão de código automática para melhorar a performance em ambiente de produção.

Em resumo, o Vite é uma ferramenta que combina as vantagens dos módulos ES nativos, um servidor de desenvolvimento rápido e otimizações para construção, oferecendo um ambiente de desenvolvimento ágil e uma experiência de usuário mais rápida em produção.

</details>