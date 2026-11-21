<img width="1672" height="941" alt="image" src="https://github.com/user-attachments/assets/b01c6e26-09a2-4e8a-88de-9ea5baaae000" />


# Cyberpunk Portfolio | JOTAPE 

Portfólio pessoal inspirado no universo de **Cyberpunk 2077**, com intro animada, efeito de glitch no cursor, tema claro/escuro e versão em português e inglês.

[![Deploy](https://img.shields.io/badge/Acessar-Portf%C3%B3lio-fae800?style=for-the-badge&logo=vercel&logoColor=0f0f0f)](https://joao-paulo-pinheiro-portfolio.vercel.app/)
![React](https://img.shields.io/badge/React-0f0f0f?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-0f0f0f?style=for-the-badge&logo=typescript&logoColor=3178C6)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-0f0f0f?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4)

</div>

---

## 📖 Sobre o projeto

Este é o meu primeiro portfólio, criado para apresentar minha trajetória, meus projetos e meus estudos em desenvolvimento web. A proposta foi ir além de uma vitrine comum: o site foi pensado como uma experiência visual, com a identidade amarela, preta, ciano e vermelha do universo de Cyberpunk 2077 e menus inspirados nos do jogo.

🔗 **Acesse o site:** [joao-paulo-pinheiro-portfolio.vercel.app](https://joao-paulo-pinheiro-portfolio.vercel.app/)

## ✨ Funcionalidades

- 🎬 **Animação de intro** em vídeo, com transição suave até o site
- ⚡ **Efeito de glitch** que acompanha o cursor e interage com os elementos da página
- 🌗 **Tema claro e escuro**, com troca pela barra de navegação
- 🌎 **Dois idiomas** (Português e Inglês), com seletor na navbar
- 🧭 **Navegação por rotas** com layout compartilhado (navbar e footer)
- 🃏 **Card em destaque** na Home que alterna automaticamente entre projetos e certificados
- 🗂️ **Projetos** em cartões que expandem ao clicar, com link para o repositório no GitHub
- 🎓 **Certificados e cursos** com filtro por tipo e ordenação por data
- 🕒 **Experiência** em formato de linha do tempo
- 📱 **Responsivo**, desenvolvido com abordagem Mobile First

## 📄 Páginas

| Rota | Página | Descrição |
| --- | --- | --- |
| `/` | Home | Hero com o título, tecnologias e card em destaque |
| `/AboutMe` | Sobre mim | Apresentação em formato de ficha de personagem, com abas de especificações e habilidades |
| `/Experience` | Experiência | Linha do tempo com a trajetória profissional e acadêmica |
| `/Projects` | Projetos | Cartões dos projetos com link para o GitHub |
| `/Certificates` | Certificados e Cursos | Lista de certificações com filtro e ordenação |

## 🛠️ Tecnologias

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)
- HTML, CSS e JavaScript
- Deploy na [Vercel](https://vercel.com/)

## 📁 Estrutura de pastas

```
public/              # Imagens, vídeos e demais arquivos estáticos
src/
├── components/      # CursorGlitch, Emphasis, Footer, IntroAnimation,
│                    # LanguageSelect, Navbar, ThemeToggle, Menu
├── routes/          # Páginas: Home, AboutMe, Experience, Projects, Certificates
├── types/           # Tipos e dados em TypeScript (Certificates, Experiences, Projects, techs...)
├── i18n/            # Traduções PT/EN (translations.ts)
├── App.tsx          # Layout (Navbar, Outlet e Footer)
└── main.tsx         # Configuração das rotas (createBrowserRouter)
```

> Os dados de projetos, certificados e experiências ficam em arquivos TypeScript dentro de `types/`, então para adicionar um novo item basta editar a lista correspondente.

## 🚀 Como rodar localmente

Pré-requisito: [Node.js](https://nodejs.org/) instalado.

```bash
# Clone o repositório
git clone https://github.com/jotapefp/Cyberpunk-Portfolio.git

# Entre na pasta do projeto
cd Cyberpunk-Portfolio

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
```

## 🎨 Identidade visual

| Cor | Hex |
| --- | --- |
| Amarelo | `#fae800` |
| Vermelho | `#ee3453` |
| Preto | `#0f0f0f` |
| Branco | `#ffffff` |

No tema claro, o amarelo é a cor principal e o preto a secundária; no tema escuro, é o contrário. A tipografia combina **Rajdhani** com as fontes **SDDystopianDemo** (navbar) e **Roguepunk** (título da Home).

## 🔗 Referências e créditos

Este é um projeto sem fins lucrativos, criado para estudo e portfólio. Cyberpunk 2077 e seus elementos visuais pertencem à CD PROJEKT RED, e este site é apenas uma homenagem de fã.

- Estrutura das páginas principal, Sobre mim, Certificados e Projetos: [Cyberpunk 2077 Website (Behance)](https://www.behance.net/gallery/96954785/Cyberpunk-2077-Website)
- Inspiração da página de Experiência: [Pinterest](https://br.pinterest.com/pin/19914423349056871/)
- Ícone do site: [SteamGridDB](https://www.steamgriddb.com/icon/34420)
- Fontes: [FontSpace](https://www.fontspace.com/category/cyberpunk)

## 👨‍💻 Autor

**João Paulo Pinheiro Ferraz de Arruda**
Estudante de Ciência da Computação, em busca de oportunidade de estágio em desenvolvimento web / full stack.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0f0f0f?style=for-the-badge&logo=linkedin&logoColor=0A66C2)](https://www.linkedin.com/in/joao-paulo-pinheiro-ferraz-de-arruda)
[![GitHub](https://img.shields.io/badge/GitHub-0f0f0f?style=for-the-badge&logo=github&logoColor=white)](https://github.com/jotapefp)

---

<div align="center">

Desenvolvido por João Paulo Pinheiro · © 2026

</div>
