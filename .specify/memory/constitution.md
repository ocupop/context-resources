<!--
Sync Impact Report:
Version: 0.0.0 → 1.0.0 (Initial creation)
Modified principles: N/A (new constitution)
Added sections: Core Principles (6), Design Standards, Development Workflow, Governance
Removed sections: N/A
Templates requiring updates:
  ✅ .specify/templates/plan-template.md - Constitution Check section aligns with principles
  ✅ .specify/templates/spec-template.md - No changes needed (already references constitution)
  ✅ .specify/templates/tasks-template.md - No changes needed (task structure aligns)
  ⚠️ .cursor/commands/*.md - Review for agent-specific references (deferred - internal commands)
Follow-up TODOs:
  - TODO(RATIFICATION_DATE): Original ratification date unknown - set when project officially adopted constitution
-->

# SDG Context & Resources Constitution

## Core Principles

### I. Design Agent System (NON-NEGOTIABLE)
All design work MUST pass through the Design Agent System before implementation. The workflow command `/design.workflow [feature-name]` must be executed for new features, components, or significant design changes. This ensures strategic alignment, brand compliance, technical validation, and accessibility. Design agents provide autonomous validation and cannot be bypassed. Rationale: Maintains design quality, brand consistency, and ensures all work aligns with SDG platform requirements and Ocupop design principles.

### II. Brand Compliance
All components, pages, and design decisions MUST align with established brand guidelines and design tokens. Design tokens (colors, typography, spacing) defined in `data/colors.json` and design system documentation MUST be used—no hardcoded values. Brand Guardian agent validates compliance before commits. Rationale: Ensures visual consistency across the SDG supplier assessment platform and maintains brand integrity.

### III. Accessibility First (NON-NEGOTIABLE)
All features MUST meet WCAG 2.1 Level AA minimum standards. Accessibility Champion agent validates compliance before merging. Keyboard navigation, screen reader compatibility, color contrast ratios, and focus indicators are mandatory. Rationale: Inclusive design is fundamental—the platform serves diverse users including CSOs, Sustainability Managers, and small business owners who may have varying accessibility needs.

### IV. Persona-Driven Development
All features MUST consider relevant user personas documented in `src/content/personas/`. Design decisions must reference persona goals, pain points, technology profiles, and accessibility needs. The seven active personas (CSO, Sustainability Manager, Procurement Manager, Small Business Owner, System Administrator, Scoring Insight Agent, Sales Operations Manager) represent real users of the supplier assessment platform. Rationale: Ensures features serve actual user needs and maintain alignment with platform goals.

### V. Living Documentation
Documentation MUST be kept current and accessible. Personas, design tokens, brand guidelines, and component documentation are living resources that evolve with the platform. All changes to design system, personas, or brand guidelines must be reflected in documentation immediately. CloudCannon CMS enables non-technical team members to maintain content. Rationale: This site serves as the single source of truth for platform context—outdated documentation breaks trust and hinders development.

### VI. Design System Consistency
All UI components MUST use design tokens from the established system. Colors from `data/colors.json`, typography from `src/styles/main.css`, spacing from Tailwind configuration. Custom components must follow Bookshop schema patterns and be validated through Brand Guardian. Rationale: Maintains visual harmony, enables efficient development, and ensures components work together as a cohesive system.

## Design Standards

All design work must align with Ocupop Design Principles documented in `docs/design/ocupop-design-principles.md`:

- **Purpose Over Polish**: Every design decision serves a clear functional purpose
- **Authentic Communication**: Design with honesty and directness
- **Human-Centered Simplicity**: Complex problems deserve elegant solutions
- **Bold Clarity**: Make confident design choices
- **Inclusive by Default**: Design for everyone from the start

Design tokens (colors, typography, spacing) are defined in project data files and stylesheets. Changes to design tokens require Brand Guardian validation to ensure consistency across the platform.

## Development Workflow

### Feature Development Process
1. **Creative Director** → Strategic approach and user experience priorities
2. **Art Director** → Visual execution and component aesthetics
3. **Brand Guardian** → Compliance check against brand guidelines
4. **UI Analyzer** → Automated testing and technical validation
5. **Accessibility Champion** → WCAG validation and inclusive design review

### Quality Gates
- All new components must pass Design Agent System workflow
- All code changes must maintain brand compliance (validated by Brand Guardian)
- All features must meet WCAG AA standards (validated by Accessibility Champion)
- All design decisions must reference relevant personas
- All documentation updates must be reflected immediately

### Component Creation
New Bookshop components must:
1. Use `npm run new-component` generator or follow established patterns
2. Include proper schema files (`.yml`)
3. Pass Design Agent System workflow before use
4. Use design tokens (no hardcoded values)
5. Be documented with usage guidelines

## Governance

This constitution supersedes all other development practices. Amendments require:
1. Documentation of the change rationale
2. Update to this constitution file with version increment
3. Propagation of changes to dependent templates and documentation
4. Team review and approval

**Compliance**: All PRs and code reviews MUST verify compliance with these principles. The Design Agent System provides automated validation, but manual review is also required. Complexity must be justified—simpler solutions are preferred unless complexity serves a clear user need.

**Version Control**: Constitution changes follow semantic versioning:
- **MAJOR**: Backward incompatible principle removals or redefinitions
- **MINOR**: New principle/section added or materially expanded guidance
- **PATCH**: Clarifications, wording improvements, typo fixes

**Review Process**: Constitution compliance is checked during:
- Feature specification review (spec.md)
- Implementation plan review (plan.md)
- Code review process
- Design agent workflow execution

For runtime development guidance, see `README.md` and `docs/design/AGENTS.md`.

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE): Set when project officially adopts this constitution | **Last Amended**: 2025-01-27
