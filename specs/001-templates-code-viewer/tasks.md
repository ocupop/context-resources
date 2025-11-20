# Tasks: Templates Code Viewer Collection

**Input**: Design documents from `/specs/001-templates-code-viewer/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

**Tests**: No test tasks included (not requested in specification)

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- Single Astro project structure: `src/`, `.cloudcannon/` at repository root
- All paths are relative to repository root

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Install dependencies and create directory structure

- [x] T001 Install shiki as dev dependency via `npm install -D shiki`
- [x] T002 [P] Create templates component directory at `src/components/templates/`
- [x] T003 [P] Create templates content directory at `src/content/templates/`
- [x] T004 [P] Create templates page directory at `src/pages/templates/`
- [x] T005 [P] Create templates styles file at `src/styles/_templates.css`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core collection configuration that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T006 Move existing template files from `src/content/pages/templates/` to `src/content/templates/` (stakeholder-interview.md, brand-guidelines.md, project-design-requirements.md)
- [x] T007 Add templates collection definition to `src/content/config.ts` (import defineCollection and z, define templatesCollection schema with title and seo fields)
- [x] T008 Export templates collection in collections object in `src/content/config.ts`
- [x] T009 Add templates collection configuration to `cloudcannon.config.yml` (path, glob, url, icon, editors, schemas)
- [x] T010 Create CloudCannon schema file at `.cloudcannon/schemas/template.md` with title and seo inputs

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - View Template as Code (Priority: P1) 🎯 MVP

**Goal**: Display template content as syntax-highlighted code snippets on template detail pages

**Independent Test**: Navigate to any template page (e.g., `/templates/stakeholder-interview`) and verify the template content is displayed as a highlighted code block with proper formatting and syntax highlighting applied

### Implementation for User Story 1

- [x] T011 [P] [US1] Create CodeViewer component at `src/components/templates/code-viewer.astro` (import shiki codeToHtml, accept content/language/highlightedHtml props, render pre/code block with syntax highlighting)
- [x] T012 [P] [US1] Create Bookshop schema for CodeViewer at `src/components/templates/code-viewer.yml` (define component_name, preview, definitions, named_args for show_line_numbers and max_height)
- [x] T013 [US1] Create Template layout at `src/layouts/Template.astro` (import Layout, CodeViewer, codeToHtml from shiki, accept frontmatter and template props, extract language from file extension, assemble raw content with frontmatter and body, highlight code, render page with code viewer)
- [x] T014 [US1] Create template detail page at `src/pages/templates/[slug].astro` (implement getStaticPaths using getCollection, retrieve template with getEntry, render TemplateLayout with template data)
- [x] T015 [US1] Add language detection mapping in Template layout (map file extensions .md to markdown, .yml/.yaml to yaml, .json to json, .txt to plaintext, default to markdown)
- [x] T016 [US1] Add base styles for code viewer in `src/styles/_templates.css` (styles for .code-viewer, pre, code blocks using design tokens)
- [x] T017 [US1] Import templates styles in main CSS file `src/styles/main.css`

**Checkpoint**: At this point, User Story 1 should be fully functional - users can navigate to template pages and see syntax-highlighted code

---

## Phase 4: User Story 2 - Copy Template Code to Clipboard (Priority: P2)

**Goal**: Add copy-to-clipboard button with visual feedback for easy template reuse

**Independent Test**: Click the copy button on any template page and verify the template content is successfully copied to the clipboard and a confirmation message is displayed

### Implementation for User Story 2

- [x] T018 [P] [US2] Create CopyButton component at `src/components/templates/copy-button.astro` (accept content/label/successMessage/errorMessage props, use Alpine.js x-data with copied/copying/error state, implement copyToClipboard function using navigator.clipboard.writeText, handle errors gracefully, show visual feedback)
- [x] T019 [P] [US2] Create Bookshop schema for CopyButton at `src/components/templates/copy-button.yml` (define component_name, preview, definitions, named_args for label and success_message)
- [x] T020 [US2] Import CopyButton component in Template layout at `src/layouts/Template.astro`
- [x] T021 [US2] Add CopyButton to template-actions section in Template layout with rawContent prop
- [x] T022 [US2] Add styles for copy button in `src/styles/_templates.css` (button styling, hover states, focus states for accessibility)
- [x] T023 [US2] Add ARIA labels and keyboard accessibility attributes to CopyButton component (aria-label for screen readers, ensure Enter/Space activation)

**Checkpoint**: At this point, User Stories 1 AND 2 should both work - users can view templates and copy them to clipboard

---

## Phase 5: User Story 3 - Browse Templates Collection Index (Priority: P3)

**Goal**: Create index page for template discovery and navigation

**Independent Test**: Navigate to `/templates` and verify all templates are listed with titles and links to individual template pages

### Implementation for User Story 3

- [x] T024 [P] [US3] Create TemplateList component at `src/components/templates/template-list.astro` (accept templates/layout/showMetadata props, render list or grid of template links with titles, add semantic HTML with ul element)
- [x] T025 [US3] Create templates index page at `src/pages/templates/index.astro` (import Layout and getCollection, fetch all templates with getCollection("templates"), render page with template list, add h1 heading)
- [x] T026 [US3] Add styles for template list in `src/styles/_templates.css` (styles for .templates-index, .template-list, list items, links)
- [x] T027 [US3] Add metadata display to TemplateList component (show template title from frontmatter, optionally show description if available)
- [x] T028 [US3] Ensure keyboard navigation works for template links (proper focus states, tab order)

**Checkpoint**: All user stories should now be independently functional - users can browse, view, and copy templates

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories and final quality checks

- [x] T029 [P] Apply design tokens from `data/colors.json` to code viewer and button styles in `src/styles/_templates.css` (replace hardcoded colors with CSS variables)
- [x] T030 [P] Add responsive design styles for mobile devices in `src/styles/_templates.css` (ensure code blocks scroll horizontally, buttons are touch-friendly, template list displays well on small screens)
- [ ] T031 Test accessibility with Lighthouse (target: 100 accessibility score, verify WCAG AA compliance) - **MANUAL TEST** - See TESTING.md
- [ ] T032 Test copy functionality across browsers (Chrome, Firefox, Safari, Edge) - **MANUAL TEST** - See TESTING.md (Fallback implemented)
- [ ] T033 Verify syntax highlighting works for all template file types (markdown, yaml, json) - **MANUAL TEST** - See TESTING.md (Implementation complete)
- [x] T034 Test with very long template content (>1000 lines) and verify scrolling works (test-long-content.md created)
- [x] T035 Test with empty template files and verify graceful handling (test-empty.md created)
- [x] T036 [P] Add error handling for invalid frontmatter in Template layout (catch schema validation errors, display user-friendly error message)
- [x] T037 [P] Add fallback for clipboard API on non-HTTPS contexts in CopyButton (implement document.execCommand as fallback if navigator.clipboard not available)
- [ ] T038 Verify page load performance meets <2 second requirement from success criteria - **MANUAL TEST** - See TESTING.md
- [ ] T039 Test keyboard-only navigation through all templates pages (ensure all interactive elements accessible via keyboard) - **MANUAL TEST** - See TESTING.md (Implementation complete)
- [ ] T040 Test with screen reader (NVDA, JAWS, or VoiceOver) and verify code blocks and buttons are properly announced - **MANUAL TEST** - See TESTING.md (ARIA labels implemented)
- [x] T041 Run build command `npm run build` and verify no errors
- [x] T042 Validate all templates are correctly generated in build output

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-5)**: All depend on Foundational phase completion
  - User Story 1 (Phase 3): Can start after Foundational - No dependencies on other stories
  - User Story 2 (Phase 4): Can start after Foundational - Integrates with US1 but US1 doesn't need to be complete
  - User Story 3 (Phase 5): Can start after Foundational - Independent of US1/US2
- **Polish (Phase 6)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories - **THIS IS THE MVP**
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - Adds to US1 pages but doesn't require US1 completion
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - Completely independent, just lists templates

### Within Each User Story

**User Story 1**:
- T011 and T012 (CodeViewer component + schema) can run in parallel
- T013 (Template layout) depends on T011 (needs CodeViewer component)
- T014 (detail page) depends on T013 (needs Template layout)
- T016 and T017 (styles) can run anytime after T011

**User Story 2**:
- T018 and T019 (CopyButton component + schema) can run in parallel
- T020-T023 must run sequentially (integrate button into layout, then add styles and accessibility)

**User Story 3**:
- T024 (TemplateList component) can start immediately after Phase 2
- T025 (index page) depends on T024 (needs TemplateList component)
- T026-T028 (styles, metadata, keyboard nav) can proceed after T025

### Parallel Opportunities

- **Phase 1 Setup**: T002, T003, T004, T005 can all run in parallel (different directories)
- **Phase 3 US1**: T011 and T012 can run in parallel (component + schema)
- **Phase 4 US2**: T018 and T019 can run in parallel (component + schema)
- **Phase 6 Polish**: T029, T030, T036, T037 can run in parallel (different concerns)
- **Different user stories can be worked on in parallel** by different developers once Phase 2 is complete

---

## Parallel Example: User Story 1

```bash
# Launch component and schema together:
Task T011: "Create CodeViewer component at src/components/templates/code-viewer.astro"
Task T012: "Create Bookshop schema for CodeViewer at src/components/templates/code-viewer.yml"

