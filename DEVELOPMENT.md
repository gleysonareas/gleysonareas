# Gleyson Areas da Silva — Currículo online

Portfólio/currículo em **Angular 22 com SSR** (renderização no servidor + hidratação), estilizado com **Tailwind CSS v4**. Convertido de um projeto Lovable (TanStack Start/React) mantendo o mesmo visual.

## Stack

- Angular 22 (standalone components, signals, control flow `@for`)
- `@angular/ssr` com pré-renderização (SSG) e servidor Node/Express
- Tailwind CSS v4 via PostCSS
- Fontes self-hosted (`@fontsource`): Space Grotesk e JetBrains Mono

## Comandos

```bash
npm install
npm start          # dev em http://localhost:4200
npm run build      # gera dist/gleyson-portfolio (browser + server)
npm test           # testes unitários
node dist/gleyson-portfolio/server/server.mjs   # serve com SSR (porta 4000)
```

## Editando o conteúdo

Os dados (experiências, skills, certificações, contatos) ficam em `src/app/data.ts`. O layout está em `src/app/app.html` e o tema (cores, fontes) em `src/styles.css`. As meta tags de SEO/Open Graph estão em `src/index.html`.

## Publicação no GitHub Pages

O workflow `.github/workflows/deploy.yml` faz o build e publica a pasta `dist/gleyson-portfolio/browser` (HTML já pré-renderizado) a cada push na `main`. Na branch `angular-ssr-portfolio` o workflow só faz o build (validação), sem publicar. Em **Settings → Pages**, selecione **GitHub Actions** como fonte. O site fica em `https://gleysonareas.github.io/gleysonareas/`.

> **SSR em produção:** por segurança o Angular só atende hosts listados em `security.allowedHosts` no `angular.json` (hoje: `localhost`). Ao hospedar `server.mjs` num domínio próprio, adicione-o lá (ex.: `"meusite.com"`).

> Como o Pages é hospedagem estática, o que vai ao ar é a versão pré-renderizada (SSG). Para SSR em tempo de requisição, rode `server.mjs` em um host Node (Render, Fly.io, Azure etc.).
