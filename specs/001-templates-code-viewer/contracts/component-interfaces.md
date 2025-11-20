# Component Interfaces: Templates Code Viewer Collection

**Feature**: Templates Code Viewer Collection  
**Date**: 2025-01-27  
**Phase**: Phase 1 - Design

## Component Contracts

### CodeViewer Component

**File**: `src/components/templates/code-viewer.astro`

**Props Interface**:
```typescript
interface CodeViewerProps {
  content: string;           // Raw template content (frontmatter + body)
  language: string;          // Language identifier for syntax highlighting
  highlightedHtml?: string;  // Pre-highlighted HTML (optional, will highlight if not provided)
  showLineNumbers?: boolean; // Display line numbers (default: false)
  maxHeight?: string;        // Maximum height with scroll (default: none)
}
```

**Output**: Renders `<pre><code>` block with syntax highlighting

**Accessibility Requirements**:
- `<pre>` element with `role="textbox"` and `aria-label="Template code"`
- Keyboard accessible (tab navigation)
- Screen reader announces code block

**Styling**: Uses design tokens from `data/colors.json` for code block colors

### CopyButton Component

**File**: `src/components/templates/copy-button.astro`

**Props Interface**:
```typescript
interface CopyButtonProps {
  content: string;              // Content to copy to clipboard
  label?: string;               // Button label (default: "Copy")
  successMessage?: string;      // Success feedback message (default: "Copied!")
  errorMessage?: string;        // Error feedback message (default: "Failed to copy")
  ariaLabel?: string;          // ARIA label (default: "Copy template code to clipboard")
}
```

**Behavior**:
- Uses Alpine.js for interactivity
- Calls `navigator.clipboard.writeText(content)`
- Shows visual feedback on success/error
- Handles clipboard API errors gracefully

**Accessibility Requirements**:
- Button element with proper ARIA labels
- Keyboard accessible (Enter/Space activation)
- Focus visible state
- Screen reader announces state changes

### TemplateList Component

**File**: `src/components/templates/template-list.astro`

**Props Interface**:
```typescript
interface TemplateListProps {
  templates: CollectionEntry<"templates">[];
  layout?: "grid" | "list";    // Display layout (default: "list")
  showMetadata?: boolean;       // Show template metadata (default: true)
}
```

**Output**: Renders list or grid of template links

**Accessibility Requirements**:
- Semantic HTML (`<ul>` or grid with proper roles)
- Each template link has descriptive text
- Keyboard navigable

### TemplateLayout Component

**File**: `src/layouts/Template.astro`

**Props Interface**:
```typescript
interface TemplateLayoutProps {
  frontmatter: {
    title: string;
    seo?: SEOProps;
  };
  template: CollectionEntry<"templates">;
  highlightedContent: string;
  rawContent: string;
}
```

**Output**: Full page layout with template code viewer

**Structure**:
- Uses base `Layout.astro` component
- Includes SEO metadata
- Renders `CodeViewer` component
- Includes `CopyButton` component

## Astro Content Collection API

### Collection Definition

**File**: `src/content/config.ts`

```typescript
const templatesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    seo: seoSchema.optional(),
  }),
});
```

### Collection Usage

**Get All Templates**:
```typescript
const templates = await getCollection("templates");
```

**Get Single Template**:
```typescript
const template = await getEntry("templates", slug);
```

**Get Static Paths**:
```typescript
export async function getStaticPaths() {
  const templates = await getCollection("templates");
  return templates.map((template) => ({
    params: { slug: template.slug },
    props: { template },
  }));
}
```

## CloudCannon Configuration

### Collection Config

**File**: `cloudcannon.config.yml`

```yaml
collections_config:
  templates:
    path: src/content/templates
    glob:
      - '**/*.md'
    url: '/templates/[full_slug]/'
    icon: description
    _enabled_editors:
      - visual
      - content
    schemas:
      default:
        name: Template
        path: '.cloudcannon/schemas/template.md'
        remove_extra_inputs: false
```

### Schema File

**File**: `.cloudcannon/schemas/template.md`

```yaml
title:
  type: text
  comment: Template title
seo:
  type: object
  comment: SEO metadata
```

## Bookshop Component Schemas

### CodeViewer Schema

**File**: `src/components/templates/code-viewer.yml`

```yaml
component_name: TemplatesCodeViewer
preview:
  text: Code Viewer
  icon: code
definitions:
  component_name: TemplatesCodeViewer
  named_args:
    - editor_key: show_line_numbers
      type: boolean
    - editor_key: max_height
      type: string
_inputs:
  show_line_numbers:
    type: checkbox
    comment: Display line numbers
  max_height:
    type: text
    comment: Maximum height (e.g., "500px")
```

### CopyButton Schema

**File**: `src/components/templates/copy-button.yml`

```yaml
component_name: TemplatesCopyButton
preview:
  text: Copy Button
  icon: content_copy
definitions:
  component_name: TemplatesCopyButton
  named_args:
    - editor_key: label
      type: string
    - editor_key: success_message
      type: string
_inputs:
  label:
    type: text
    comment: Button label
  success_message:
    type: text
    comment: Success feedback message
```

## Alpine.js Data Contracts

### Copy Button Alpine Data

```javascript
{
  copied: false,
  copying: false,
  error: false,
  async copyToClipboard(content) {
    this.copying = true;
    this.error = false;
    try {
      await navigator.clipboard.writeText(content);
      this.copied = true;
      setTimeout(() => { this.copied = false; }, 2000);
    } catch (err) {
      this.error = true;
      // Fallback to document.execCommand if needed
    } finally {
      this.copying = false;
    }
  }
}
```

## Error Handling Contracts

### Clipboard API Errors

**Error Types**:
- `NotAllowedError`: User denied clipboard permission
- `NotFoundError`: Clipboard unavailable
- `SecurityError`: Non-HTTPS context

**Handling**:
- Display user-friendly error message
- Log error for debugging
- Provide fallback option if available

### Template Loading Errors

**Error Types**:
- Template not found (404)
- Invalid frontmatter (schema validation error)
- Encoding error

**Handling**:
- 404: Show Astro's default 404 page
- Validation: Show error message in development, fail build in production
- Encoding: Display error message, attempt UTF-8 recovery

## Performance Contracts

### Build Time

- Syntax highlighting: <100ms per template file
- Total build time increase: <1 second for 10 templates

### Runtime

- Page load: <2 seconds (per spec SC-001)
- Copy operation: <1 second (per spec SC-002)
- Code block render: <100ms (client-side)

## Testing Contracts

### Unit Test Contracts

- Component renders with valid props
- Component handles missing props gracefully
- Error states display correctly

### Integration Test Contracts

- Collection loads all templates
- Template detail pages render correctly
- Copy functionality works in test environment

### Accessibility Test Contracts

- All interactive elements keyboard accessible
- Screen reader announces code blocks
- Color contrast meets WCAG AA standards

