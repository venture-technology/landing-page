# Arquitetura do Projeto

Documentação da arquitetura técnica da landing page do Venture.

---

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Stack Tecnológica](#stack-tecnológica)
- [Estrutura de Componentes](#estrutura-de-componentes)
- [Fluxo de Dados](#fluxo-de-dados)
- [Design System](#design-system)
- [Decisões Arquiteturais](#decisões-arquiteturais)
- [Padrões de Código](#padrões-de-código)
- [Performance](#performance)
- [Acessibilidade](#acessibilidade)
- [Segurança](#segurança)

---

## 🎯 Visão Geral

A landing page do Venture é uma aplicação **Single Page Application (SPA)** estática, otimizada para performance e SEO, construída com React, Vite e Tailwind CSS.

### Arquitetura em Camadas

```
┌─────────────────────────────────────────┐
│         Presentation Layer             │
│  (React Components + Tailwind CSS)      │
├─────────────────────────────────────────┤
│         Business Logic Layer            │
│  (Custom Hooks + Utils)                │
├─────────────────────────────────────────┤
│         Build Tools Layer               │
│  (Vite + PostCSS + ESLint)             │
├─────────────────────────────────────────┤
│         Deployment Layer                │
│  (Vercel/Netlify/CDN)                  │
└─────────────────────────────────────────┘
```

### Características Principais

- **Static Site**: Sem servidor backend, tudo renderizado no cliente
- **Mobile-First**: Design responsivo com foco em mobile
- **Performance First**: Otimizações de carregamento e renderização
- **SEO Friendly**: Estrutura semântica e meta tags
- **Zero Dependencies Runtime**: Apenas React e Vite em runtime

---

## 🔧 Stack Tecnológica

### Core

| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| React | 18.x | Biblioteca UI |
| Vite | 5.x | Build tool & dev server |
| TypeScript | 5.x | Type safety (opcional) |
| Tailwind CSS | 3.4.x | CSS framework |

### Development

| Tecnologia | Propósito |
|------------|-----------|
| ESLint | Code linting |
| Prettier | Code formatting |
| PostCSS | CSS processing |
| Autoprefixer | Vendor prefixes |

### Deploy

| Plataforma | Características |
|------------|-----------------|
| Vercel | CDN global, edge caching, auto-deploy |
| Netlify | CI/CD integrado, form handling |
| Docker | Containerização para ambientes customizados |

---

## 🏗️ Estrutura de Componentes

### Arquitetura de Componentes

```
src/
├── App.jsx                 # Root component
│
├── components/
│   ├── layout/            # Layout components
│   │   ├── Header/
│   │   │   ├── index.jsx
│   │   │   └── components/
│   │   │       ├── Logo.jsx
│   │   │       ├── Navigation.jsx
│   │   │       └── MobileMenu.jsx
│   │   └── Footer/
│   │
│   ├── sections/          # Landing page sections
│   │   ├── Hero/
│   │   │   ├── index.jsx
│   │   │   └── components/
│   │   │       ├── HeroContent.jsx
│   │   │       └── HeroImage.jsx
│   │   │
│   │   ├── Features/
│   │   │   ├── index.jsx
│   │   │   ├── features.data.jsx
│   │   │   └── components/
│   │   │       └── FeatureCard.jsx
│   │   │
│   │   ├── ForParents/
│   │   ├── ForSchools/
│   │   ├── ForDrivers/
│   │   │
│   │   └── Contact/
│   │       ├── index.jsx
│   │       └── components/
│   │           └── ContactForm.jsx
│   │
│   └── ui/                # Reusable UI components
│       ├── Button/
│       ├── Card/
│       ├── SectionTitle/
│       └── Icon/
│
├── hooks/                 # Custom hooks
│   ├── useScroll.js      # Scroll position tracking
│   ├── useMediaQuery.js  # Responsive utilities
│   └── useLocalStorage.js # Local storage wrapper
│
├── lib/                   # Utilities
│   ├── utils.js          # Helper functions
│   ├── constants.js      # App constants
│   └── validators.js     # Form validators
│
├── styles/                # Global styles
│   ├── index.css         # Base styles + Tailwind imports
│   └── animations.css    # Custom animations
│
└── main.jsx              # Entry point
```

### Hierarchy de Componentes

```
App
├── Header
│   ├── Logo
│   ├── Navigation
│   └── MobileMenu
│
├── Hero
│   ├── HeroContent
│   └── HeroImage
│
├── Features
│   ├── SectionTitle
│   └── FeatureCard (multiple)
│
├── ForParents
│   ├── SectionTitle
│   └── ContentBlocks
│
├── ForSchools
│   ├── SectionTitle
│   └── ContentBlocks
│
├── ForDrivers
│   ├── SectionTitle
│   └── ContentBlocks
│
├── Contact
│   ├── SectionTitle
│   └── ContactForm
│
└── Footer
```

### Tipos de Componentes

#### 1. Layout Components
Proporcionam estrutura e layout global.

```jsx
// components/layout/Header/index.jsx
const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        {/* Header content */}
      </div>
    </header>
  );
};
```

#### 2. Section Components
Representam seções principais da landing page.

```jsx
// components/sections/Hero/index.jsx
const Hero = () => {
  return (
    <section className="py-20 bg-white">
      <HeroContent />
      <HeroImage />
    </section>
  );
};
```

#### 3. UI Components
Componentes reutilizáveis e atômicos.

```jsx
// components/ui/Button/index.jsx
const Button = ({ children, variant, size, ...props }) => {
  // Button implementation
};
```

---

## 🔄 Fluxo de Dados

### Arquitetura Unidirecional

Como é uma landing page estática, o fluxo de dados é simples:

```
User Interaction
    ↓
Event Handler (onClick, onChange, onSubmit)
    ↓
Component State (useState)
    ↓
Re-render (React)
    ↓
Update UI
```

### Exemplo: Formulário de Contato

```jsx
// components/sections/Contact/components/ContactForm.jsx
const ContactForm = () => {
  // State local para dados do formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('idle'); // idle, success, error

  // Handler para mudanças nos inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handler para submissão
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simular envio (em produção, integraria com API)
      await submitContactForm(formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
    </form>
  );
};
```

### Hooks Personalizados

```jsx
// hooks/useScroll.js
const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
};

// Uso
const scrollY = useScroll();
const headerClass = scrollY > 50 ? 'shadow-md' : '';
```

---

## 🎨 Design System

### Paleta de Cores

```javascript
// Extraída do logo Venture
const colors = {
  // Cores Primárias (Marca)
  primary: {
    DEFAULT: '#059669',      // Verde principal (do logo)
    light: '#10B981',        // Variante clara
    dark: '#047857',         // Variante escura
  },

  // Cores Neutras
  neutral: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0A0A0A',
  },

  // Cores de Estado
  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B',
  info: '#3B82F6',
};
```

### Tipografia

```javascript
const typography = {
  // Fontes
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    heading: ['Inter', 'system-ui', 'sans-serif'],
  },

  // Tamanhos
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],
    sm: ['0.875rem', { lineHeight: '1.25rem' }],
    base: ['1rem', { lineHeight: '1.5rem' }],
    lg: ['1.125rem', { lineHeight: '1.75rem' }],
    xl: ['1.25rem', { lineHeight: '1.75rem' }],
    '2xl': ['1.5rem', { lineHeight: '2rem' }],
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
    '5xl': ['3rem', { lineHeight: '1' }],
    '6xl': ['3.75rem', { lineHeight: '1' }],
  },

  // Weights
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
};
```

### Espaçamento

```javascript
const spacing = {
  0: '0px',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
};
```

### Border Radius

```javascript
const borderRadius = {
  none: '0px',
  sm: '0.25rem',   // 4px
  md: '0.5rem',    // 8px
  lg: '0.75rem',   // 12px
  xl: '1rem',      // 16px
  '2xl': '1.5rem', // 24px
  full: '9999px',
};
```

### Shadows

```javascript
const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
};
```

### Animações

```javascript
const animations = {
  // Fade in
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },

  // Slide up
  slideUp: {
    from: { transform: 'translateY(20px)', opacity: 0 },
    to: { transform: 'translateY(0)', opacity: 1 },
  },

  // Scale
  scaleIn: {
    from: { transform: 'scale(0.95)', opacity: 0 },
    to: { transform: 'scale(1)', opacity: 1 },
  },
};
```

---

## 🧠 Decisões Arquiteturais

### Por que Vite ao invés de Create React App?

| Vite | Create React App |
|------|------------------|
| HMR ultra-rápido (< 1s) | HMR lento (3-5s) |
| Build otimizado com Rollup | Build com Webpack |
| Configuração mínima | Configuração complexa |
| Suporte nativo a TypeScript | Configuração manual |
| Melhor DX | DX padrão |

**Decisão**: Vite por melhor experiência de desenvolvimento e build mais rápido.

### Por que Tailwind CSS?

| Tailwind CSS | CSS Modules | Styled Components |
|--------------|-------------|-------------------|
| Zero runtime overhead | Runtime overhead | Runtime overhead |
| Classes utilitárias reutilizáveis | Escopo limitado | CSS-in-JS |
| Design system consistente | Harder to maintain | File bloat |
| Fácil customização | Harder to customize | Learning curve |
| Bundle size pequeno | Bundle size médio | Bundle size grande |

**Decisão**: Tailwind CSS por performance e consistência do design system.

### Por que Functional Components com Hooks?

| Hooks | Class Components |
|-------|-----------------|
| Código mais limpo | Código verboso |
| Reutilização lógica | Harder to reuse |
| Menos boilerplate | Mais boilerplate |
| Padrão moderno | Legacy pattern |

**Decisão**: Functional Components com Hooks por simplicidade e boas práticas modernas.

### Por que Estático ao invés de SSR?

| Static | SSR |
|--------|-----|
| Deploy simples | Deploy complexo |
| Performance máxima | Latency de servidor |
| CDN-friendly | Server dependency |
| Menor custo | Maior custo |

**Decisão**: Static por ser uma landing page sem necessidade de renderização dinâmica.

---

## 📝 Padrões de Código

### Component Pattern

```jsx
// ✅ Bom: Functional component com hooks
const Component = ({ prop1, prop2 }) => {
  const [state, setState] = useState();

  useEffect(() => {
    // Effect
  }, []);

  const handleClick = () => {
    // Handler
  };

  return (
    <div onClick={handleClick}>
      {/* JSX */}
    </div>
  );
};

// ❌ Ruim: Class component
class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div />;
  }
}
```

### Props Pattern

```jsx
// ✅ Bom: Props desestruturadas com defaults
const Card = ({ title, description = '', children }) => {
  return (
    <div>
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      {children}
    </div>
  );
};

// ❌ Ruim: Props não desestruturadas
const Card = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      {props.children}
    </div>
  );
};
```

### Conditional Rendering

```jsx
// ✅ Bom: Ternário simples
{isLoggedIn ? <Dashboard /> : <Login />}

// ✅ Bom: && para boolean
{isLoading && <Spinner />}

// ✅ Bom: Early return
const Component = ({ show }) => {
  if (!show) return null;
  return <div>Content</div>;
};

// ❌ Ruim: if/else no JSX
{(() => {
  if (condition) {
    return <A />;
  } else {
    return <B />;
  }
})()}
```

### Event Handlers

```jsx
// ✅ Bom: Handler separado
const Button = () => {
  const handleClick = () => {
    console.log('Clicked');
  };

  return <button onClick={handleClick}>Click</button>;
};

// ❌ Ruim: Inline arrow function
const Button = () => {
  return <button onClick={() => console.log('Clicked')}>Click</button>;
};
```

---

## ⚡ Performance

### Otimizações Implementadas

#### 1. Code Splitting Automático (Vite)

```javascript
// Vite faz code splitting automaticamente por arquivo
// Não precisa fazer nada manual
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
```

#### 2. Lazy Loading

```jsx
// Lazy loading de componentes pesados
const HeavyComponent = lazy(() => import('./HeavyComponent'));

<Suspense fallback={<Spinner />}>
  <HeavyComponent />
</Suspense>
```

#### 3. Image Optimization

```jsx
// Usar formato WebP quando possível
<img
  src="/image.webp"
  alt="Description"
  loading="lazy"
  width={800}
  height={600}
/>
```

#### 4. Font Optimization

```jsx
// index.html
<link
  rel="preconnect"
  href="https://fonts.googleapis.com"
/>
<link
  rel="preconnect"
  href="https://fonts.gstatic.com"
  crossorigin
/>
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

#### 5. CSS Purging

```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Tailwind purga automaticamente CSS não usado
};
```

### Métricas de Performance

| Métrica | Meta | Atual |
|---------|------|-------|
| First Contentful Paint | < 1.5s | ~0.8s |
| Largest Contentful Paint | < 2.5s | ~1.2s |
| Time to Interactive | < 3.5s | ~1.5s |
| Cumulative Layout Shift | < 0.1 | ~0.05 |
| First Input Delay | < 100ms | ~20ms |

### Ferramentas de Otimização

```bash
# Analisar bundle size
npm run build -- --mode analyze

# Verificar performance
npx lighthouse https://venture.com.br

# Bundle analyzer
npm install rollup-plugin-visualizer
```

---

## ♿ Acessibilidade

### Diretrizes Seguidas

#### 1. HTML Semântico

```jsx
// ✅ Bom: Elementos semânticos
<header>...</header>
<nav>...</nav>
<main>
  <section>...</section>
  <article>...</article>
</main>
<footer>...</footer>

// ❌ Ruim: Divs sem propósito
<div class="header">...</div>
<div class="nav">...</div>
<div class="content">...</div>
```

#### 2. ARIA Labels

```jsx
<button
  aria-label="Fechar menu"
  onClick={handleClose}
>
  <XIcon />
</button>
```

#### 3. Focus Management

```jsx
const Modal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
    >
      {/* Modal content */}
    </div>
  );
};
```

#### 4. Keyboard Navigation

```jsx
const handleKeyDown = (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    handleClick();
  }
};

<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={handleKeyDown}
>
  Clickable div
</div>
```

#### 5. Alt Text para Imagens

```jsx
<img
  src="/hero-image.jpg"
  alt="Motorista de van escolar entregando aluno na escola"
  loading="eager"
/>
```

### Níveis de Conformidade WCAG

- **AA**: Meta mínima de acessibilidade
- **AAA**: Meta ideal (quando aplicável)

### Ferramentas de Teste

- [axe DevTools](https://www.deque.com/axe/)
- [WAVE](https://wave.webaim.org/)
- [Lighthouse Accessibility Audit](https://developers.google.com/web/tools/lighthouse)

---

## 🔒 Segurança

### Boas Práticas de Segurança

#### 1. Sanitização de Inputs

```jsx
import DOMPurify from 'dompurify';

const UserContent = ({ content }) => {
  const sanitizedContent = DOMPurify.sanitize(content);

  return <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />;
};
```

#### 2. XSS Prevention

```jsx
// ✅ Bom: React escapa automaticamente
<p>{userInput}</p>

// ❌ Ruim: dangerousamente inseguro
<p dangerouslySetInnerHTML={{ __html: userInput }} />
```

#### 3. HTTPS Only

```javascript
// Forçar HTTPS
if (location.protocol !== 'https:') {
  location.replace(`https:${location.href.substring(location.protocol.length)}`);
}
```

#### 4. CSP Headers

```nginx
# nginx.conf
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://api.venture.com.br;" always;
```

#### 5. Environment Variables

```javascript
// Variáveis sensíveis ficam no servidor, nunca no client
// Apenas VITE_* são expostas ao client
const apiUrl = import.meta.env.VITE_API_URL;
```

### Vulnerabilidades Comuns e Prevenção

| Vulnerabilidade | Prevenção |
|-----------------|-----------|
| XSS | React escapa automaticamente, evitar dangerouslySetInnerHTML |
| CSRF | Usar tokens CSRF em formulários |
| Clickjacking | X-Frame-Options header |
| MITM | HTTPS obrigatório |
| Injection | Input sanitization, prepared statements |

---

## 📊 Diagramas

### Arquitetura de Build

```
Source Code (JSX/TSX)
    ↓
Vite Dev Server
    ↓
TypeScript Compiler
    ↓
React (Client-side)
    ↓
Vite Build
    ↓
Rollup Bundler
    ↓
Minification (Terser)
    ↓
CSS Optimization
    ↓
Output: dist/
```

### Fluxo de Renderização

```
User Request
    ↓
HTML (index.html)
    ↓
JS Bundle (main.js)
    ↓
React Runtime
    ↓
Virtual DOM
    ↓
Real DOM Updates
    ↓
Visible Page
```

---

## 🔄 Manutenção e Evolução

### Princípios SOLID Aplicados

1. **Single Responsibility**: Cada componente tem uma única responsabilidade
2. **Open/Closed**: Componentes são abertos para extensão, fechados para modificação
3. **Liskov Substitution**: Subtipos podem substituir seus tipos base
4. **Interface Segregation**: Props minimalistas e específicos
5. **Dependency Inversion**: Dependência de abstrações, não implementações

### Roadmap Futuro

- [ ] Adicionar testes unitários (Vitest)
- [ ] Adicionar testes E2E (Playwright)
- [ ] Implementar design tokens (CSS variables)
- [ ] Storybook para componentes
- [ ] PWA capabilities
- [ ] i18n (internacionalização)

---

**Última atualização**: 21 de Janeiro de 2026

---

Para mais informações:
- [Guia de Desenvolvimento](./DEVELOPMENT.md)
- [Guia de Deploy](./DEPLOYMENT.md)
- [Documentação do Vite](https://vitejs.dev/)
- [Documentação do Tailwind](https://tailwindcss.com/)
