# Atividade — Catálogo Rick and Morty

Projeto Next.js com componentes reutilizáveis (`Header` e `CardPersonagem`), props e CSS Modules. Exibe 10 personagens com dados estáticos.

## Como rodar no seu computador

1. Extraia o arquivo ZIP/RAR.
2. Abra a pasta `atividade-rick-morty` no terminal.
3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

5. Abra no navegador: [http://localhost:3000](http://localhost:3000)

## Estrutura principal

- `components/Header.js` — cabeçalho reutilizável
- `components/CardPersonagem.js` — cartão de personagem (props)
- `data/personagens.js` — lista estática com 10 personagens
- `app/page.js` — página que monta o catálogo

## Requisitos

- Node.js 18+ instalado
- Conexão com a internet (imagens da API pública Rick and Morty)
