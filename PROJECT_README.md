# Venture - Landing Page

Landing page moderna e responsiva para o Venture, um aplicativo que conecta responsáveis, escolas e motoristas de transporte escolar.

## Tecnologias Utilizadas

- **React 18** - Biblioteca de UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **Lucide React** - Ícones

## Estrutura do Projeto

```
src/
├── components/
│   ├── base/           # Componentes básicos reutilizáveis
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Heading.tsx
│   │   ├── Icon.tsx
│   │   └── Section.tsx
│   ├── layout/         # Componentes de estrutura
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── HeroSection.tsx
│   └── sections/       # Seções específicas
│       ├── FeaturesSection.tsx
│       ├── HowItWorksSection.tsx
│       ├── BenefitsSection.tsx
│       └── CTASection.tsx
├── styles/             # Estilos globais
├── lib/                # Utilitários
└── assets/             # Imagens, logos
```

## Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview

# Linting
npm run lint
```

## Design System

### Cores

- **Primária (Brand)**: #2563EB (Blue-600)
- **Backgrounds**: Branco (#FFFFFF) e Cinza-50 (#F9FAFB)
- **Texto**: Cinza-900 (#111827)
- **Detalhes**: Variações de azul e cinza

### Tipografia

- Fonte base: Inter (system fonts)
- Títulos: Bold (700)
- Texto: Regular (400)

### Componentes

#### Button
- **Primary**: Fundo brand-600 com hover brand-700
- **Secondary**: Fundo gray-100 com hover gray-200
- **Outline**: Borda brand-600 com hover brand-50

#### Heading
- Níveis h1-h6 com tamanhos responsivos
- Alinhamento: left, center, right

#### Card
- Fundo branco com borda sutil
- Hover effect opcional

## Responsividade

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Funcionalidades

### Navegação
- Menu responsivo com hamburger menu
- Links de âncora para seções
- Header fixo com blur effect

### Seções
1. **HeroSection**: Destaque principal com CTA
2. **FeaturesSection**: Funcionalidades por público (responsáveis, escolas, motoristas)
3. **HowItWorksSection**: Passo a passo de uso
4. **BenefitsSection**: Benefícios e estatísticas
5. **CTASection**: Call-to-action final
6. **Footer**: Links e informações de contato

### Animações
- Animações de entrada usando Framer Motion
- Hover effects nos cards e botões
- Transições suaves em todos os elementos

## Acessibilidade

- ARIA labels em botões interativos
- Semântica HTML correta (header, nav, section, footer)
- Navegação por teclado
- Cores com contraste adequado
- Textos alternativos em imagens

## Performance

- Lazy loading de imagens
- Code splitting automático pelo Vite
- Componentes otimizados com React.memo
- CSS com Tailwind (purge automático no build)

## Próximos Passos

- [ ] Adicionar seção de depoimentos/testimonials
- [ ] Implementar formulário de contato
- [ ] Adicionar blog/notícias
- [ ] Integração com analytics (Google Analytics)
- [ ] SEO otimizado (meta tags, Open Graph)
- [ ] Testes automatizados (Jest + React Testing Library)
