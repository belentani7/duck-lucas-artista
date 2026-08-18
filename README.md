# DUCK — Produção Musical

Landing page editorial para a DUCK Produção Musical, estúdio de Aracaju voltado a beats, gravação, mixagem e masterização. O projeto traduz a marca em uma experiência de uma página: escura, tátil, assimétrica e orientada à conversão por contato direto.

## Direção de produto

A interface segue a direção **Estúdio Editorial Noturno**. Verde floresta funciona como sala de controle; creme cria luz e legibilidade; verde-lima marca ações e sinais de áudio. A tipografia combina Space Grotesk para títulos e DM Sans para leitura. O conteúdo evita depoimentos, logos de clientes ou provas sociais inventadas.

## O que está implementado

A página possui navegação por âncoras, menu responsivo, hero com direção fotográfica de estúdio, apresentação do posicionamento, indicadores de catálogo, serviços interativos, método de trabalho, manifesto, contato direto e QR funcional para `duck.46graus.com`. O layout foi validado em desktop e mobile, com foco visível, respeito a `prefers-reduced-motion` e links externos seguros.

Os números de catálogo exibidos — 36M+ streams, 40+ lançamentos e 1.4K+ seguidores — são dados fornecidos para a comunicação da marca e não são apresentados como depoimentos de terceiros.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS 4
- Wouter
- Lucide React
- Manus WebDev static hosting

## Desenvolvimento local

```bash
pnpm install
pnpm dev
```

## Validação

```bash
pnpm check
pnpm build
```

## Estrutura principal

```text
client/
  index.html
  src/
    App.tsx
    index.css
    pages/Home.tsx
ideas.md
README.md
```

Os ativos visuais são referenciados por URLs permanentes do armazenamento do projeto, evitando que imagens pesadas sejam empacotadas dentro de `client/public`.

## Decisões de conteúdo

A comunicação é em português do Brasil. O CTA principal leva ao contato por WhatsApp; os caminhos secundários apontam para o site, Instagram e e-mail informados na identidade DUCK. Nenhum serviço externo exige segredo ou credencial no frontend.
