# Guia de Deploy

Este guia fornece instruções completas para fazer o deploy da landing page do Venture em produção.

---

## 📋 Índice

- [Pré-deploy Checklist](#pré-deploy-checklist)
- [Build da Aplicação](#build-da-aplicação)
- [Deploy com Docker](#deploy-com-docker)
- [Deploy na Vercel](#deploy-na-vercel)
- [Deploy na Netlify](#deploy-na-netlify)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Deploy Manual](#deploy-manual)
- [Pós-deploy Verificações](#pós-deploy-verificações)
- [Monitoramento e Manutenção](#monitoramento-e-manutenção)

---

## ✅ Pré-deploy Checklist

Antes de fazer o deploy, verifique:

### Código
- [ ] Todos os recursos estão otimizados (imagens, fontes)
- [ ] Linting passa sem erros (`npm run lint`)
- [ ] Código formatado com Prettier
- [ ] Sem `console.log` em produção (remova ou comente)
- [ ] Links estão funcionando
- [ ] Imagens carregam corretamente

### Build
- [ ] Build de produção funciona (`npm run build`)
- [ ] Preview do build funciona (`npm run preview`)
- [ ] Tamanho do bundle é razoável (< 500KB ideal)
- [ ] Sem warnings no build

### Responsividade
- [ ] Testado em mobile (375px, 414px)
- [ ] Testado em tablet (768px, 1024px)
- [ ] Testado em desktop (1440px+)
- [ ] Menu mobile funciona corretamente

### Cross-browser
- [ ] Testado em Chrome/Edge
- [ ] Testado em Firefox
- [ ] Testado em Safari (se possível)

### SEO e Performance
- [ ] Meta tags definidas (title, description, og:*)
- [ ] Favicon configurado
- [ ] Imagens com `alt` text
- [ ] Performance (Lighthouse score > 90)

### Segurança
- [ ] Nenhum dado sensível no código
- [ ] Variáveis de ambiente configuradas
- [ ] HTTPS habilitado

---

## 🏗️ Build da Aplicação

### Build Local de Produção

```bash
# Instalar dependências
npm install

# Criar build de produção
npm run build

# O build será criado na pasta dist/
```

### Verificação do Build

```bash
# Listar arquivos do build
ls -la dist/

# Verificar tamanho do bundle
du -sh dist/

# Preview local do build
npm run preview
```

Acesse [http://localhost:4173](http://localhost:4173) para verificar o build.

### Otimizações Automáticas do Vite

O Vite faz automaticamente:
- Minificação de JavaScript e CSS
- Tree-shaking (remove código não usado)
- Hash de arquivos para cache busting
- Geração de source maps (produção: false)
- Otimização de assets

---

## 🐳 Deploy com Docker

### Criar Dockerfile

Crie um arquivo `Dockerfile` na raiz do projeto:

```dockerfile
# Build stage
FROM node:18-alpine as builder

WORKDIR /app

# Copiar package files
COPY package*.json ./
COPY pnpm-lock.yaml ./

# Instalar dependências
RUN npm ci

# Copiar código fonte
COPY . .

# Criar build
RUN npm run build

# Production stage
FROM nginx:alpine

# Copiar build para nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar configuração nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

### Criar nginx.conf

Crie um arquivo `nginx.conf`:

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    # Enable gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

### Criar .dockerignore

```
node_modules
.git
.gitignore
.env
.env.local
dist
Dockerfile
nginx.conf
.vscode
README.md
docs
```

### Construir e Rodar Docker

```bash
# Construir imagem
docker build -t venture-landing-page .

# Rodar container
docker run -p 80:80 venture-landing-page

# Testar
curl http://localhost
```

### Docker Compose (Opcional)

Crie `docker-compose.yml`:

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "80:80"
    restart: unless-stopped
```

Rodar com Docker Compose:

```bash
docker-compose up -d
```

---

## 🚀 Deploy na Vercel

### Método 1: Integrar com Vercel CLI

1. Instalar Vercel CLI:

```bash
npm install -g vercel
```

2. Fazer login:

```bash
vercel login
```

3. Deploy:

```bash
vercel
```

4. Deploy de produção:

```bash
vercel --prod
```

### Método 2: Integração com Git

1. Acessar [vercel.com](https://vercel.com)
2. Conectar repositório GitHub/GitLab/Bitbucket
3. Configurar:
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Clique em Deploy

### Configurações do Vercel

Crie `vercel.json`:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/dist/$1"
    }
  ]
}
```

### Variáveis de Ambiente no Vercel

1. Acesse Settings → Environment Variables
2. Adicione as variáveis:

```
VITE_API_URL=https://api.venture.com.br
```

### Domínio Customizado

1. Acesse Settings → Domains
2. Adicione seu domínio
3. Configure DNS conforme instruções

---

## 🌐 Deploy na Netlify

### Método 1: Via Interface Web

1. Acesse [netlify.com](https://netlify.com)
2. Arraste a pasta `dist/` para fazer upload

### Método 2: Via Netlify CLI

```bash
# Instalar CLI
npm install -g netlify-cli

# Login
netlify login

# Inicializar
netlify init

# Deploy
netlify deploy --prod
```

### Método 3: Integração Git

1. Conecte repositório no Netlify
2. Configure:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
   - **Branch**: `main`

### netlify.toml

Crie `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "SAMEORIGIN"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "*.png"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "*.jpg"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "*.svg"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
  force = false
```

### Variáveis de Ambiente

No Netlify: Site Settings → Environment Variables

```
VITE_API_URL=https://api.venture.com.br
```

---

## 🔐 Variáveis de Ambiente

### Exemplo de .env.production

```bash
# API Configuration
VITE_API_URL=https://api.venture.com.br

# Analytics (opcional)
VITE_GA_TRACKING_ID=G-XXXXXXXXXX

# Features
VITE_ENABLE_CONTACT_FORM=true
```

### Como Usar no Código

```javascript
const apiUrl = import.meta.env.VITE_API_URL;
console.log(apiUrl); // https://api.venture.com.br
```

### Variáveis em Diferentes Plataformas

#### Vercel

```
Settings → Environment Variables
Adicione: VITE_API_URL = https://api.venture.com.br
```

#### Netlify

```
Site Settings → Environment Variables
Adicione: VITE_API_URL = https://api.venture.com.br
```

#### Docker

```bash
docker run -e VITE_API_URL=https://api.venture.com.br -p 80:80 venture-landing-page
```

---

## 📤 Deploy Manual

### Upload para Servidor

```bash
# Build da aplicação
npm run build

# Comprimir o build
tar -czf dist.tar.gz dist/

# Upload via SCP
scp dist.tar.gz user@server:/var/www/venture/

# No servidor
ssh user@server
cd /var/www/venture
tar -xzf dist.tar.gz
rm dist.tar.gz
```

### Configuração Nginx no Servidor

```nginx
server {
    listen 80;
    server_name venture.com.br www.venture.com.br;

    # Redirect to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name venture.com.br www.venture.com.br;

    # SSL Configuration
    ssl_certificate /etc/ssl/certs/venture.crt;
    ssl_certificate_key /etc/ssl/private/venture.key;

    root /var/www/venture/dist;
    index index.html;

    # Gzip Compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache Static Assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
}
```

### Certificado SSL com Let's Encrypt

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get Certificate
sudo certbot --nginx -d venture.com.br -d www.venture.com.br

# Auto-renewal
sudo certbot renew --dry-run
```

---

## 🔍 Pós-deploy Verificações

### Verificações Imediatas

1. **Acesse a URL de produção**
   ```bash
   curl -I https://venture.com.br
   ```

2. **Verifique HTTP Status**
   - Status: 200 OK
   - Content-Type: text/html
   - Cache headers presentes

3. **Verifique recursos**
   - Carregamento de CSS, JS, imagens
   - Sem erros 404
   - Console do navegador sem erros

4. **Verifique responsividade**
   - Teste em mobile devices
   - Menu mobile funciona
   - Layout não quebra

5. **Verifique SEO**
   - Title tag presente
   - Meta description presente
   - OG tags para redes sociais

### Ferramentas de Teste

#### Lighthouse

```bash
# No Chrome DevTools
# Audits → Run Audit
```

**Metas:**
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 100

#### PageSpeed Insights

Acesse: [https://pagespeed.web.dev](https://pagespeed.web.dev)

#### GTmetrix

Acesse: [https://gtmetrix.com](https://gtmetrix.com)

---

## 📊 Monitoramento e Manutenção

### Análise de Tráfego

**Google Analytics 4**

1. Crie conta no [GA4](https://analytics.google.com/)
2. Adicione código em `index.html`:

```html
<!-- Google Tag Manager -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Uptime Monitoring

Use ferramentas como:
- [UptimeRobot](https://uptimerobot.com)
- [Pingdom](https://pingdom.com)
- [StatusCake](https://statuscake.com)

### Logs de Erros

Configure serviços de logging:
- [Sentry](https://sentry.io) - Error tracking
- [LogRocket](https://logrocket.com) - Session replay

### Atualizações de Segurança

Monitorar dependências:

```bash
# Verificar vulnerabilidades
npm audit

# Atualizar automaticamente
npm audit fix

# Atualizar dependências
npm update
```

---

## 🔄 CI/CD Automatizado

### Deploy Docker com GitHub Actions

O projeto possui uma pipeline automatizada para publicar imagens Docker no GitHub Container Registry (GHCR).

**Documentação completa**: [Pipeline GitHub Actions - Docker Publish](./DOCKER_PIPELINE.md)

**Deploy rápido na VPS**: [Deploy na VPS com Docker](./VPS_DEPLOY.md)

#### Como Funciona

1. Crie uma tag na branch `master`:
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```

2. A pipeline é ativada automaticamente:
   - Build da imagem Docker
   - Push para GHCR (público)
   - Cria tags: `v1.0.0`, `1.0`, `latest`

3. Na VPS, faça pull e deploy:
   ```bash
   docker pull ghcr.io/usuario/venture:v1.0.0
   docker compose up -d
   ```

#### Imagens Publicadas

- `ghcr.io/usuario/venture:latest` - Última versão
- `ghcr.io/usuario/venture:v1.0.0` - Versão específica
- `ghcr.io/usuario/venture:1.0` - Major.minor

> **Nota:** A pipeline só roda quando uma tag é criada na branch `master`.

### Exemplo de GitHub Actions (Vercel)

Crie `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'

      - name: Run Lighthouse CI
        uses: treosh/lighthouse-ci-action@v9
        with:
          urls: |
            https://venture.com.br
          uploadArtifacts: true
          temporaryPublicStorage: true
```

---

## 📞 Suporte em Produção

### Contingência

Se algo der errado:

1. **Reverta para versão anterior**
   ```bash
   # Vercel
   vercel rollback

   # Git
   git revert HEAD
   git push
   ```

2. **Mantenha backup do build**
   ```bash
   # Backup
   cp -r dist dist.backup.$(date +%Y%m%d)
   ```

3. **Documente o incidente**
   - O que aconteceu?
   - Quando?
   - Impacto?
   - Como foi resolvido?

### Release Notes

Mantenha CHANGELOG.md:

```markdown
## [1.0.0] - 2026-01-21

### Added
- Hero section with call to action
- Features section highlighting main benefits
- Responsive navigation
- Contact form

### Changed
- Updated brand colors
- Improved mobile navigation

### Fixed
- Mobile menu z-index issue
- Contact form validation
```

---

**Deploy feito com sucesso! 🎉**

Para dúvidas ou problemas, consulte:
- [Guia de Desenvolvimento](./DEVELOPMENT.md)
- [Arquitetura](./ARCHITECTURE.md)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
