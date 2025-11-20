<!--
Sync Impact Report:
Version: 1.0.0 (initial creation)
Changes:
- Initial constitution creation from template
- Derived 5 core principles from project context
- Added Development Workflow and Quality Standards sections
- Templates: All templates reviewed and aligned
  ✅ plan-template.md - Constitution Check section exists
  ✅ spec-template.md - No changes needed
  ✅ tasks-template.md - No changes needed
  ✅ All command files reference constitution correctly
-->

# Context Resources Starter Constitution

## Core Principles

### I. Content-First Architecture
Every feature MUST prioritize content structure and accessibility over implementation details. Content collections define the data model; components serve content, not the reverse. CloudCannon CMS integration is non-negotiable for all content types. Content MUST be structured for multiple audiences (public, private, agentic) with clear access boundaries. MDX and Markdown are primary content formats; JSON data files provide configuration and design tokens.

**Rationale**: This is a documentation and brand playbook site. Content is the product, and the architecture must serve content creators and consumers across different access levels.

### II. Design System Compliance (NON-NEGOTIABLE)
All design decisions MUST align with Ocupop design principles documented in `docs/design/ocupop-design-principles.md`. Components MUST follow established design tokens (colors, typography, spacing) from `data/` files. Accessibility standards (WCAG AA minimum, AAA preferred) are mandatory for all UI components. Design agent system (Brand Guardian, Creative Director, Art Director, UI Analyzer, Accessibility Champion) MUST be consulted for all visual implementations.

**Rationale**: Brand consistency and accessibility are core to Ocupop's design philosophy. The design system ensures quality and maintains brand integrity across all deliverables.

### III. Component Reusability & Bookshop Integration
All UI components MUST be created as Bookshop components with corresponding `.yml` schema files for CloudCannon editing. Components MUST be self-contained, independently testable, and documented. Component schemas MUST define all editable properties, default values, and validation rules. Shared components live in `src/components/`; component-specific assets co-located with component files.

**Rationale**: Bookshop enables visual editing in CloudCannon while maintaining code quality. Reusable components reduce duplication and ensure consistency across the site.

### IV. Multi-Audience Content Strategy
Content MUST be structured to serve three distinct audiences: public (external stakeholders), private (internal/client teams), and agentic (AI agents and automated systems). Access control and content organization MUST reflect these audience boundaries. Agentic content MUST include structured metadata, clear schemas, and machine-readable formats. Public content MUST be optimized for human readability and SEO.

**Rationale**: The site serves diverse audiences with different needs. Content structure must accommodate all three without compromising any single audience's experience.

### V. Performance & Accessibility Standards
All pages MUST load in under 3 seconds on 3G connections. Images MUST be optimized and use appropriate formats (WebP, AVIF when supported). All interactive elements MUST meet WCAG AA minimum standards with AAA preferred. Keyboard navigation MUST be fully functional. Screen reader compatibility MUST be tested for all new components. Animation MUST respect `prefers-reduced-motion` media query.

**Rationale**: Performance and accessibility are not optional features—they are fundamental requirements for inclusive, usable documentation that serves all audiences effectively.

## Development Workflow

### Content Management
- Content collections defined in `src/content/config.ts`
- CloudCannon schemas in `.cloudcannon/schemas/`
- Data files (colors, navigation, icons) in `data/` directory
- All content changes tracked in Git (CloudCannon Git-backed CMS)

### Component Development
- New components created via `npm run new-component` or manually with Bookshop structure
- Component schemas required for CloudCannon visual editing
- Components must include TypeScript types and JSDoc documentation
- Component styles use Tailwind CSS with design token references

### Design Agent Integration
- Use `/design.workflow [feature-name]` for complete design validation
- Brand Guardian validates brand compliance before commits
- UI Analyzer performs automated testing with Playwright
- Accessibility Champion ensures WCAG compliance

## Quality Standards

### Code Quality
- TypeScript strict mode enabled
- ESLint and Prettier configured and enforced
- All components must pass Astro's built-in checks
- No console.log statements in production code

### Testing Requirements
- Visual regression testing for component changes
- Accessibility testing via automated tools and manual review
- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Mobile responsiveness validation (320px to 2560px widths)

### Documentation Standards
- All components must include usage examples
- Design tokens must be documented in `data/` files
- README must be kept current with setup and usage instructions
- Design principles and agent documentation in `docs/design/`

## Governance

This constitution supersedes all other development practices and guidelines. Amendments require:
1. Documentation of the change rationale
2. Impact assessment on existing features and templates
3. Update to all dependent templates and command files
4. Version increment following semantic versioning (MAJOR.MINOR.PATCH)
5. Update to Sync Impact Report in constitution header

All PRs and code reviews MUST verify compliance with constitution principles. Violations must be justified in Complexity Tracking section of implementation plans, or the design must be adjusted to comply.

Complexity that violates principles requires explicit justification: what simpler alternative was rejected and why it was insufficient. Constitution principles are non-negotiable unless the constitution itself is amended.

**Version**: 1.0.0 | **Ratified**: 2025-01-27 | **Last Amended**: 2025-01-27
