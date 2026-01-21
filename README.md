# Venture - Landing Page

![Venture Logo](venture-logo.png)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8.svg)](https://tailwindcss.com/)

**Venture** é uma landing page moderna desenvolvida para apresentar o aplicativo de gestão de transporte escolar que conecta responsáveis, escolas e motoristas.

## 📋 Sobre o Venture

### Para os Responsáveis
Os responsáveis podem cadastrar seus filhos, informar as escolas em que estudam e pesquisar motoristas disponíveis para cada escola. Após a escolha, o contrato é confirmado diretamente pelo aplicativo, com a possibilidade de configurar o método de pagamento via boleto ou cartão de crédito.

No dia a dia, o responsável marca pelo aplicativo se o filho irá ou não para a escola no dia seguinte, acompanha em tempo real as viagens do motorista e pode cancelar o serviço a qualquer momento, com total transparência e controle.

### Para as Escolas
O Venture facilita a organização da entrada e saída de alunos que utilizam vans escolares. As escolas podem cadastrar tios escolares, gerenciar motoristas por meio de um sistema de convites e manter total controle da frota ativa.

A escola convida o motorista, que deve aceitar para fazer parte da instituição. Somente a escola pode remover um motorista da sua frota. Além disso, a escola tem acesso à lista de alunos atendidos por cada motorista e à localização em tempo real, adicionando uma importante camada extra de segurança.

### Para os Motoristas
Os motoristas contam com um perfil personalizado, onde podem exibir fotos e uma breve descrição, ajudando os responsáveis a escolherem com mais confiança.

Eles podem:
- Definir a distância máxima para buscar alunos
- Configurar o valor cobrado por quilômetro
- Aceitar ou recusar convites de escolas
- Visualizar contratos prontos para fechamento e confirmar apenas os que desejarem

Os itinerários deixam de ser uma preocupação: basta informar se o trajeto é de ida ou volta e o horário desejado. A rota é montada automaticamente. O motorista não precisa confirmar diariamente com os responsáveis se o aluno irá à escola — essa informação já é marcada diretamente no aplicativo.

---

## 🚀 Stack Tecnológica

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **Vite 5** - Build tool extremamente rápido
- **Tailwind CSS 3.4** - Framework CSS utilitário
- **TypeScript** - Supertipo de JavaScript para tipagem estática
- **PostCSS** - Transformador CSS com plugins para Tailwind

---

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** >= 18.0.0 ([Download](https://nodejs.org/))
- **npm** >= 9.0.0 (vem com o Node.js) ou **pnpm** >= 8.0.0 ou **yarn** >= 1.22.0

Para verificar a versão instalada:

```bash
node --version
npm --version
```

---

## 🛠️ Instalação

### 1. Clone o repositório

```bash
git clone <repository-url>
cd landing-page
```

### 2. Instale as dependências

```bash
# Com npm
npm install

# Com yarn
yarn install

# Com pnpm
pnpm install
```

---

## ▶️ Como Rodar

### Desenvolvimento

```bash
# Com npm
npm run dev

# Com yarn
yarn dev

# Com pnpm
pnpm dev
```

A aplicação estará disponível em [http://localhost:5173](http://localhost:5173)

O servidor de desenvolvimento recarrega automaticamente quando você faz alterações nos arquivos fonte.

### Build para Produção

```bash
# Com npm
npm run build

# Com yarn
yarn build

# Com pnpm
pnpm build
```

Este comando cria uma versão otimizada da aplicação na pasta `dist/`.

### Preview do Build

```bash
# Com npm
npm run preview

# Com yarn
yarn preview

# Com pnpm
pnpm preview
```

Este comando serve o build de produção localmente para testes antes do deploy.

---

## 📁 Estrutura de Pastas

```
landing-page/
├── public/                 # Arquivos estáticos
│   ├── venture-logo.png   # Logo do Venture
│   └── favicon.svg        # Favicon
├── src/                    # Código fonte
│   ├── assets/            # Imagens, fontes e recursos
│   ├── components/        # Componentes React reutilizáveis
│   │   ├── Hero/         # Seção Hero
│   │   ├── Features/     # Features do produto
│   │   ├── HowItWorks/   # Como funciona
│   │   └── Footer/       # Rodapé
│   ├── pages/            # Páginas da aplicação
│   ├── App.jsx           # Componente principal
│   ├── main.jsx          # Entry point
│   └── index.css         # Estilos globais e Tailwind
├── docs/                  # Documentação
│   ├── DEVELOPMENT.md    # Guia de desenvolvimento
│   ├── DEPLOYMENT.md     # Guia de deploy
│   └── ARCHITECTURE.md   # Arquitetura do projeto
├── .gitignore            # Arquivos ignorados pelo Git
├── Dockerfile            # Imagem Docker
├── docker-compose.yml    # Docker Compose (uso local)
├── .dockerignore         # Arquivos ignorados no build Docker
├── index.html            # HTML principal
├── package.json          # Dependências e scripts
├── tailwind.config.js    # Configuração do Tailwind
├── tsconfig.json         # Configuração do TypeScript
├── vite.config.js        # Configuração do Vite
└── README.md             # Este arquivo
```

---

## 🎨 Design System

A landing page segue um design moderno e minimalista com as seguintes características:

- **Background**: 90% branco para proporcionar clareza e leveza
- **Cor Primária**: Extraída do logo Venture (verde/vibrante)
- **Cor Secundária**: Preto para textos e detalhes importantes
- **Tipografia**: Sans-serif moderna (Inter ou similar)
- **Espaçamento**: Ampla utilização de whitespace para melhor legibilidade

### Paleta de Cores

```css
/* Cores base */
--brand-primary: [extraída do logo];
--brand-secondary: #000000;
--background-light: #ffffff;
--background-offset: #f8fafc;

/* Variantes */
--brand-primary-light: [variação clara da cor principal];
--brand-primary-dark: [variação escura da cor principal];
```

---

## 🔧 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Cria build de produção |
| `npm run preview` | Preview do build de produção |
| `npm run lint` | Executa ESLint para verificar código |
| `npm run format` | Formata código com Prettier (se configurado) |

---

## 📚 Documentação Adicional

- **[Guia de Desenvolvimento](docs/DEVELOPMENT.md)** - Como contribuir e desenvolver
- **[Guia de Deploy](docs/DEPLOYMENT.md)** - Como fazer deploy da aplicação
- **[Arquitetura](docs/ARCHITECTURE.md)** - Estrutura técnica do projeto

---

## 🐳 Docker (Uso Local)

Para rodar a aplicação localmente com Docker:

```bash
# Build e iniciar a aplicação
docker compose up -d

# Acessar a aplicação
# http://localhost:3000

# Ver logs
docker compose logs -f

# Parar a aplicação
docker compose down
```

---

## 🔗 Links Úteis

- [Documentação do React](https://react.dev/)
- [Documentação do Vite](https://vitejs.dev/)
- [Documentação do Tailwind CSS](https://tailwindcss.com/)
- [Documentação do TypeScript](https://www.typescriptlang.org/)

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor, leia o [Guia de Desenvolvimento](docs/DEVELOPMENT.md) para detalhes sobre como contribuir.

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Add: Minha feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 👥 Equipe

**Venture** - Gestão inteligente de transporte escolar

---

**Desenvolvido com ❤️ usando React + Tailwind CSS**
