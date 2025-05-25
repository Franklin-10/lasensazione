# La Sensazione

**La Sensazione** é uma aplicação desenvolvida com **React 18** e **Vite**, totalmente responsiva focada no gerenciamento de um cardápio de pizzaria. Oferece área pública (visualização de promoções e contato) e área administrativa (autenticação, CRUD de itens, perfil de usuário). Este README detalha cada arquivo, pasta e fluxo, mantendo todas as informações e enriquecendo explicações.

---

## 📂 Estrutura Completa do Projeto

```
laSensazione/
├── public/
│   ├── index.html                # HTML base com <div id="root">
│   └── favicon.ico               # ícone da aplicação
├── src/
│   ├── Api.jsx                   # definição de endpoints e fetch wrapper
│   ├── App.jsx                   # rotas (BrowserRouter, Routes) e layout global
│   ├── App.css                   # estilos globais de App
│   ├── index.jsx                 # entrypoint que renderiza <App />
│   ├── UserContext.jsx           # Context API para auth (login, auto-login, logout)
│   ├── hooks/
│   │   ├── useFetch.jsx          # hook genérico para requisições HTTP
│   │   ├── useForm.jsx           # hook para controle de formulários
│   │   └── useMedia.jsx          # hook para detecção de breakpoints
│   ├── components/
│   │   ├── Helper/
│   │   │   ├── Error.jsx         # exibe mensagens de erro unificadas
│   │   │   ├── Head.jsx          # manipula <head> (títulos dinâmicos)
│   │   │   ├── Loading.jsx       # spinner global de carregamento
│   │   │   └── ProtectedRoute.jsx# wrapper para rotas privadas
│   │   ├── Forms/
│   │   │   ├── Button.jsx        # botão estilizado reutilizável
│   │   │   └── Input.jsx         # campo de texto estilizado
│   │   ├── Home/
│   │   │   ├── Cardapio.jsx      # lista de destaques estáticos do cardápio
│   │   │   ├── Introducao.jsx    # seção de boas-vindas e CTA
│   │   │   ├── Promocao.jsx      # componente de promoção individual
│   │   │   └── Contato.jsx       # formulário de contato estático
│   │   ├── Login/
│   │   │   ├── Login.jsx         # container e roteamento para ações de auth
│   │   │   ├── LoginForm.jsx     # formulário de login (useForm, userLogin)
│   │   │   ├── LoginCreate.jsx   # formulário de cadastro de usuário
│   │   │   ├── LoginPasswordLost.jsx # solicitação de recuperação de senha
│   │   │   └── LoginPasswordReset.jsx# redefinição de senha
│   │   ├── Feed/
│   │   │   ├── Feed.jsx          # container que utiliza FeedCardapio e paginação
│   │   │   ├── FeedCardapio.jsx  # implementação da lista paginada de itens
│   │   │   ├── CardapioItem.jsx  # card de pizza com nome, foto e preço
│   │   │   ├── CardapioItemUpdate.jsx # formulário inline de edição rápida
│   │   │   ├── ImageCarrossel.jsx# carrossel de imagens do feed
│   │   │   ├── ItemCarrossel.jsx # slide individual do carrossel
│   │   │   └── ModalProduto.jsx  # modal para detalhes e ação de exclusão
│   │   ├── Produto/
│   │   │   ├── ProdutoContent.jsx# exibição detalhada de produto
│   │   │   └── ProdutoDelete.jsx # confirmação de exclusão de produto
│   │   └── User/
│   │       ├── User.jsx          # container de perfil e histórico
│   │       ├── UserCardapioPost.jsx  # formulário diferenciado para postar cardápio do usuário
│   │       ├── UserHeader.jsx    # cabeçalho específico para área de usuário
│   │       ├── UserHeaderNav.jsx # navegação interna (links de perfil, cardápio)
│   │       └── Footer.jsx        # rodapé comum em páginas públicas e privadas
│   └── styles/                   # CSS Modules gerados pelo componente (ex.: .module.css)
├── .env                          # variáveis de ambiente (VITE_API_URL, VITE_API_KEY)
├── .htaccess                     # redirecionamento em hospedagens Apache
├── .gitignore                    # ignorados pelo Git
├── eslint.config.js              # configuração do ESLint
├── netlify.toml                  # deploy no Netlify
├── package.json                  # dependências e scripts
├── package-lock.json             # travamento de versões
├── Readme.md                     # este documento
└── vite.config.js                # build, alias e plugins (React, SVGR)
```

