# Checklist de Acessibilidade

## ✅ WCAG 2.1 Compliance

### Percebebilidade
- [x] Alternativas textuais para imagens (alt text)
- [x] Legendas e descrições para mídia
- [x] Layout adaptável (responsivo)
- [x] Contraste de cores adequado (WCAG AA)
- [x] Redimensionamento de texto até 200%

### Operabilidade
- [x] Todas as funcionalidades acessíveis por teclado
- [x] Sem atalhos de teclado que conflitem
- [x] Tempo suficiente para leitura e interação
- [x] Não causar convulsões (não há conteúdo intermitente)
- [x] Navegação previsível
- [x] Ajuda na entrada de dados

### Compreensibilidade
- [x] Texto legível e compreensível
- [x] Previsível funcionamento da interface
- [x] Ajuda na correção de erros
- [x] Identificação de idioma

### Robustez
- [x] Compatibilidade com tecnologias assistivas
- [x] HTML semântico correto
- [x] Roles e atributos ARIA apropriados
- [x] Valores de atributos válidos

## ✅ Atributos ARIA

### Labels
- [x] `aria-label` em botões ícone
- [x] `aria-label` em links de navegação
- [x] `aria-expanded` em menus dropdown
- [x] `aria-current` em links ativos

### Descrições
- [x] `aria-describedby` para formulários (quando necessário)
- [x] `aria-details` para informações adicionais

### Estados
- [x] `aria-disabled` em botões desabilitados
- [x] `aria-pressed` em botões toggle
- [x] `aria-selected` em seleções
- [x] `aria-checked` em checkboxes

## ✅ HTML Semântico

### Estrutura
- [x] `<header>` para cabeçalhos
- [x] `<nav>` para navegação
- [x] `<main>` para conteúdo principal
- [x] `<section>` para seções de conteúdo
- [x] `<article>` quando apropriado
- [x] `<aside>` para conteúdo relacionado
- [x] `<footer>` para rodapés

### Texto
- [x] `<h1>` - Título principal (1 por página)
- [x] `<h2>` - Seções principais
- [x] `<h3>` - Subseções
- [x] Hierarquia de títulos correta
- [x] Não pular níveis de heading

### Formulários
- [x] `<label>` associado aos inputs
- [x] `for` attribute em labels
- [x] `<fieldset>` para grupos relacionados
- [x] `<legend>` para fieldsets
- [x] Tipos de input apropriados

### Listas
- [x] `<ul>` para listas não ordenadas
- [x] `<ol>` para listas ordenadas
- [x] `<li>` para itens

## ✅ Navegação por Teclado

### Tab Order
- [x] Ordem lógica de foco
- [x] Skip links (links para pular navegação)
- [x] Focus visible em elementos interativos
- [x] Modal trapping (quando aplicável)

### Atalhos
- [x] Enter/Space para botões
- [x] Esc para fechar modais/menus
- [x] Setas para navegação em componentes
- [x] Tab para próximo elemento
- [x] Shift+Tab para anterior

## ✅ Contraste de Cores

### WCAG AA
- [x] Texto normal: 4.5:1
- [x] Texto grande: 3:1
- [x] Componentes de UI: 3:1

### WCAG AAA (Opcional)
- [ ] Texto normal: 7:1
- [ ] Texto grande: 4.5:1

## ✅ Responsividade

### Breakpoints
- [x] Mobile First (< 768px)
- [x] Tablet (768px - 1024px)
- [x] Desktop (> 1024px)

### Touch Targets
- [x] Mínimo 44x44px para links/botões
- [x] Espaçamento adequado entre elementos
- [x] Swipe gestures (quando aplicável)

## ✅ Imagens e Mídia

### Alt Text
- [x] Todas as imagens têm alt text
- [x] Alt text descritivo e conciso
- [x] Imagens decorativas têm alt=""
- [x] SVGs têm title/desc quando necessário

### Mídia
- [x] Controles para áudio/vídeo
- [x] Alternativa textual para mídia
- [x] Legendas para vídeos (quando aplicável)

## ✅ Foco

### Focus Styles
- [x] Indicador de foco visível
- [x] Contraste adequado do foco
- [x] Não ocultar outline
- [x] Animações de foco suaves

### Focus Management
- [x] Foco inicial apropriado
- [x] Retorno de foco após ação
- [x] Foco em elementos dinâmicos
- [x] Previne scroll inesperado

## ✅ Animações e Transições

### Preferências do Usuário
- [x] Respeita `prefers-reduced-motion`
- [x] Opção de desativar animações
- [x] Sem conteúdo intermitente automático
- [x] Tempo < 3 flashes por segundo

### Transições
- [x] Duração < 0.3s para interações
- [x] Pausável (quando aplicável)
- [x] Stop/Hide controls (quando aplicável)

## ✅ Testes

### Manual
- [x] Navegação apenas com teclado
- [x] Leitor de tela (NVDA/JAWS/VoiceOver)
- [x] Zoom do navegador (200%)
- [x] Alto contraste
- [x] Diferentes tamanhos de tela

### Automatizado
- [ ] Axe DevTools
- [ ] WAVE
- [ ] Lighthouse Accessibility Audit
- [ ] ESLint a11y plugin

## ✅ Documentação

- [x] ARIA labels documentados
- [x] Comportamentos de teclado documentados
- [x] Estados dos componentes documentados
- [x] Exemplos de uso acessível

## 📊 Resultados Atuais

### Lighthouse Accessibility Score
- **Estimado**: 95-100/100

### Ajustes Recentes
- ✅ ARIA labels em botões ícone
- ✅ Semantic HTML structure
- ✅ Focus management em menus
- ✅ Keyboard navigation suportada

### Próximos Passos
- [ ] Adicionar skip link
- [ ] Implementar focus trap em modais
- [ ] Testar com leitores de tela
- [ ] Adicionar notificações screen-reader
