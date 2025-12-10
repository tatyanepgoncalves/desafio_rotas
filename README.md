# Desafio Rotas: Médicos & Dentistas

## 💻 Sobre o Projeto

O **Desafio Rotas: Médicos & Dentistas** é um projeto de desenvolvimento web focado na criação de uma interface de usuário rica e responsiva, utilizando o ecossistema React.

Este projeto foi desenvolvido como parte do desafio proposto durante a **Formação Full Stack Empower 5.0 da Vai na Web**. O objetivo principal é praticar e demonstrar habilidades em roteamento de aplicações (usando ``react-router-dom``), componentização, gerenciamento de estado (via Hooks) e estilização avançada (usando ``SCSS``).

## ✨ Funcionalidades Principais

O projeto é estruturado em duas rotas principais e inclui os seguintes componentes:

### 🏠 Página Inicial (``/``)

- **Hero Section**: Apresentação principal do projeto com imagem e chamada de ação.
- **Impacto**: Seção destacando o impacto da iniciativa.
- **Missão**: Seção dedicada à descrição da missão e dos valores do projeto.

### 🤝 Página Seja Voluntário (``/seja-voluntario``)

- **Hero Section**: Introdução à página de cadastro.
- **Formulário de Cadastro**: Componente dedicado à coleta de informações de novos voluntários (médicos e dentistas).

### Componentes de Layout

- **Header**: Navegação principal e logotipo.
- **Menu Mobile**: Navegação responsiva para dispositivos móveis.
- **Footer**: Informações de rodapé e links úteis.

## 🚀 Deploy

O projeto está atualmente em deploy (hospedado) e pode ser acessado através do link abaixo:

- **🔗 Live Demo**: [🔗 Desafio Rotas](https://desafio-rotas.vercel.app/)

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface de usuário.
- **Vite**: Ferramenta de build moderna e rápida para projetos frontend.
- **React Router DOM**: Biblioteca essencial para gerenciar as rotas da aplicação (SPA).
- **Sass/SCSS**: Pré-processador CSS para estilização modular e organizada.
- **Lucide React**: Conjunto de ícones personalizáveis.
- **JavaScript (ES6+)**: Linguagem de programação principal.
- **ESLint**: Ferramenta para garantir a padronização e qualidade do código.

## ⚙️ Instalação e Execução (Localmente)

Para rodar este projeto na sua máquina local, siga os passos abaixo.

### Pré-requisitos

Certifique-se de ter instalado:

- Node.js (versão LTS recomendada)
- npm ou Yarn

#### 1. Clonar o Repositório

```bash
# Clone o repositório via HTTPS
git clone https://github.com/tatyanepgoncalves/desafio_rotas.git

# Ou via SSH
# git clone git@github.com:tatyanepgoncalves/desafio_rotas.git

# Acesse o diretório do projeto
cd desafio_rotas
```

#### 2. Instalar Dependências

Utilize o gerenciador de pacotes de sua preferência (npm ou yarn):

```bash
# Usando npm
npm install

# OU usando yarn
# yarn install
```

#### 3. Executar o Projeto

Inicie o servidor de desenvolvimento.

```bash
# Usando npm
npm run dev

# OU usando yarn
# yarn dev
```

O projeto será iniciado localmente e estará acessível em ``http://localhost:5173`` (ou outra porta indicada pelo terminal).

#### 4. Build para Produção

Para gerar uma versão de produção otimizada:

```bash
# Usando npm
npm run build
```

O código pronto para deploy estará disponível no diretório ``/dist``.

## 📂 Estrutura de Pastas

A organização de pastas segue uma estrutura modular, típica de aplicações React, facilitando a manutenção e escalabilidade:

```bash
desafio_rotas/
├── public/
├── src/
│   ├── assets/           # Imagens e mídias
│   ├── components/       # Componentes reutilizáveis
│   │   ├── HomePage/     # Componentes específicos da Home
│   │   ├── Layout/       # Header, Footer, Menu e Layout base
│   │   └── SejaVoluntarioPage/ # Componentes específicos da rota Voluntário
│   ├── hooks/            # Hooks customizados (e.g., useMenuMobile)
│   ├── pages/            # Componentes que representam as páginas (Rotas)
│   ├── routes/           # Configuração de rotas (AppProvider.jsx)
│   ├── styles/           # Variáveis globais de SCSS
│   ├── App.jsx           # Componente principal
│   └── main.jsx          # Ponto de entrada da aplicação
├── package.json
├── vite.config.js
└── README.md     
```

## 👤 Autor

- Tatyane P. Gonçalves
  - GitHub: [@tatyanepgoncalves](https://github.com/tatyanepgoncalves)
  - Linkedin: [@tatyanegoncalves](https://www.linkedin.com/in/tatyanegoncalves/)

## ⚖️ Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](./LICENSE) (se existir no repositório) para mais detalhes.
