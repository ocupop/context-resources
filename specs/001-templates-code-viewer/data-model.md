# Data Model: Templates Code Viewer Collection

**Feature**: Templates Code Viewer Collection  
**Date**: 2025-01-27  
**Phase**: Phase 1 - Design

## Entities

### Template

**Description**: A template file in the templates collection containing template content (frontmatter and body).

**Source**: File-based content in `src/content/templates/` directory

**Attributes**:
- `slug` (string, required): Unique identifier derived from filename
- `title` (string, required): Template title from frontmatter
- `body` (string, required): Raw template content (markdown/text)
- `fileExtension` (string, derived): File extension (`.md`, `.yml`, etc.) for language detection
- `rawContent` (string, derived): Complete file content including frontmatter
- `highlightedContent` (string, derived): HTML with syntax highlighting applied
- `seo` (object, optional): SEO metadata from frontmatter
  - `page_description` (string, optional)
  - `canonical_url` (string, optional)
  - `featured_image` (string, optional)
  - `featured_image_alt` (string, optional)
  - `open_graph_type` (string, optional)
  - `no_index` (boolean, optional)

**Relationships**:
- Belongs to `TemplateCollection`
- Referenced by `TemplateIndexPage` (many-to-one)
- Referenced by `TemplateDetailPage` (one-to-one)

**Validation Rules**:
- `title` must be non-empty string
- `slug` must be unique within collection
- `body` must be valid UTF-8 text
- File extension must be recognized format (`.md`, `.yml`, `.yaml`, `.json`, `.txt`)

**State Transitions**: N/A (static content, no state changes)

### TemplateCollection

**Description**: Astro content collection that groups all template files together.

**Source**: Defined in `src/content/config.ts` via `defineCollection()`

**Attributes**:
- `name` (string, constant): "templates"
- `entries` (array of Template, derived): All templates in collection
- `count` (number, derived): Total number of templates

**Relationships**:
- Contains many `Template` entries
- Used by `TemplateIndexPage` for listing

**Validation Rules**:
- Collection must be properly configured in Astro config
- All entries must have unique slugs

**State Transitions**: N/A (static collection, populated at build time)

## Data Flow

### Template Loading Flow

```
1. Astro build process scans src/content/templates/
2. Files parsed and validated against collection schema
3. Template entries created with slug, title, body
4. File extension extracted from slug
5. Raw content (frontmatter + body) assembled
6. Syntax highlighting applied via Shiki (build time)
7. Highlighted HTML stored in component props
8. Template rendered to static HTML
```

### Template Display Flow

```
1. User navigates to /templates/[slug]
2. Astro getStaticPaths() generates routes for all templates
3. getEntry("templates", slug) retrieves template
4. Template component receives template data
5. Highlighted code displayed in <pre><code> block
6. Copy button initialized with Alpine.js
7. User clicks copy button
8. Clipboard API copies rawContent to clipboard
9. Visual feedback displayed to user
```

## Schema Definitions

### Astro Content Collection Schema

```typescript
// src/content/config.ts
const templatesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    seo: seoSchema.optional(),
  }),
});
```

### Template Component Props

```typescript
interface TemplateProps {
  template: CollectionEntry<"templates">;
  highlightedContent: string;
  rawContent: string;
  language: string;
}
```

### Copy Button Component Props

```typescript
interface CopyButtonProps {
  content: string;
  label?: string;
  successMessage?: string;
  errorMessage?: string;
}
```

## Data Transformations

### Frontmatter + Body → Raw Content

**Input**: Astro `CollectionEntry` with `data` (frontmatter) and `body` (content)

**Process**:
1. Serialize frontmatter to YAML format
2. Combine with `---` delimiters
3. Append body content
4. Preserve original formatting and line breaks

**Output**: Complete file content as string

### Raw Content → Highlighted HTML

**Input**: Raw content string, file extension

**Process**:
1. Detect language from file extension
2. Pass to Shiki `codeToHtml()` function
3. Apply syntax highlighting
4. Generate HTML with inline styles

**Output**: HTML string with syntax highlighting

### File Extension → Language Identifier

**Mapping**:
- `.md` → `markdown`
- `.yml`, `.yaml` → `yaml`
- `.json` → `json`
- `.txt` → `plaintext`
- Default → `markdown`

## Edge Cases

### Empty or Whitespace-Only Files

**Handling**: Display empty code block with message "Template file is empty"

### Very Long Content (>1000 lines)

**Handling**: Display full content (no truncation initially). Future enhancement: virtual scrolling or pagination.

### Invalid Frontmatter

**Handling**: Astro schema validation will catch at build time. Display error message if validation fails.

### Unrecognized File Extension

**Handling**: Default to `markdown` language highlighting. Display warning in development mode.

### Encoding Issues

**Handling**: Ensure UTF-8 encoding. Display error message if encoding cannot be determined.

### Missing Template File

**Handling**: 404 page (Astro's default behavior for missing entries)

## Data Persistence

**Storage**: File-based (Git repository)

**Backup**: Git version control

**Sync**: CloudCannon CMS syncs with Git repository

**No database required** - all data is static files

