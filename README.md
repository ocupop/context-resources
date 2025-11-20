# Context Resources Starter

A structured starter template for creating client brand playbooks and design system documentation. Built with Astro, CloudCannon CMS, and Bookshop components, this starter provides a foundation for hosting and managing brand context resources including design guidelines, design tokens, personas, component libraries, and more.

## Purpose

This starter is designed for **Ocupop projects** to create comprehensive brand playbook deliverables for clients. It serves as a living documentation site that centralizes:

- **Brand Guidelines** - Visual identity, logo usage, brand voice
- **Design Tokens** - Colors, typography, spacing, and other design system foundations
- **Personas** - User research and persona documentation (planned feature)
- **Component Libraries** - Reusable UI components with documentation
- **Design Principles** - Core design philosophy and standards
- **Content Resources** - Brand assets, guidelines, and reference materials

### Documentation Audiences

The playbook and design system documentation is designed to serve three distinct audiences:

- **Public Audience** - Publicly accessible documentation for external stakeholders, partners, and the broader community
- **Private Audience** - Internal team documentation with restricted access for client teams and project collaborators
- **Agentic Audience** - Structured documentation optimized for AI agents and automated systems, enabling design-to-code workflows, brand compliance validation, and automated design system maintenance

## Target Audience

This starter is designed for **developers**, **designers**, **content strategists**, and **project managers**:

- **Developers** can quickly set up a brand playbook site and extend it with custom collections and content types
- **Designers** can use CloudCannon's visual editor to manage content without touching code
- **Content Strategists** can structure and manage brand guidelines, content standards, and documentation through CloudCannon's intuitive interface
- **Project Managers** can oversee project resources, track deliverables, and coordinate team access to brand playbook documentation

## Getting Started

### Prerequisites

- Node.js 18+ and npm/pnpm
- A CloudCannon account (for CMS functionality)
- Git repository for version control

### Initial Setup

