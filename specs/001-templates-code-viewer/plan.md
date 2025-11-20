# Implementation Plan: Templates Code Viewer Collection

**Branch**: `001-templates-code-viewer` | **Date**: 2025-01-27 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-templates-code-viewer/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Create a new Astro content collection for templates that displays template files as syntax-highlighted code snippets with copy-to-clipboard functionality. Templates are currently stored in `src/content/pages/templates/` as markdown files. The feature will create a dedicated templates collection, add syntax highlighting for code display, implement copy functionality, and create an index page for template discovery.

## Technical Context

**Language/Version**: TypeScript/JavaScript (Astro 5.1.10, React 18.2.0)  
**Primary Dependencies**: Astro, React, Tailwind CSS 4.1.17, Alpine.js 3.14.8, markdown-it 13.0.1  
**Storage**: File-based content collections (Astro content collections API)  
**Testing**: Manual testing with automated accessibility checks (Lighthouse, axe-core)  
**Target Platform**: Web (static site generation via Astro)  
**Project Type**: Web application (Astro static site with CloudCannon CMS integration)  
**Performance Goals**: Page load <3 seconds on 3G (per constitution), code snippet render <2 seconds (per spec SC-001)  
**Constraints**: WCAG AA minimum (AAA preferred), CloudCannon CMS integration required, must work across modern browsers (Chrome, Firefox, Safari, Edge), responsive design (320px to 2560px widths)  
**Scale/Scope**: Documentation site with ~3-10 template files initially, expected to grow to 20-50 templates

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

### I. Content-First Architecture ✅
- **Status**: PASS
- **Rationale**: Feature creates a new content collection (`templates`) that prioritizes content structure. Templates are content files that will be served through Astro's content collections API. CloudCannon integration will be added for template management.

### II. Design System Compliance ✅
- **Status**: PASS
- **Rationale**: Code display component will use design tokens from `data/` files. Syntax highlighting will follow Ocupop design principles. Accessibility standards (WCAG AA minimum) will be enforced for code display and copy button interactions.

### III. Component Reusability & Bookshop Integration ✅
- **Status**: PASS
- **Rationale**: Code viewer and copy button components will be created as Bookshop components with `.yml` schemas for CloudCannon editing. Syntax highlighting uses Shiki (server-side, no client JS needed). Copy functionality uses Alpine.js (already in project) for minimal client-side interactivity. Components are self-contained and reusable.

### IV. Multi-Audience Content Strategy ✅
- **Status**: PASS
- **Rationale**: Templates serve all three audiences: public (external stakeholders viewing templates), private (internal/client teams editing templates), and agentic (AI agents reading template structure). Content structure supports all audiences.

### V. Performance & Accessibility Standards ✅
- **Status**: PASS
- **Rationale**: Feature must meet <3s load time requirement. Code snippets must be readable and accessible. Copy functionality must work across all supported browsers. Keyboard navigation and screen reader compatibility required.

**Gate Result**: ✅ PASS - All clarifications resolved in Phase 0 research. Component architecture determined: Shiki for server-side syntax highlighting, Alpine.js for copy functionality, Bookshop components for CloudCannon integration.

## Project Structure

### Documentation (this feature)

```text
specs/001-templates-code-viewer/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
src/
├── content/
│   ├── config.ts                    # Add templates collection definition
│   └── templates/                    # New: Templates collection directory
│       ├── stakeholder-interview.md  # Existing template (move from pages/templates/)
│       ├── brand-guidelines.md       # Existing template (move from pages/templates/)
│       └── project-design-requirements.md # Existing template (move from pages/templates/)
├── components/
│   └── templates/                    # New: Template-specific components
│       ├── code-viewer.astro         # Code display component with syntax highlighting
│       ├── code-viewer.yml          # Bookshop schema for CloudCannon
│       ├── copy-button.astro         # Copy-to-clipboard button component
│       ├── copy-button.yml           # Bookshop schema
│       └── template-list.astro       # Index page template list component
├── layouts/
│   └── Template.astro                # New: Template detail page layout
├── pages/
│   ├── templates/
│   │   ├── index.astro              # New: Templates collection index page
│   │   └── [slug].astro             # New: Individual template detail page
└── styles/
    └── _templates.css                # New: Template-specific styles

.cloudcannon/
└── schemas/
    └── template.md                   # New: CloudCannon schema for templates collection
```

**Structure Decision**: Single Astro project structure. Templates collection will be added to existing `src/content/` directory. New components will be created in `src/components/templates/` following existing component patterns. Pages will follow existing collection page patterns (similar to `personas/` and `blog/` collections).

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| N/A | No violations | All constitution principles are satisfied |

## Phase Completion Status

### Phase 0: Outline & Research ✅ COMPLETE

- [x] Research questions identified and resolved
- [x] Syntax highlighting library selected (shiki)
- [x] Copy functionality approach determined (Alpine.js + Clipboard API)
- [x] Component architecture defined (Bookshop + Alpine.js)
- [x] Testing strategy established
- [x] File organization decided
- [x] Language detection method chosen

**Output**: `research.md` with all clarifications resolved

### Phase 1: Design & Contracts ✅ COMPLETE

- [x] Data model defined (`data-model.md`)
- [x] Component interfaces documented (`contracts/component-interfaces.md`)
- [x] Quickstart guide created (`quickstart.md`)
- [x] Agent context updated (`.cursor/rules/specify-rules.mdc`)
- [x] Constitution Check re-evaluated and passed

**Output**: `data-model.md`, `contracts/`, `quickstart.md`, agent context file

### Phase 2: Task Breakdown ⏳ PENDING

**Next Step**: Run `/speckit.tasks` to generate task breakdown

**Note**: Phase 2 is handled by `/speckit.tasks` command, not `/speckit.plan`
