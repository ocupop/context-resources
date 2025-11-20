# Research: Templates Code Viewer Collection

**Feature**: Templates Code Viewer Collection  
**Date**: 2025-01-27  
**Phase**: Phase 0 - Research

## Research Questions

### 1. Syntax Highlighting Library Choice

**Question**: What syntax highlighting library should be used for displaying template code snippets in Astro?

**Decision**: Use `shiki` for server-side syntax highlighting

**Rationale**: 
- Shiki is the recommended syntax highlighter for Astro (used by Astro's official docs)
- Server-side rendering means no client-side JavaScript bundle for highlighting
- Better performance (highlighting happens at build time, not runtime)
- Supports 200+ languages including markdown, yaml, and common template formats
- Produces HTML with inline styles (no external CSS dependencies)
- Works seamlessly with Astro's static site generation

**Alternatives Considered**:
- **Prism.js**: Client-side, requires JavaScript bundle, less performant
- **highlight.js**: Client-side, larger bundle size, runtime processing
- **rehype-highlight**: Markdown-focused, less flexible for raw file content
- **CodeMirror**: Full editor, overkill for read-only display

**Implementation Notes**:
- Install `shiki` as a dev dependency
- Highlight code at build time in Astro page components
- Store highlighted HTML in component state or pass as props
- Use Shiki's `codeToHtml` function with language detection

### 2. Copy-to-Clipboard Implementation

**Question**: How should copy-to-clipboard functionality be implemented in Astro?

**Decision**: Use native Clipboard API with Alpine.js for interactivity

**Rationale**:
- Native `navigator.clipboard.writeText()` is supported in all modern browsers
- Alpine.js is already in the project dependencies
- Minimal JavaScript footprint (Alpine.js is lightweight)
- Works with Astro's island architecture
- Provides good user feedback capabilities
- Fallback available for older browsers (document.execCommand)

**Alternatives Considered**:
- **React component**: Overkill for simple button, adds React bundle size
- **Vanilla JavaScript**: Works but Alpine.js provides cleaner declarative syntax
- **Web Component**: More complex, not necessary for this use case

**Implementation Notes**:
- Use Alpine.js `x-data` and `x-on:click` for button interaction
- Implement fallback for browsers without Clipboard API support
- Show visual feedback (toast notification or button state change)
- Handle errors gracefully with user-friendly messages

### 3. Component Architecture for Bookshop Integration

**Question**: How to structure code viewer component for CloudCannon Bookshop integration while using client-side interactivity?

**Decision**: Create hybrid component structure with Bookshop wrapper and Alpine.js island

**Rationale**:
- Bookshop components can include client-side JavaScript via Alpine.js
- Code viewer can be a Bookshop component with schema for CloudCannon editing
- Copy button can be a separate Alpine.js component within the code viewer
- Maintains CloudCannon visual editing capabilities
- Follows existing project patterns (other components use Alpine.js)

**Alternatives Considered**:
- **Pure Bookshop component**: Limited interactivity, would require server-side only
- **React component**: Adds unnecessary complexity and bundle size
- **Separate components**: More modular but less cohesive user experience

**Implementation Notes**:
- Create `code-viewer.astro` as Bookshop component with `.yml` schema
- Include Alpine.js directives for copy functionality
- Schema defines editable properties (if any) for CloudCannon
- Component is self-contained and reusable

### 4. Testing Approach

**Question**: What testing strategy should be used for this feature?

**Decision**: Manual testing with automated accessibility checks

**Rationale**:
- Astro static sites are primarily tested through build verification
- Manual testing sufficient for initial implementation (small scope)
- Accessibility testing via automated tools (axe-core, Lighthouse)
- Visual regression testing can be added later if needed
- Integration testing via Astro's build process validates collection structure

**Alternatives Considered**:
- **Unit tests**: Not necessary for Astro components (static rendering)
- **E2E tests**: Overkill for static content display feature
- **Visual regression**: Can be added if design system requires it

**Implementation Notes**:
- Test build process (`npm run build`) validates collection structure
- Manual testing checklist for copy functionality across browsers
- Lighthouse CI for accessibility and performance validation
- Cross-browser manual testing (Chrome, Firefox, Safari, Edge)

### 5. Template File Organization

**Question**: Should templates remain in `src/content/pages/templates/` or move to dedicated `src/content/templates/`?

**Decision**: Move templates to dedicated `src/content/templates/` collection

**Rationale**:
- Creates clear separation between pages and templates
- Follows Astro content collection best practices (one collection per content type)
- Enables collection-specific configuration and routing
- Aligns with feature requirement (FR-001: "new content collection for templates")
- Makes templates discoverable as a distinct content type

**Alternatives Considered**:
- **Keep in pages/templates/**: Would require filtering pages collection, less clean
- **Subdirectory in pages/**: Doesn't create true collection separation

**Implementation Notes**:
- Create `src/content/templates/` directory
- Move existing template files from `src/content/pages/templates/`
- Update `src/content/config.ts` to define templates collection
- Update CloudCannon config to include templates collection

### 6. Syntax Highlighting Language Detection

**Question**: How to determine which language to use for syntax highlighting?

**Decision**: Use file extension and frontmatter metadata

**Rationale**:
- File extension is reliable indicator (`.md` = markdown, `.yml` = yaml)
- Can extract from Astro's `CollectionEntry` slug
- Frontmatter can override if needed (future extensibility)
- Shiki's language detection handles common cases

**Alternatives Considered**:
- **Content analysis**: Unreliable, slower
- **User selection**: Unnecessary complexity for read-only display
- **Default to markdown**: Too limiting, templates may be other formats

**Implementation Notes**:
- Extract file extension from template slug
- Map extensions to Shiki language identifiers
- Default to 'markdown' if extension not recognized
- Support common template formats: markdown, yaml, json, text

## Dependencies to Add

1. **shiki** (dev dependency)
   - Purpose: Server-side syntax highlighting
   - Version: Latest stable (^1.0.0)
   - Usage: Import in Astro components for code highlighting

2. **No new dependencies for copy functionality**
   - Use existing Alpine.js
   - Use native Clipboard API

## Integration Points

1. **Astro Content Collections API**
   - `getCollection("templates")` for index page
   - `getEntry("templates", slug)` for detail pages
   - Collection schema definition in `src/content/config.ts`

2. **CloudCannon CMS**
   - Add templates collection to `cloudcannon.config.yml`
   - Create schema file in `.cloudcannon/schemas/template.md`
   - Enable visual editing for templates (if needed)

3. **Design System**
   - Use design tokens from `data/colors.json` for code block styling
   - Follow typography scale from design principles
   - Ensure WCAG AA contrast ratios for code text

4. **Existing Layouts**
   - Create new `Template.astro` layout similar to `PageMarkdown.astro`
   - Reuse `Layout.astro` base layout for consistency
   - Follow existing page routing patterns

## Performance Considerations

1. **Syntax Highlighting**: Server-side rendering means no client-side performance impact
2. **Code Block Size**: Very long templates (>1000 lines) may need virtualization or pagination (future enhancement)
3. **Copy Functionality**: Minimal JavaScript footprint via Alpine.js
4. **Build Time**: Shiki processing happens at build time, may slightly increase build duration for large templates

## Accessibility Considerations

1. **Code Blocks**: Must be readable with screen readers (proper semantic HTML)
2. **Copy Button**: Must be keyboard accessible and announce state changes
3. **Visual Feedback**: Must meet color contrast requirements
4. **Focus Management**: Copy button must have visible focus states

## Browser Compatibility

1. **Clipboard API**: Supported in all modern browsers (Chrome 66+, Firefox 63+, Safari 13.1+, Edge 79+)
2. **Fallback**: Use `document.execCommand('copy')` for older browsers (if needed)
3. **Alpine.js**: Works in all modern browsers, degrades gracefully

## Next Steps

1. ✅ Syntax highlighting library selected (shiki)
2. ✅ Copy functionality approach determined (Alpine.js + Clipboard API)
3. ✅ Component architecture defined (Bookshop + Alpine.js)
4. ✅ Testing strategy established (manual + automated accessibility)
5. ✅ File organization decided (dedicated templates collection)
6. ✅ Language detection method chosen (file extension)

**All research questions resolved. Ready for Phase 1: Design & Contracts.**