---

## 🚦 Build e Dependências

* **Scripts** (package.json):

  * `dev`: roda Vite em modo dev
  * `build`: gera build otimizado em `dist/`
  * `preview`: pré-visualiza build
  * `lint`: checa código com ESLint

* **Dependências chave**:

  * `react`, `react-dom`, `react-router-dom`
  * `framer-motion` para animações
  * `prop-types` para validação de props

* **DevDependencies**:

  * `vite`, `@vitejs/plugin-react`, `vite-plugin-svgr`
  * `eslint` com regras recomendadas

---

## 🚀 Ponto de Entrada e Rotas

1. **public/index.html**: define `<div id="root"></div>`
2. **src/index.jsx**: importa `App` e injeta no DOM
3. **src/App.jsx**:

   * Envolve em `<UserContextProvider>`
   * Define `<BrowserRouter>` e `<Routes>`:

     * `/` → `Home` (IntroSection, Carousel, ContactForm)
     * `/login` → `LoginForm`
     * `/reset` → `ResetPassword`
     * `/menu` → `ProtectedRoute(MenuList)`
     * `/menu/create` & `/menu/:id/edit` → `ProtectedRoute(CreateItem)`
     * `/profile` → `ProtectedRoute(Profile)`
     * `*` → `NotFound`

---

## 🔐 Context API de Autenticação

**UserContext**:

  * **userLogin**: validações de erro e loading, armazena token, busca dados de usuário.
  * **getUser**: obtém perfil e popula `user`.
  * **autoLogin**: executa ao montar, mantém sessão.
  * **userLogout**: limpa estado e token.
  * Contexto expõe: `user`, `login`, `loading`, `error`, `userLogin()`, `userLogout()`.

---

## 🔑 Fluxo de Login

* **Login**:

  * Campos controlados por `useForm`.
  * Botão `Submit` desabilitado se `loading === true`.
  * Exibe `Error` do contexto se credenciais inválidas.
  * Após login bem-sucedido, redireciona para `/conta`.
  * Criação de Conta
  * Reset de Senha

* **Validações**:

  * Feedback com validação de senha e email via regexp.
  * Indicador de loading no botão.
  * Tratamento de erros HTTP e de rede.

---

## 🍕 Feed (Menu)

* **CardápioList**:

  * Usa `useFetch(CARDAPIO_GET({ page, total, user }))`.
  * Skeleton de loading antes dos dados.

---

## 👤 Área do Usuário
  * **Cardápio-Criação**:
      * Criação do Menu, inserindo os pratos do cardápio
  * **Cardápio-Edit**:
      * Exibe um modal responsiva, nome, descrição curta, preço formatado, pode ser feita a edição completa ou parcial dos itens do cardápio e tambem sua exclusão.
      * Modal acessível (focus trap e ESC para fechar).
      * Exibe detalhes completos e confirmação de exclusão.
      * Chama `DELETE_MENU(id)` no contexto de `useFetch`.
---

## 🎯 Boas Práticas Aplicadas

* **Design Atômico**: componentes pequenos e coesos.
* **Segurança**: tokens em `localStorage` e rotas protegidas.
* **Acessibilidade**: atributos aria, foco gerenciado em modais.
* **Performance**: lazy loading de imagens e code splitting de rotas.
* **Qualidade de Código**: lint, prop-types, comentários claros.

---
