# SDG Context & Resources

A comprehensive context resource site for the SDG supplier assessment platform. Built with Astro, CloudCannon CMS, and Bookshop components, this site serves as a central hub for design system documentation, user personas, brand guidelines, and development resources.

## Purpose

This site provides a solid point of reference for continued development of the supplier assessment platform. It centralizes critical project context and resources including:

- **User Personas** - Comprehensive persona documentation for key user types (CSOs, Sustainability Managers, Procurement Managers, etc.)
- **Design System** - Design tokens, component libraries, and visual guidelines
- **Brand Guidelines** - Visual identity, logo usage, brand voice, and design principles
- **Design Tokens** - Colors, typography, spacing, and other design system foundations
- **Component Documentation** - Reusable UI components with usage guidelines
- **Content Resources** - Brand assets, guidelines, and reference materials

### Documentation Audiences

The site is designed to serve three distinct audiences:

- **Public Audience** - Publicly accessible documentation for external stakeholders, partners, and the broader community
- **Private Audience** - Internal team documentation with restricted access for client teams and project collaborators
- **Agentic Audience** - Machine-readable endpoints (llms.txt, JSON APIs) that provide structured context for AI agents and LLMs. These endpoints expose key resources like personas, design tokens, and brand guidelines in formats optimized for automated consumption, enabling design-to-code workflows, brand compliance validation, and automated design system maintenance

## Target Audience

This site serves **developers**, **designers**, **content strategists**, and **project managers** working on the SDG supplier assessment platform:

- **Developers** can reference design tokens, component patterns, and persona requirements when building features
- **Designers** can use CloudCannon's visual editor to manage content, update personas, and maintain design system documentation without touching code
- **Content Strategists** can structure and manage brand guidelines, content standards, and persona documentation through CloudCannon's intuitive interface
- **Project Managers** can oversee project resources, track deliverables, and coordinate team access to context documentation
- **AI Agents & LLMs** can consume structured data via agentic endpoints (llms.txt, JSON APIs) to maintain brand compliance and generate context-aware code

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

This project includes several content collections that can be managed through CloudCannon:

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

### Personas Collection
Comprehensive persona documentation system with detailed profiles for key user types:
- **Chief Sustainability Officer** - Executive decision-makers evaluating Scope 3 exposure
- **Sustainability Manager** - Day-to-day users managing supplier assessments
- **Senior Procurement Manager** - Procurement professionals integrating sustainability into sourcing
- **Small Business Owner** - Small suppliers navigating assessment requirements
- **System Administrator** - Technical users managing platform configuration
- **Scoring Insight Agent** - AI agent persona for automated scoring and insights
- **Sustainability Sales Operations Manager** - Sales teams using platform insights

Each persona includes:
- Demographics and characteristics
- User journeys and touchpoints
- Goals, pain points, and motivations
- Design requirements and content guidelines
- Technology profiles and accessibility needs
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

This project includes a comprehensive design agent system for maintaining design quality, brand compliance, and ensuring all work aligns with SDG platform requirements. The design agents provide autonomous validation and strategic guidance throughout the development process.

**See [`docs/design/AGENTS.md`](docs/design/AGENTS.md) for full documentation.**

### Available Agents

1. **Brand Guardian** 🛡️ - Brand compliance enforcer with autonomous validation
   - Validates components against brand guidelines and design tokens
   - Ensures consistency with SDG platform visual identity
   - Generates compliance reports before commits

2. **Creative Director** 🎨 - Strategic design decisions and concept validation
   - Provides strategic design approach for new features
   - Validates design concepts against user personas and platform goals
   - Ensures design decisions serve user needs and business objectives

3. **Art Director** 🖼️ - Visual harmony and aesthetic execution
   - Defines visual details and component aesthetics
   - Specifies motion and interaction patterns
   - Ensures visual consistency across the platform

4. **UI Analyzer** 🔍 - Automated UI/UX validation with Playwright
   - Performs automated UI testing and validation
   - Checks component consistency and responsive behavior
   - Validates brand compliance through technical analysis

5. **Accessibility Champion** ♿ - Inclusive design and WCAG compliance
   - Validates WCAG 2.1 Level AA compliance
   - Ensures inclusive design patterns
   - Reviews accessibility for all user personas

6. **Brand Auditor** 🔍 - Extract brand guidelines from existing work
   - Analyzes existing designs and code to extract brand patterns
   - Generates brand documentation from visual assets
   - Helps maintain consistency when onboarding new team members

