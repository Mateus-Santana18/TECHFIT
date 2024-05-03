# Projeto TECHFIT - Aplicativo mobile para treinos de academia

Este projeto foi cuidadosamente criado como parte do sistema final do segundo semestre do curso Senai, 

### 🛠️ Tecnologias Utilizadas

[![React Native](https://shields.io/badge/react-black?logo=react&style=for-the-badge)](https://reactnative.dev/)
[![Node](https://img.shields.io/badge/Node-20.12.2-green?logo=node)](https://nodejs.org/)
[![NPM](https://img.shields.io/badge/NPM-10.4.9-red?logo=npm)](https://www.npmjs.com/)
[![PostgreSQL](https://img.shields.io/badge/postgresql-4169e1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/docs/)


## 🏗️ Estrutura da Aplicação

- **/src**: Esta é a pasta principal onde todo o código-fonte da aplicação é armazenado.
  - **/components**: Aqui, encontramos todos os componentes reutilizáveis da aplicação. Esses componentes são responsáveis por renderizar elementos visuais na interface do usuário.
  - **/hooks**: Nesta pasta, são armazenados os hooks customizados. Os hooks são funções especiais do React que permitem adicionar funcionalidades a componentes funcionais.
  - **/services**: Esta pasta contém os serviços utilizados para realizar comunicação com servidores externos, como APIs, ou para manipular dados localmente.
  - **App.js**: Este arquivo é o ponto de entrada da aplicação. Nele, definimos as configurações gerais da aplicação, como as rotas utilizadas.
  - **index.css**: Aqui são definidos os estilos globais da aplicação, que serão aplicados em todos os componentes.
  - **main.jsx**: Este é o arquivo principal onde a aplicação é inicializada.
- **/public**: Esta pasta funciona como um "servidor" interno da aplicação. Todo o conteúdo colocado nesta pasta fica disponível publicamente quando a aplicação é executada. É comum colocar imagens e outros arquivos estáticos aqui, pois é o único local acessível por meio de URLs na aplicação.
- **/node_modules**: Aqui ficam todas as dependências do projeto, ou seja, as bibliotecas e códigos de terceiros que são instalados quando executamos o comando `npm install`.
- **package.json**: Aqui são definidas as dependências do projeto e outras configurações gerais.


## 🚀 Executando o projeto

1. Instale as dependências: `npm install`.
2. Inicie o servidor: `npm run dev`.
3. Observe a saída do console para verificar a porta onde o servidor foi iniciado e acesse a URL gerada em seu navegador ou mobile.
