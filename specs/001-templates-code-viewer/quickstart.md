# Quickstart Guide: Templates Code Viewer Collection

**Feature**: Templates Code Viewer Collection  
**Date**: 2025-01-27  
**Phase**: Phase 1 - Design

## Overview

This guide provides step-by-step instructions for implementing the Templates Code Viewer Collection feature. Follow these steps in order to set up the new collection, create components, and implement the code viewing functionality.

## Prerequisites

- Astro 5.1.10+
- Node.js 18+
- Existing project structure with content collections
- CloudCannon CMS configured (optional but recommended)

## Step 1: Install Dependencies

```bash
npm install -D shiki
```

**Note**: `shiki` is a dev dependency because syntax highlighting happens at build time.

## Step 2: Create Templates Collection

### 2.1 Create Collection Directory

```bash
mkdir -p src/content/templates
```

### 2.2 Move Existing Templates

```bash
# Move templates from pages/templates to content/templates
mv src/content/pages/templates/*.md src/content/templates/
```

### 2.3 Define Collection Schema

Edit `src/content/config.ts`:

```typescript
import { defineCollection, z } from "astro:content";

// ... existing schemas ...

const templatesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    seo: seoSchema.optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  pages: pagesCollection,
  personas: personasCollection,
  templates: templatesCollection, // Add this line
};
```

## Step 3: Create Code Viewer Component

### 3.1 Create Component Directory

```bash
mkdir -p src/components/templates
```

### 3.2 Create Code Viewer Component

Create `src/components/templates/code-viewer.astro`:

```astro
---
import { codeToHtml } from 'shiki';

interface Props {
  content: string;
  language: string;
  highlightedHtml?: string;
}

const { content, language, highlightedHtml } = Astro.props;

// Highlight code if not already highlighted
let html = highlightedHtml;
if (!html) {
  html = await codeToHtml(content, {
    lang: language,
    theme: 'github-light', // Use design system theme
  });
}
---

<div class="code-viewer">
  <pre><code set:html={html}></code></pre>
</div>

<style>
  .code-viewer {
    margin: 1.5rem 0;
  }
  .code-viewer pre {
    padding: 1rem;
    border-radius: 8px;
    overflow-x: auto;
  }
</style>
```

### 3.3 Create Bookshop Schema

Create `src/components/templates/code-viewer.yml`:

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
_inputs:
  show_line_numbers:
    type: checkbox
    comment: Display line numbers
```

## Step 4: Create Copy Button Component

### 4.1 Create Copy Button Component

Create `src/components/templates/copy-button.astro`:

```astro
---
interface Props {
  content: string;
  label?: string;
  successMessage?: string;
}

const { content, label = "Copy", successMessage = "Copied!" } = Astro.props;
---

<button
  type="button"
  x-data="{ copied: false, async copy() { await navigator.clipboard.writeText($content); this.copied = true; setTimeout(() => this.copied = false, 2000); } }"
  x-on:click="copy()"
  x-text="copied ? $successMessage : $label"
  aria-label="Copy template code to clipboard"
  class="copy-button"
>
  {label}
</button>

<style>
  .copy-button {
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: white;
    cursor: pointer;
  }
  .copy-button:hover {
    background: #f5f5f5;
  }
</style>
```

### 4.2 Create Bookshop Schema

Create `src/components/templates/copy-button.yml`:

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
_inputs:
  label:
    type: text
    comment: Button label
```

## Step 5: Create Template Layout

### 5.1 Create Template Layout

Create `src/layouts/Template.astro`:

```astro
---
import Layout, { type SEOProps } from "./Layout.astro";
import CodeViewer from "../components/templates/code-viewer.astro";
import CopyButton from "../components/templates/copy-button.astro";
import { codeToHtml } from 'shiki';
import type { CollectionEntry } from "astro:content";

interface Props {
  frontmatter: {
    title: string;
    seo?: SEOProps;
  };
  template: CollectionEntry<"templates">;
}

const { frontmatter, template } = Astro.props;

// Get file extension from slug
const fileExtension = template.slug.split('.').pop() || 'md';
const languageMap: Record<string, string> = {
  'md': 'markdown',
  'yml': 'yaml',
  'yaml': 'yaml',
  'json': 'json',
  'txt': 'plaintext',
};
const language = languageMap[fileExtension] || 'markdown';

// Get raw content (frontmatter + body)
const rawContent = `---\n${JSON.stringify(template.data, null, 2)}\n---\n${template.body}`;

// Highlight code
const highlightedContent = await codeToHtml(rawContent, {
  lang: language,
  theme: 'github-light',
});
---

<Layout {...frontmatter}>
  <article class="template-page">
    <h1>{frontmatter.title}</h1>
    <div class="template-actions">
      <CopyButton content={rawContent} />
    </div>
    <CodeViewer content={rawContent} language={language} highlightedHtml={highlightedContent} />
  </article>
</Layout>

<style>
  .template-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: var(--sectionPadding) var(--pagePadding);
  }
  .template-actions {
    margin: 1rem 0;
  }
</style>
```

