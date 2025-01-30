<a id="readme-top"></a>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/DiAngello/AgendaWeb">
    <img src="src/views/assets/logo.png" alt="Logo" >
  </a>

  <h3 align="center">Agenda Web</h3>

  <p align="center">
    Um sistema simples de Agenda de Contatos Web.
    <br /></p>
</div>
 
<p align="center">
  <img src="https://forthebadge.com/images/badges/built-with-love.png" alt="Built with Love">
</p>
<!-- TABLE OF CONTENTS -->
<details>
  <summary>Sumário</summary>
  <ol>
    <li>
      <a href="#about-the-project">Sobre o projeto</a>
      <ul>
        <li><a href="#built-with">Tecnologias</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Como iniciar</a>
      <ul>
        <li><a href="#prerequisites">Pré-requisitos</a></li>
        <li><a href="#installation">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#usage">Uso</a></li>
    <li><a href="#contact">Contatos</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## Sobre o projeto

[![Product Name Screen Shot][product-screenshot]](https://example.com)

O projeto Agenda Web é uma aplicação simples para gerenciar contatos. Ele permite adicionar, editar e excluir contatos, além de oferecer um sistema de autenticação de usuários.

<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>

<!-- BUILT WITH -->
### Tecnologias

* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
* ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
* ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
* ![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)

<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>

<!-- GETTING STARTED -->
## Como iniciar

Para executar esse projeto localmente, siga as instruções abaixo:

### Pré-requisitos

* NodeJS
* npm ou yarn

### Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/DiAngello/AgendaWeb/.git
   ```
   
2.  Navegue até o diretório do projeto:
    ```sh
    cd AgendaWeb
    ```
    
3.  Instale as dependências:
    ```sh
    npm install  # ou yarn install
    ```
4.  Configure o banco de dados:
    - O projeto utiliza o SQLite, que não requer configuração adicional. O arquivo `database.sqlite` será criado automaticamente na raiz do projeto.
      
5.  Execute o servidor:
    ```sh
    node index.js # ou npm start
    ```
    
6.  Acesse o aplicativo no seu navegador em `http://localhost:8080`.

<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>

<!-- USAGE EXAMPLES -->
## Uso

1. **Inicio**
   - Na página inicial, clique em "Iniciar Sessão" para acessar o sistema.
     
2. **Cadastro:**
   - Na página Inicio da Sessão, clique em "Não tem um login? Cadastre-se agora!" para criar uma nova conta de usuário.
   - Preencha o formulário com suas informações e clique em "Cadastrar".

3. **Login:**
   - Na página Inicio da Sessão, insira seu email e senha nos campos apropriados e clique em "Login".

4. **Gerenciamento de contatos:**
   - Após fazer login, você será redirecionado para a página principal, onde poderá:
     - **Adicionar lista:** Clique no símbolo "+" ao lado de lista, escolha um nome e descrição e clique em "Salvar lista".
     - **Adicionar contato:** Clique no símbolo "+", preencha os dados do contato e clique em "Ok".
     - **Buscar contato:** No campo "Buscar contatos", escreva e busque o contato.
     - **Visualizar detalhes:** Clique no nome do contato para ver mais informações sobre ele.
     - **Editar contato:** Após buscar e clicar no contato, modifique os dados e clique em "Salvar alterações".
     - **Excluir contato:** No mesmo formulário, clique no botão "Excluir contato" para remover o contato selecionado.
    
<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>

<!-- CONTACT -->
## Contatos

Andressa de Souza - aka DiAngello - andressa.gabrielly.ofc@gmail.com

Link do projeto: [https://github.com/DiAngello/AgendaWeb/](hthttps://github.com/DiAngello/AgendaWeb/)

<p align="right">(<a href="#readme-top">Voltar ao topo</a>)</p>