1. Clone or fork this repository
2. Run `npm install` (or `pnpm install`)
3. Run `npm start` to start the local development server at `localhost:4321`
4. Follow [CloudCannon's guide](https://cloudcannon.com/documentation/guides/astro-starter-guide/sync-your-files/) to connect your repository to CloudCannon

### Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm start`               | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`           |
| `npm run preview`         | Preview the production build locally             |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run new-component`   | Create a new Bookshop component                  |
| `npm run pagefind`        | Build and serve search index                     |

## Content Collections

This starter includes several content collections that can be managed through CloudCannon:

### Pages Collection
Flexible page builder using Bookshop components. Supports:
- Visual page building with drag-and-drop components
- Custom hero blocks and content sections
- SEO controls and metadata
- Paginated collections for listing pages

### Blog Collection
Content management for articles and documentation:
- MDX support for rich content
- Tag system for categorization
- Featured images and thumbnails
- Author attribution and dates

### Personas Collection (Planned)
Comprehensive persona documentation system with:
- Demographics and characteristics
- User journeys and touchpoints
- Goals, pain points, and motivations
- Design requirements and content guidelines
- Research notes and empathy maps

### Data Files
JSON-based configuration for:
- Site-wide settings (`site.json`)
- Navigation structure (`navigation.json`)
- Color palette (`colors.json`)
- Tag definitions (`tags.json`)
- Icon library (`icons.json`)

## Features

### Core Features

- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Font Awesome Icons** - Comprehensive icon library
- **Built-in Search** - Pagefind integration for full-text search
- **Bookshop Components** - Reusable, editable components for CloudCannon
- **MDX Support** - Markdown with JSX components
- **Alpine.js** - Lightweight JavaScript framework for interactivity
- **React Integration** - Use React components alongside Astro

### CloudCannon Features

- **Visual Editing** - Live preview and visual page builder
- **Git-Backed CMS** - All changes tracked in Git
- **Content Editor** - Markdown editing with preview
- **Data File Management** - Edit JSON files through the UI
- **Collection Management** - Create, edit, and organize content
- **SEO Controls** - Manage metadata and Open Graph tags
- **Accessibility Controls** - Built-in accessibility features

### Design System Integration

- **Design Principles** - Ocupop design standards documented in `docs/design/`
- **Design Tokens** - Color palettes, typography, and spacing systems
- **Component Documentation** - Self-documenting components with schemas
- **Figma Integration** - MCP server support for design-to-code workflows

## Design Agent System

This starter includes a comprehensive design agent system for maintaining design quality and brand compliance. See [`docs/design/AGENTS.md`](docs/design/AGENTS.md) for full documentation.

### Available Agents

1. **Brand Guardian** 🛡️ - Brand compliance enforcer with autonomous validation
2. **Creative Director** 🎨 - Strategic design decisions and concept validation
3. **Art Director** 🖼️ - Visual harmony and aesthetic execution
4. **UI Analyzer** 🔍 - Automated UI/UX validation with Playwright
5. **Accessibility Champion** ♿ - Inclusive design and WCAG compliance
6. **Brand Auditor** 🔍 - Extract brand guidelines from existing work

### Workflow Command

Use `/design.workflow [feature-name]` to execute the complete design workflow:
1. Creative Director → Strategic approach
2. Art Director → Visual execution
3. Brand Guardian → Compliance check
4. UI Analyzer → Automated testing
5. Accessibility Champion → WCAG validation

See [`docs/design/AGENTS.md`](docs/design/AGENTS.md) for detailed usage instructions.

## Project Structure

```
context-resources/
├── data/                    # JSON data files (colors, navigation, etc.)
├── docs/                    # Documentation
│   └── design/             # Design principles and agent documentation
├── public/                  # Static assets (images, videos, etc.)
├── src/
│   ├── assets/             # Source assets (images, JS)
│   ├── bookshop/           # Bookshop component configuration
│   ├── components/          # Reusable components
│   │   ├── blog/           # Blog-specific components
│   │   ├── buttons/        # Button components
│   │   ├── heroes/         # Hero section components
│   │   ├── navigation/     # Navigation components
│   │   └── personas/       # Persona components
│   ├── content/            # Content collections
│   │   ├── blog/           # Blog posts (MDX)
│   │   ├── pages/          # Pages (Markdown)
│   │   └── personas/       # Personas (Markdown)
│   ├── layouts/            # Page layouts
│   ├── pages/              # Route pages
│   └── styles/             # Global styles
├── .cloudcannon/           # CloudCannon schemas and configuration
├── .cursor/                 # Cursor IDE configuration
│   ├── commands/           # Custom commands
│   └── rules/              # Design system rules
└── astro.config.mjs        # Astro configuration
```

## Extending the Starter

### Adding New Collections

1. Define the collection schema in `src/content/config.ts`
2. Add CloudCannon configuration in `cloudcannon.config.yml`
3. Create schema files in `.cloudcannon/schemas/`
4. Add collection pages in `src/pages/`

### Creating New Components

Use the Bookshop component generator:
```bash
npm run new-component
```

Or manually create components in `src/components/` with corresponding `.yml` schema files.

### Customizing Design Tokens

- **Colors**: Edit `data/colors.json`
- **Typography**: Modify `src/styles/main.css`
- **Spacing**: Update Tailwind configuration
- **Components**: Customize component styles in `src/components/`

## Design Principles

This starter follows Ocupop's design principles documented in [`docs/design/ocupop-design-principles.md`](docs/design/ocupop-design-principles.md):

- **Purpose Over Polish** - Every design decision serves a clear functional purpose
- **Authentic Communication** - Design with honesty and directness
- **Human-Centered Simplicity** - Complex problems deserve elegant solutions
- **Bold Clarity** - Make confident design choices
- **Inclusive by Default** - Design for everyone from the start

## Documentation

- **Design Agents**: [`docs/design/AGENTS.md`](docs/design/AGENTS.md)
- **Design Principles**: [`docs/design/ocupop-design-principles.md`](docs/design/ocupop-design-principles.md)
- **Figma Integration**: [`docs/design/README.md`](docs/design/README.md)

## Contributing

This is an internal Ocupop starter template. For questions or improvements, please contact the Ocupop team.

## License

Internal use only - Ocupop projects.

---

**Built with** [Astro](https://astro.build) • [CloudCannon](https://cloudcannon.com) • [Bookshop](https://github.com/CloudCannon/bookshop) • [Tailwind CSS](https://tailwindcss.com)