## Step 6: Create Template Pages

### 6.1 Create Template Detail Page

Create `src/pages/templates/[slug].astro`:

```astro
---
import TemplateLayout from "../../layouts/Template.astro";
import { getCollection, getEntry } from "astro:content";

export async function getStaticPaths() {
  const templates = await getCollection("templates");
  return templates.map((template) => ({
    params: { slug: template.slug },
    props: { template },
  }));
}

if (!Astro.params.slug) {
  throw new Error("Template slug is undefined");
}

const template = await getEntry("templates", Astro.params.slug);
if (!template) {
  throw new Error("Failed to get template with slug: " + Astro.params.slug);
}
---

<TemplateLayout frontmatter={template.data} template={template} />
```

### 6.2 Create Template Index Page

Create `src/pages/templates/index.astro`:

```astro
---
import Layout from "../../layouts/Layout.astro";
import { getCollection } from "astro:content";

const templates = await getCollection("templates");
---

<Layout frontmatter={{ title: "Templates", seo: { page_description: "Browse available templates" } }}>
  <article class="templates-index">
    <h1>Templates</h1>
    <ul class="template-list">
      {templates.map((template) => (
        <li>
          <a href={`/templates/${template.slug}`}>{template.data.title}</a>
        </li>
      ))}
    </ul>
  </article>
</Layout>

<style>
  .templates-index {
    max-width: 1200px;
    margin: 0 auto;
    padding: var(--sectionPadding) var(--pagePadding);
  }
  .template-list {
    list-style: none;
    padding: 0;
  }
  .template-list li {
    margin: 0.5rem 0;
  }
</style>
```

## Step 7: Configure CloudCannon

### 7.1 Update CloudCannon Config

Edit `cloudcannon.config.yml`:

```yaml
collections_config:
  # ... existing collections ...
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

### 7.2 Create CloudCannon Schema

Create `.cloudcannon/schemas/template.md`:

```yaml
---
title:
  type: text
  comment: Template title
seo:
  type: object
  comment: SEO metadata
---
```

## Step 8: Test Implementation

### 8.1 Build and Test

```bash
npm run build
```

Verify:
- Build completes without errors
- All templates are included in build
- Routes are generated correctly

### 8.2 Manual Testing Checklist

- [ ] Navigate to `/templates` - index page displays all templates
- [ ] Click a template - detail page displays with code viewer
- [ ] Verify syntax highlighting is applied
- [ ] Click copy button - content copies to clipboard
- [ ] Verify visual feedback on copy
- [ ] Test keyboard navigation
- [ ] Test on mobile device
- [ ] Test in different browsers (Chrome, Firefox, Safari, Edge)

### 8.3 Accessibility Testing

- [ ] Run Lighthouse accessibility audit (target: 100)
- [ ] Test with screen reader (NVDA, JAWS, or VoiceOver)
- [ ] Verify keyboard-only navigation works
- [ ] Check color contrast ratios

## Step 9: Styling and Design Tokens

### 9.1 Apply Design Tokens

Update component styles to use design tokens from `data/colors.json`:

```astro
<style>
  .code-viewer pre {
    background-color: var(--color-gray-100);
    border: 1px solid var(--color-gray-300);
    /* Use design system colors */
  }
</style>
```

### 9.2 Responsive Design

Ensure code blocks are scrollable on mobile:

```astro
<style>
  .code-viewer pre {
    overflow-x: auto;
    max-width: 100%;
  }
</style>
```

## Troubleshooting

### Build Errors

- **Error**: "Collection 'templates' not found"
  - **Solution**: Verify collection is exported in `src/content/config.ts`

- **Error**: "Shiki theme not found"
  - **Solution**: Use a valid Shiki theme name or install custom theme

### Runtime Errors

- **Copy button doesn't work**
  - **Solution**: Ensure Alpine.js is loaded and Clipboard API is available (HTTPS required)

- **Syntax highlighting not applied**
  - **Solution**: Verify Shiki is installed and language identifier is correct

## Next Steps

After completing this quickstart:

1. Customize syntax highlighting theme to match design system
2. Add line numbers if needed
3. Implement virtual scrolling for very long templates (future enhancement)
4. Add template search/filter functionality (future enhancement)
5. Create template categories/tags (future enhancement)

## References

- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Shiki Documentation](https://shiki.matsu.io/)
- [Alpine.js Documentation](https://alpinejs.dev/)
- [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)

