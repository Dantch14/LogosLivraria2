# Logos Livraria · Filosofia

Aplicação React (Vite) da atividade prática avaliativa: livraria virtual de filosofia
com Componentes, Props e Rotas.

## Como executar

```bash
npm install
npm run dev
```

## Onde estão os conceitos 

**Componentes** (`src/components/`): `Header`, `Menu`, `Footer`, `Card` e `Button`,
todos funcionais e reutilizados em várias páginas.

**Props**
- `Card` recebe `titulo`, `autor`, `imagem`, `descricao`, `preco`, `categoria` e `onComprar`.
- `Produtos.jsx` usa `.map()` sobre o array `livros` (`src/data/livros.js`) e envia os dados por props.
- `Button` recebe `to`, `onClick`, `variante` e `children`.

**Rotas** (`src/App.jsx`, com `react-router-dom`)

| Rota | Página |
| --- | --- |
| `/` | Home |
| `/produtos` | Produtos (6 Cards) |
| `/sobre` | Sobre |
| `/contato` | Contato (formulário visual) |
| `*` | NotFound (404) |

A navegação usa `Link` e `NavLink`, sem recarregar a página.

## Alterações simples

- **Mudar uma informação por Props:** editar um objeto em `src/data/livros.js` (ex.: `preco` ou `titulo`).
- **Adicionar um novo Card:** acrescentar um objeto no array `livros`; o `.map()` renderiza sozinho.
- **Criar uma nova rota e pôr no menu:**
  1. criar `src/pages/NovaPagina.jsx`;
  2. adicionar `<Route path="/nova" element={<NovaPagina />} />` em `src/App.jsx`;
  3. adicionar `{ caminho: "/nova", texto: "Nova" }` no array `links` de `src/components/Menu.jsx`.
