# Contribuindo para o Venture

Obrigado por se interessar em contribuir com o Venture! Este guia fornece instruções sobre como contribuir com o projeto.

---

## 📋 Sumário

- [Código de Conduta](#código-de-conduta)
- [Como Começar](#como-começar)
- [Processo de Desenvolvimento](#processo-de-desenvolvimento)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Padrões de Commit](#padrões-de-commit)
- [Reportando Bugs](#reportando-bugs)
- [Sugerindo Funcionalidades](#sugerindo-funcionalidades)

---

## 🤝 Código de Conduta

- Seja respeitoso com todos os membros da comunidade
- Forneça feedback construtivo
- Aceite críticas com elegância
- Foque no que é melhor para a comunidade
- Mostre empatia com outros membros do projeto

---

## 🚀 Como Começar

### 1. Preparação

```bash
# Fork o repositório
# Clone seu fork
git clone https://github.com/seu-usuario/landing-page.git
cd landing-page

# Adicione o repositório original como upstream
git remote add upstream https://github.com/venture/landing-page.git

# Instale as dependências
npm install
```

### 2. Configure seu ambiente

- Configure seu editor de código (recomendado: VS Code)
- Instale as extensões recomendadas
- Configure as configurações do ESLint e Prettier
- Configure o Git

```bash
# Configure seu nome e email do Git
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

### 3. Crie uma branch

```bash
# Certifique-se de estar na branch main
git checkout main

# Atualize com o upstream
git pull upstream main

# Crie uma nova branch
git checkout -b feature/nome-da-feature
```

---

## 🔄 Processo de Desenvolvimento

### 1. Faça suas alterações

```bash
# Faça as alterações no código
# Use comandos do git para rastrear mudanças
git status
git add .
```

### 2. Teste suas alterações

```bash
# Execute o servidor de desenvolvimento
npm run dev

# Teste as mudanças visualmente
# Teste em múltiplos tamanhos de tela
# Teste em múltiplos browsers

# Execute o linter
npm run lint

# Execute o build para garantir que funciona
npm run build
```

### 3. Faça commits

```bash
# Faça commits frequentes com mensagens descritivas
git commit -m "feat: add contact form section"
git commit -m "fix: resolve mobile menu z-index issue"
git commit -m "docs: update installation instructions"
```

### 4. Sincronize com o upstream

```bash
# Busque as últimas mudanças
git fetch upstream

# Rebase suas mudanças em cima do main atual
git rebase upstream/main
```

### 5. Push para o seu fork

```bash
git push origin feature/nome-da-feature
```

### 6. Crie um Pull Request

- Acesse a página do repositório no GitHub
- Clique em "New Pull Request"
- Selecione sua branch
- Adicione uma descrição detalhada
- Aguarde o review

---

## 📝 Pull Request Guidelines

### Antes de Abrir um PR

- [ ] O código segue os padrões do projeto
- [ ] Os commits seguem as convenções de mensagem
- [ ] A branch está sincronizada com o upstream
- [ ] Não há conflitos de merge
- [ ] O build passa sem erros
- [ ] O linting passa
- [ ] As mudanças foram testadas visualmente
- [ ] A documentação foi atualizada (se necessário)

### Descrição do PR

Use o seguinte template:

```markdown
## Tipo de Mudança
- [ ] Bug fix (correção não-breaking)
- [ ] New feature (funcionalidade não-breaking)
- [ ] Breaking change (correção ou funcionalidade que quebra compatibilidade)
- [ ] Documentation (apenas documentação)
- [ ] Performance (melhoria de performance)
- [ ] Refactoring (refatoração de código)

## Descrição
Breve descrição das mudanças feitas.

## Por que esta mudança é necessária?
Explique o problema que está sendo resolvido ou a razão para a funcionalidade.

## Como ela implementa a solução?
Descreva brevemente como a solução foi implementada.

## Screenshots (se aplicável)
Adicione screenshots ou GIFs demonstrando as mudanças.

## Checklist
- [ ] Meu código segue os padrões de estilo do projeto
- [ ] Fiz o auto-formatting com Prettier
- [ ] Executei `npm run lint` sem erros
- [ ] Executei `npm run build` com sucesso
- [ ] Testei as mudanças em múltiplos browsers
- [ ] Testei as mudanças em dispositivos mobile
- [ ] Atualizei a documentação (se necessário)

## Issue Relacionada
Closes #123 (se aplicável)

## Comentários Adicionais
Qualquer informação adicional relevante.
```

### Após Submeter

- Aguarde o review dos mantenedores
- Responda aos comentários de forma construtiva
- Faça as alterações solicitadas
- Seja paciente durante o processo de review

---

## 📐 Padrões de Commit

Use [Conventional Commits](https://www.conventionalcommits.org/):

### Estrutura

```
<tipo>(<escopo>): <descrição>

[opcional corpo]

[opcional footer]
```

### Tipos

| Tipo | Descrição |
|------|-----------|
| `feat` | Nova funcionalidade |
| `fix` | Correção de bug |
| `docs` | Mudanças na documentação |
| `style` | Formatação, ponto-e-vírgula, etc (sem mudança de código) |
| `refactor` | Refatoração de código |
| `perf` | Melhoria de performance |
| `test` | Adição ou modificação de testes |
| `chore` | Mudanças no processo de build, ferramentas, etc |
| `ci` | Mudanças na configuração de CI |
| `build` | Mudanças no sistema de build |
| `revert` | Revert de um commit anterior |

### Exemplos

```bash
# Funcionalidade
git commit -m "feat(hero): add call-to-action button"

# Bug fix
git commit -m "fix(navigation): resolve mobile menu overlap issue"

# Documentação
git commit -m "docs(readme): update installation instructions"

# Refatoração
git commit -m "refactor(components): extract Button component"

# Performance
git commit -m "perf(images): optimize hero image size"

# Breaking change
git commit -m "feat(api): change contact form endpoint

BREAKING CHANGE: The contact form endpoint has changed from /api/contact to /api/v1/contact"
```

---

## 🐛 Reportando Bugs

### Antes de Reportar

- [ ] Verifique se o bug já foi reportado
- [ ] Confirme que o bug não é causado pelo seu ambiente local
- [ ] Teste na versão mais recente do projeto

### Template de Bug Report

```markdown
## Descrição do Bug
Breve descrição clara e concisa do bug.

## Passos para Reproduzir
1. Vá para '...'
2. Clique em '....'
3. Role para '....'
4. Veja o erro

## Comportamento Esperado
Descrição clara e concisa do que você esperava que acontecesse.

## Screenshots
Se aplicável, adicione screenshots para ajudar a explicar o problema.

## Ambiente
- OS: [e.g. Windows 10, macOS 13, Ubuntu 22.04]
- Browser: [e.g. Chrome 120, Firefox 120, Safari 17]
- Node.js version: [e.g. 18.19.0]
- Project version: [e.g. 1.0.0]

## Logs do Console
Copie e cole os logs do console do navegador aqui.

## Contexto Adicional
Adicione qualquer outro contexto sobre o problema aqui.
```

---

## 💡 Sugerindo Funcionalidades

### Template de Feature Request

```markdown
## Título da Funcionalidade
Breve descrição da funcionalidade.

## Descrição Detalhada
Descrição clara e concisa do que você quer que aconteça.

## Por que esta funcionalidade é necessária?
Explique o problema que está sendo resolvido ou o benefício.

## Solução Proposta
Descreva como você imagina que a funcionalidade seja implementada.

## Alternativas Consideradas
Descreva quaisquer soluções alternativas que você considerou.

## Informações Adicionais
Adicione qualquer outro contexto, screenshots ou exemplos.
```

---

## 📚 Recursos para Contribuidores

### Documentação

- [Guia de Desenvolvimento](docs/DEVELOPMENT.md)
- [Arquitetura](docs/ARCHITECTURE.md)
- [Guia de Deploy](docs/DEPLOYMENT.md)
- [Índice da Documentação](docs/INDEX.md)

### Ferramentas

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Padrões e Melhores Práticas

- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)

---

## ❓ Perguntas Frequentes

### Posso contribuir sem saber codar?

Sim! Você pode contribuir de várias formas:
- Reportando bugs
- Sugerindo melhorias
- Melhorando a documentação
- Traduzindo conteúdo
- Design e UX
- Testando funcionalidades

### Como obtenho permissão para commit?

Contribuidores ativos podem ser adicionados como colaboradores após contribuições consistentes de qualidade.

### Posso trabalhar em qualquer issue?

Sinta-se à vontade para trabalhar em issues sem "in progress", mas deixe um comentário para indicar que você está trabalhando nelas.

### O que fazer se meu PR for rejeitado?

Não desanime! Pergunte por que foi rejeitado e como pode melhorar. Os mantenedores estão aqui para ajudar.

---

## 🏆 Reconhecimento

Os contribuidores serão reconhecidos no arquivo [CONTRIBUTORS.md](CONTRIBUTORS.md) (se aplicável) e nos changelogs de release.

---

## 📧 Contato

Se você tiver dúvidas sobre como contribuir, pode:

- Abrir uma issue no GitHub
- Entrar em contato com os mantenedores
- Participar das discussões em Pull Requests

---

**Obrigado por contribuir com o Venture! 🎉**

---

*Última atualização: 21 de Janeiro de 2026*