### Workflow Command

Use `/design.workflow [feature-name]` to execute the complete design workflow:
1. **Creative Director** → Strategic approach and user experience priorities
2. **Art Director** → Visual execution and component aesthetics
3. **Brand Guardian** → Compliance check against brand guidelines
4. **UI Analyzer** → Automated testing and technical validation
5. **Accessibility Champion** → WCAG validation and inclusive design review

This workflow ensures every feature is strategically sound, visually consistent, brand-compliant, technically validated, and accessible.

### When to Use Design Agents

- **Before implementing new features** - Use Creative Director and Art Director to establish design approach
- **During development** - Use Brand Guardian frequently to maintain compliance
- **Before merging** - Run UI Analyzer and Accessibility Champion for final validation
- **When extracting patterns** - Use Brand Auditor to document existing design patterns

See [`docs/design/AGENTS.md`](docs/design/AGENTS.md) for detailed usage instructions and examples.

## Project Structure

```
sdg-context/
├── data/                    # JSON data files (colors, navigation, etc.)
├── docs/                    # Documentation
│   ├── data/               # Feature specifications and data documentation
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
│   │   └── personas/       # Personas (Markdown) - 7 active personas
│   ├── layouts/            # Page layouts
│   ├── pages/              # Route pages
│   └── styles/             # Global styles
├── .cloudcannon/           # CloudCannon schemas and configuration
├── .cursor/                 # Cursor IDE configuration
│   ├── commands/           # Custom commands
│   └── rules/              # Design system rules
└── astro.config.mjs        # Astro configuration
```

## Extending the Project

### Adding New Collections

To add new content collections (e.g., case studies, resources, documentation):

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

**Important**: Before creating new components, run the design agent workflow to ensure brand compliance:
```bash
/design.workflow [component-name]
```

### Adding New Personas

To add a new persona to the collection:

1. Create a new markdown file in `src/content/personas/`
2. Follow the schema defined in `src/content/config.ts`
3. Reference existing personas for structure and required fields
4. Use the Brand Guardian agent to validate persona documentation

### Customizing Design Tokens

- **Colors**: Edit `data/colors.json` - changes will be reflected across the site
- **Typography**: Modify `src/styles/main.css` - ensure accessibility compliance
- **Spacing**: Update Tailwind configuration - maintain consistent rhythm
- **Components**: Customize component styles in `src/components/` - validate with Brand Guardian

**Note**: Always run Brand Guardian after making design token changes to ensure consistency.

## Design Principles

This project follows Ocupop's design principles documented in [`docs/design/ocupop-design-principles.md`](docs/design/ocupop-design-principles.md), ensuring all work on the SDG supplier assessment platform maintains high standards:

- **Purpose Over Polish** - Every design decision serves a clear functional purpose
- **Authentic Communication** - Design with honesty and directness
- **Human-Centered Simplicity** - Complex problems deserve elegant solutions
- **Bold Clarity** - Make confident design choices
- **Inclusive by Default** - Design for everyone from the start

These principles guide all design decisions and are enforced through the Design Agent System to maintain consistency and quality across the platform.

## Documentation

- **Design Agents**: [`docs/design/AGENTS.md`](docs/design/AGENTS.md)
- **Design Principles**: [`docs/design/ocupop-design-principles.md`](docs/design/ocupop-design-principles.md)
- **Figma Integration**: [`docs/design/README.md`](docs/design/README.md)

## Agentic Endpoints (Planned)

The site will expose machine-readable endpoints optimized for AI agents and LLMs:

- **`/llms.txt`** - Human and machine-readable index of available resources
- **`/api/personas.json`** - Structured JSON export of all persona data
- **`/api/design-tokens.json`** - Design token values in JSON format
- **`/api/brand-guidelines.json`** - Brand guidelines in structured format

These endpoints enable:
- Automated brand compliance checking
- Context-aware code generation
- Design-to-code workflows
- Automated design system maintenance
- LLM-powered development assistance

## Contributing

This is a client project for SDG. For questions or improvements, please contact the Ocupop team.

## License

Internal use only - SDG project.

---

**Built with** [Astro](https://astro.build) • [CloudCannon](https://cloudcannon.com) • [Bookshop](https://github.com/CloudCannon/bookshop) • [Tailwind CSS](https://tailwindcss.com)