# Then after those complete, proceed with layout and pages sequentially
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (T001-T005)
2. Complete Phase 2: Foundational (T006-T010) - **CRITICAL - blocks all stories**
3. Complete Phase 3: User Story 1 (T011-T017)
4. **STOP and VALIDATE**: 
   - Build the site: `npm run build`
   - Test template detail pages manually
   - Verify syntax highlighting works
   - Check accessibility with Lighthouse
5. Deploy/demo MVP if ready

### Incremental Delivery

1. Complete Setup + Foundational (T001-T010) → Foundation ready
2. Add User Story 1 (T011-T017) → Test independently → **Deploy MVP!**
3. Add User Story 2 (T018-T023) → Test copy functionality → **Deploy v2**
4. Add User Story 3 (T024-T028) → Test index page → **Deploy v3**
5. Complete Polish (T029-T042) → Final testing → **Deploy production**

Each increment adds value without breaking previous functionality.

### Parallel Team Strategy

With multiple developers:

1. **Together**: Complete Setup (Phase 1) + Foundational (Phase 2)
2. **Once Foundational is done**:
   - Developer A: User Story 1 (T011-T017) - Core viewing functionality
   - Developer B: User Story 2 (T018-T023) - Copy button (can start even if US1 not done)
   - Developer C: User Story 3 (T024-T028) - Index page (independent)
3. **Merge and test**: Each story integrates smoothly
4. **Together**: Polish phase (T029-T042)

---

## Task Summary

**Total Tasks**: 42

**By Phase**:
- Setup: 5 tasks
- Foundational: 5 tasks (BLOCKING)
- User Story 1 (P1): 7 tasks
- User Story 2 (P2): 6 tasks
- User Story 3 (P3): 5 tasks
- Polish: 14 tasks

**By Priority**:
- Must-have (US1 - MVP): 17 tasks (Setup + Foundational + US1)
- Should-have (US2): 6 tasks
- Nice-to-have (US3): 5 tasks
- Polish: 14 tasks

**Parallel Opportunities**: 12 tasks marked [P] can run in parallel

**MVP Scope**: Complete Phases 1-3 only (T001-T017) for minimum viable product

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Foundational phase (T006-T010) is critical - must complete before any user story work
- Tests not included as they were not requested in specification
- Manual testing checklist available in quickstart.md
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence

