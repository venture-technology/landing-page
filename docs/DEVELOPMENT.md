# Guia de Desenvolvimento

Este guia fornece instruções detalhadas para desenvolver a landing page do Venture.

---

## 📋 Índice

- [Configuração do Ambiente](#configuração-do-ambiente)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Adicionar Novas Seções](#como-adicionar-novas-seções)
- [Como Criar Novos Componentes](#como-criar-novos-componentes)
- [Padrões de Código](#padrões-de-código)
- [Convenções de Nomeamento](#convenções-de-nomeamento)
- [Como Testar Mudanças](#como-testar-mudanças)
- [Linting e Formatação](#linting-e-formatação)
- [Git Workflow](#git-workflow)

---

## 🔧 Configuração do Ambiente

### Instalação de Dependências

```bash
npm install
```

### IDE Recomendada

**VS Code** com as seguintes extensões:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)

### Configuração do VS Code

Crie `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ],
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true
}
```

---

## 📁 Estrutura do Projeto

### Visão Geral

```
src/
├── assets/           # Recursos estáticos
├── components/       # Componentes reutilizáveis
│   ├── ui/          # Componentes UI genéricos (Button, Input, etc.)
│   ├── sections/    # Seções da landing page (Hero, Features, etc.)
│   └── layout/      # Layout components (Header, Footer)
├── hooks/           # Custom hooks
├── lib/             # Utilidades e helpers
├── styles/          # Estilos globais e configurações
├── App.jsx          # Componente principal
└── main.jsx         # Entry point
```

### Organização por Funcionalidade

Organize componentes por funcionalidade para facilitar a manutenção:

```
components/
├── features/
│   ├── SchoolsSection/       # Seção para escolas
│   │   ├── index.jsx
│   │   └── SchoolsSection.module.css (opcional)
│   ├── ParentsSection/       # Seção para responsáveis
│   └── DriversSection/      # Seção para motoristas
└── shared/
    ├── Button/
    ├── Card/
    └── SectionTitle/
```

---

## ➕ Como Adicionar Novas Seções

### Passo 1: Criar o Componente da Seção

Crie um novo arquivo em `src/components/sections/`:

```jsx
// src/components/sections/NewSection/index.jsx
import React from 'react';

const NewSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Nova Seção
        </h2>
        <p className="text-gray-600 text-center">
          Conteúdo da nova seção
        </p>
      </div>
    </section>
  );
};

export default NewSection;
```

### Passo 2: Adicionar ao App Principal

Importe e adicione a nova seção em `src/App.jsx`:

```jsx
import NewSection from './components/sections/NewSection';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <NewSection /> {/* Nova seção adicionada */}
      <Footer />
    </div>
  );
}

export default App;
```

### Passo 3: Adicionar Estilos Tailwind

Use classes utilitárias do Tailwind para estilizar:

```jsx
<section className="py-20 bg-white">
  {/* py-20: padding vertical de 5rem */}
  {/* bg-white: fundo branco */}
</section>
```

---

## 🧩 Como Criar Novos Componentes

### Componente Simples

```jsx
// src/components/Button/index.jsx
import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-200';

  const variants = {
    primary: 'bg-brand-primary text-white hover:bg-brand-primary-dark',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    outline: 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
```

### Componente com Hooks

```jsx
// src/components/ScrollToTop/index.jsx
import React, { useEffect } from 'react';

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return null;
};

export default ScrollToTop;
```

### Componente com Props Tipadas (TypeScript)

```tsx
// src/components/Card/index.tsx
import React from 'react';

interface CardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, description, icon, className }) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md ${className}`}>
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {description && <p className="text-gray-600">{description}</p>}
    </div>
  );
};

export default Card;
```

---

## 📐 Padrões de Código

### Regras do React

1. **Components como funções**: Use Functional Components com Hooks
2. **Props destructuring**: Desestruture props sempre que possível
3. **Props defaults**: Defina valores padrão para props opcionais
4. **Evite prop drilling**: Use Context API para estados globais

```jsx
// ✅ Bom
const Card = ({ title, description = '' }) => {
  return <div>{title}</div>;
};

// ❌ Ruim
const Card = (props) => {
  return <div>{props.title}</div>;
};
```

### Padrões do Tailwind CSS

1. **Use classes utilitárias**: Evite CSS customizado sempre que possível
2. **Responsividade**: Use prefixos mobile-first (`md:`, `lg:`)
3. **Cores da marca**: Use variáveis CSS ou adicione ao Tailwind config

```jsx
// ✅ Bom - Tailwind
<div className="flex flex-col md:flex-row gap-4">

// ❌ Ruim - CSS customizado
<div style={{ display: 'flex', flexDirection: 'column' }}>
```

### Estado e Efeitos

```jsx
// ✅ Bom - useState para estado local
const [isOpen, setIsOpen] = useState(false);

// ✅ Bom - useEffect para efeitos colaterais
useEffect(() => {
  // Código do efeito
  return () => {
    // Cleanup
  };
}, [dependency]);
```

---

## 🏷️ Convenções de Nomeamento

### Arquivos

- **Componentes**: PascalCase (`Hero.jsx`, `Button/index.jsx`)
- **Hooks**: camelCase com prefixo 'use' (`useScroll.js`)
- **Utilidades**: camelCase (`formatDate.js`)
- **Constantes**: UPPER_SNAKE_CASE (`API_BASE_URL.js`)
- **Tipos (TS)**: PascalCase (`UserTypes.ts`)

### Variáveis e Funções

```javascript
// ✅ Bom - camelCase
const user = { name: 'John' };
const isActive = true;
const handleClick = () => {};
const fetchUserData = async () => {};

// ❌ Ruim
const User = { name: 'John' };
const active = true;
const click = () => {};
```

### Componentes

```jsx
// ✅ Bom - PascalCase
const UserProfile = () => {};
const NavigationBar = () => {};

// ❌ Ruim
const userProfile = () => {};
const navigation_bar = () => {};
```

### Classes CSS (Tailwind)

```jsx
// ✅ Bom - Use classes utilitárias
<div className="flex items-center justify-between">

// ❌ Ruim - Evite CSS customizado
<div className="custom-flex">
```

---

## 🧪 Como Testar Mudanças

### Testes Visuais

1. **Desenvolvimento interativo**:
   ```bash
   npm run dev
   ```
   - Abra [http://localhost:5173](http://localhost:5173)
   - O hot reload atualiza a página automaticamente

2. **Verifique em múltiplos tamanhos de tela**:
   - Use DevTools do navegador (F12) para testar responsividade
   - Teste em mobile (375px, 768px), tablet (1024px) e desktop (1440px+)

3. **Teste cross-browser**:
   - Chrome/Edge (Chromium)
   - Firefox
   - Safari (se disponível)

### Testes de Acessibilidade

- Use WAVE ou axe DevTools extension
- Verifique contraste de cores
- Teste navegação por teclado

### Build de Produção

Antes de commitar, teste o build:

```bash
# Build
npm run build

# Preview do build
npm run preview
```

---

## 🔍 Linting e Formatação

### ESLint

Execute o linter para verificar o código:

```bash
npm run lint
```

Corrigir problemas automaticamente:

```bash
npm run lint -- --fix
```

### Prettier

Formatar todos os arquivos:

```bash
npm run format
```

Configuração recomendada do Prettier (`.prettierrc`):

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": false,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "arrowParens": "always",
  "endOfLine": "lf"
}
```

---

## 🔄 Git Workflow

### Branch Naming Convention

```bash
feature/nome-da-feature       # Nova funcionalidade
fix/nome-do-bug              # Correção de bug
docs/nome-da-atualizacao     # Documentação
refactor/nome-da-refatoracao # Refatoração
style/nome-do-ajuste         # Ajustes de estilo
chore/nome-da-tarefa         # Tarefas de manutenção
```

### Commit Message Convention

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
<tipo>(<escopo>): <descrição>

[opcional corpo]

[opcional footer]
```

**Tipos:**
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Mudanças na documentação
- `style`: Formatação, ponto-e-vírgula, etc (sem mudança de código)
- `refactor`: Refatoração de código
- `perf`: Melhoria de performance
- `test`: Adição ou modificação de testes
- `chore`: Mudanças no processo de build, ferramentas, etc

**Exemplos:**

```bash
git commit -m "feat: add contact form section"
git commit -m "fix: correct mobile menu z-index"
git commit -m "docs: update README with new features"
git commit -m "style: format code with prettier"
```

### Pull Request Checklist

Antes de abrir um PR:

- [ ] Código segue os padrões do projeto
- [ ] Commits seguem a convenção de mensagens
- [ ] Branch está atualizada com `main`
- [ ] Sem conflitos de merge
- [ ] Build passa sem erros
- [ ] Linting passa
- [ ] Testado visualmente em múltiplos tamanhos de tela
- [ ] Testado em múltiplos browsers
- [ ] Documentação atualizada (se necessário)

---

## 📚 Recursos Úteis

### React
- [React Documentation](https://react.dev/)
- [React Hooks Cheatsheet](https://usehooks.com/)

### Tailwind CSS
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Tailwind UI Components](https://tailwindui.com/)

### Vite
- [Vite Documentation](https://vitejs.dev/)

### TypeScript
- [TypeScript Documentation](https://www.typescriptlang.org/)

---

## ❓ Perguntas Frequentes

### Como adicionar uma nova cor ao Tailwind?

Edite `tailwind.config.js`:

```js
export default {
  theme: {
    extend: {
      colors: {
        'venture-brand': '#hex-code',
      }
    }
  }
}
```

### Como fazer uma animação suave?

Use Tailwind transition:

```jsx
<div className="transition-all duration-300 ease-in-out hover:scale-105">
  Conteúdo
</div>
```

### Como criar um scroll suave?

Adicione ao CSS global:

```css
html {
  scroll-behavior: smooth;
}
```

---

**Desenvolvido com ❤️ pela equipe Venture**
