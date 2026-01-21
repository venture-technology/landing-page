# Deploy na VPS com Docker

Guia rápido para fazer deploy da aplicação Venture na VPS usando a imagem do GitHub Container Registry.

## 🚀 Deploy Rápido (3 Passos)

### 1️⃣ Login no GHCR

```bash
echo $GITHUB_TOKEN | docker login ghcr.io -u SEU_USUARIO_GITHUB --password-stdin
```

> 💡 Você precisa de um GitHub Personal Access Token com permissão `read:packages`
> Crie em: https://github.com/settings/tokens

### 2️⃣ Pull da Imagem

```bash
# Pull da versão mais recente
docker pull ghcr.io/SEU_USUARIO/venture:latest
```

### 3️⃣ Rodar com Docker Compose

Crie `docker-compose.yml`:

```yaml
version: '3.8'

services:
  web:
    image: ghcr.io/SEU_USUARIO/venture:latest
    container_name: venture
    ports:
      - "80:8080"
    restart: unless-stopped
```

Execute:

```bash
docker compose up -d
```

Pronto! 🎉 A aplicação estará disponível em http://SEU_IP_PUBLICO ou http://SEU_DOMINIO

---

## 📦 Versões Disponíveis

Use qualquer uma destas tags:

```bash
ghcr.io/SEU_USUARIO/venture:latest          # Última versão
ghcr.io/SEU_USUARIO/venture:v1.0.0          # Versão específica
ghcr.io/SEU_USUARIO/venture:1.0             # Major.minor
```

---

## 🔄 Atualizar para Nova Versão

Quando uma nova tag for publicada:

```bash
# Pull da nova versão
docker pull ghcr.io/SEU_USUARIO/venture:v1.0.1

# Atualizar o docker-compose.yml com a nova versão
# Ou usar latest e simplesmente fazer pull novamente

# Recriar o container
docker compose up -d --force-recreate
```

---

## 🛠️ Comandos Úteis

```bash
# Ver logs em tempo real
docker compose logs -f

# Parar a aplicação
docker compose down

# Verificar status dos containers
docker ps

# Verificar uso de recursos
docker stats
```

---

## 🌐 Configurar Domínio (Opcional)

### Com Nginx Proxy Manager

1. Configure o proxy para apontar para `localhost:8080`
2. Configure SSL automático (Let's Encrypt)

### Com Nginx Manualmente

```nginx
server {
    listen 80;
    server_name seu-dominio.com.br;

    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

---

## 🔒 Imagem Pública

A imagem Docker é **pública** no GitHub Container Registry, o que significa:
- ✅ Qualquer pessoa pode fazer pull sem autenticação
- ✅ Não há necessidade de expor credenciais
- ✅ Pull é rápido e direto

Autenticação é necessária **apenas** para fazer push de novas versões.

---

## 📝 Exemplo Completo de docker-compose.yml

```yaml
version: '3.8'

services:
  venture-web:
    image: ghcr.io/SEU_USUARIO/venture:latest
    container_name: venture
    ports:
      - "80:8080"
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8080/"]
      interval: 30s
      timeout: 3s
      retries: 3
      start_period: 5s
```

---

## 🆘 Problemas Comuns

### Erro: "unauthorized: authentication required"

**Solução:** Você precisa de um GitHub Personal Access Token. Crie um em https://github.com/settings/tokens com permissão `read:packages`.

### Container não inicia

**Verifique:**
```bash
# Ver logs
docker compose logs venture

# Ver se a porta 80 já está em uso
sudo netstat -tulpn | grep :80
```

### Não consigo acessar a aplicação

**Verifique:**
1. Se o firewall está permitindo a porta 80
2. Se o container está rodando: `docker ps`
3. Se o port forwarding está correto: `docker compose ps`

---

## 📚 Documentação Adicional

- [Pipeline GitHub Actions](./DOCKER_PIPELINE.md) - Como funciona a publicação automática
- [Docker Setup](../DOCKER_SETUP.md) - Configuração completa do Docker
