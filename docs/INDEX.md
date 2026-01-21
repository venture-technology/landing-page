# Índice da Documentação

Bem-vindo à documentação da Landing Page do Venture. Este projeto é uma aplicação web moderna e otimizada desenvolvida com React, Vite e Tailwind CSS.

---

## 📚 Documentação Disponível

### 🏠 [README.md](../README.md)
Visão geral do projeto, instruções de instalação e início rápido.

**Conteúdo:**
- Descrição do Venture
- Stack tecnológica
- Pré-requisitos
- Como rodar o projeto
- Scripts disponíveis
- Estrutura de pastas

**Para quem é:** Novos desenvolvedores que querem começar a trabalhar no projeto.

---

### 🔨 [DEVELOPMENT.md](./DEVELOPMENT.md)
Guia completo de desenvolvimento com padrões e melhores práticas.

**Conteúdo:**
- Configuração do ambiente de desenvolvimento
- Como adicionar novas seções
- Como criar novos componentes
- Padrões de código
- Convenções de nomeamento
- Git workflow
- Ferramentas úteis

**Para quem é:** Desenvolvedores que estão ativamente contribuindo no código.

---

### 🚀 [DEPLOYMENT.md](./DEPLOYMENT.md)
Guia de deploy para produção com múltiplas opções.

**Conteúdo:**
- Pré-deploy checklist
- Build da aplicação
- Deploy com Docker
- Deploy na Vercel
- Deploy na Netlify
- Variáveis de ambiente
- CI/CD automatizado
- Monitoramento e manutenção

**Para quem é:** DevOps e desenvolvedores responsáveis pelo deploy em produção.

---

### 🏗️ [ARCHITECTURE.md](./ARCHITECTURE.md)
Documentação detalhada da arquitetura técnica.

**Conteúdo:**
- Visão geral da arquitetura
- Stack tecnológica detalhada
- Estrutura de componentes
- Fluxo de dados
- Design system completo
- Decisões arquiteturais
- Padrões de código
- Performance
- Acessibilidade
- Segurança

**Para quem é:** Desenvolvedores que querem entender profundamente como o sistema funciona.

---

## 🚀 Começando Rápido

### 1. Instalação

```bash
# Clone o repositório
git clone <repository-url>
cd landing-page

# Instale as dependências
npm install
```

### 2. Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev

# Acesse http://localhost:5173
```

### 3. Build para Produção

```bash
# Crie o build de produção
npm run build

# Preview do build
npm run preview
```

---

## 📖 Por Onde Começar?

### Novo Desenvolvedor

1. Comece pelo [README.md](../README.md) para entender o projeto
2. Leia o [DEVELOPMENT.md](./DEVELOPMENT.md) para aprender como desenvolver
3. Configure seu ambiente local
4. Faça sua primeira contribuição!

### Desenvolvedor Ativo

1. Consulte [DEVELOPMENT.md](./DEVELOPMENT.md) para padrões e convenções
2. Use [ARCHITECTURE.md](./ARCHITECTURE.md) para entender a estrutura
3. Siga o workflow de Git do [DEVELOPMENT.md](./DEVELOPMENT.md)

### Responsável pelo Deploy

1. Leia [DEPLOYMENT.md](./DEPLOYMENT.md) completamente
2. Configure as variáveis de ambiente
3. Escolha e configure a plataforma de deploy (Vercel, Netlify, Docker)
4. Configure CI/CD automatizado

### Quem Quer Entender o Sistema

1. Comece pela visão geral no [README.md](../README.md)
2. Leia [ARCHITECTURE.md](./ARCHITECTURE.md) para entender a arquitetura
3. Consulte [DEVELOPMENT.md](./DEVELOPMENT.md) para detalhes de implementação

---

## 🎯 Conceitos Principais

### Design System

O Venture segue um design moderno e minimalista:

- **Background**: 90% branco para clareza e leveza
- **Cor Primária**: Verde vibrante (extraído do logo)
- **Cor Secundária**: Preto para textos e detalhes
- **Tipografia**: Inter (sans-serif moderna)

Veja mais em [ARCHITECTURE.md - Design System](./ARCHITECTURE.md#design-system)

### Arquitetura de Componentes

A aplicação segue uma arquitetura de componentes organizada por funcionalidade:

```
components/
├── layout/       # Header, Footer, etc.
├── sections/     # Hero, Features, etc.
└── ui/          # Componentes reutilizáveis
```

Veja mais em [ARCHITECTURE.md - Estrutura de Componentes](./ARCHITECTURE.md#estrutura-de-componentes)

### Performance

A aplicação é otimizada para performance máxima:

- Build otimizado com Vite
- Code splitting automático
- Lazy loading de componentes
- Imagens otimizadas (WebP)
- CSS purging (Tailwind)

Veja mais em [ARCHITECTURE.md - Performance](./ARCHITECTURE.md#performance)

---

## 🔧 Tecnologias Principais

| Tecnologia | Versão | Propósito | Docs |
|------------|--------|-----------|------|
| React | 18.x | Biblioteca UI | [react.dev](https://react.dev/) |
| Vite | 5.x | Build tool | [vitejs.dev](https://vitejs.dev/) |
| Tailwind CSS | 3.4.x | CSS framework | [tailwindcss.com](https://tailwindcss.com/) |
| TypeScript | 5.x | Type safety (opcional) | [typescriptlang.org](https://www.typescriptlang.org/) |

---

## 📝 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Inicia servidor de desenvolvimento
npm run build            # Cria build de produção
npm run preview          # Preview do build de produção

# Code Quality
npm run lint             # Verifica código com ESLint
npm run format           # Formata código com Prettier

# Docker (se configurado)
docker-compose up        # Sobe container Docker
docker-compose down      # Para container Docker
```

---

## ❓ Perguntas Frequentes

### Como adiciono uma nova seção?

Consulte [DEVELOPMENT.md - Como Adicionar Novas Seções](./DEPLOYMENT.md#como-adicionar-novas-seções)

### Como faço deploy na Vercel?

Consulte [DEPLOYMENT.md - Deploy na Vercel](./DEPLOYMENT.md#deploy-na-vercel)

### Qual é a estrutura de componentes?

Consulte [ARCHITECTURE.md - Estrutura de Componentes](./ARCHITECTURE.md#estrutura-de-componentes)

### Como configuro o Tailwind CSS?

Consulte [ARCHITECTURE.md - Design System](./ARCHITECTURE.md#design-system)

---

## 🤝 Contribuindo

Quer contribuir com o projeto? Consulte:

- **[DEVELOPMENT.md](./DEVELOPMENT.md)** - Guia completo de contribuição
- **[README.md](../README.md)** - Visão geral e primeiros passos

### Checklist de Contribuição

Antes de abrir um Pull Request:

- [ ] Código segue os padrões do projeto
- [ ] Commits seguem a convenção de mensagens
- [ ] Linting passa sem erros
- [ ] Build funciona corretamente
- [ ] Testado visualmente em múltiplos tamanhos de tela
- [ ] Documentação atualizada (se necessário)

---

## 📞 Suporte

Se você encontrar problemas ou tiver dúvidas:

1. Consulte a documentação apropriada
2. Verifique issues existentes no repositório
3. Abra uma nova issue se necessário

---

## 📚 Recursos Externos

### React
- [React Documentation](https://react.dev/)
- [React Hooks Cheatsheet](https://usehooks.com/)

### Vite
- [Vite Documentation](https://vitejs.dev/)
- [Vite Guide](https://vitejs.dev/guide/)

### Tailwind CSS
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Tailwind UI](https://tailwindui.com/)

### TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TypeScript Cheatsheet](https://www.typescriptlang.org/docs/handbook/cheatsheet.html)

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](../LICENSE) para detalhes.

---

**Última atualização:** 21 de Janeiro de 2026

---

Desenvolvido com ❤️ pela equipe Venture
