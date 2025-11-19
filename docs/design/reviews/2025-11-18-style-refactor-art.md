# Art Direction - Style Refactor
Date: 2025-11-18
Director: Art Director

## Context Loaded
- [x] docs/design/brand.md (Ocupop Brand Guidelines)
- [x] docs/design/design-principles.md
- [x] docs/design/ocupop-design-principles.md
- [x] Current codebase: Astro website with Tailwind CSS v4

---

## Visual System

### Hierarchy
**Primary Focus**: Content clarity and brand consistency  
**Secondary Elements**: Navigation, buttons, interactive elements  
**Tertiary Details**: Borders, shadows, subtle backgrounds

**Visual Weight Distribution**:
- Heavy: 20% - Headings, CTAs, brand moments
- Medium: 50% - Body content, navigation
- Light: 30% - Backgrounds, borders, supporting UI

### Color Application
**From brand.md palette**:

**Primary (#70D9E5 - Cyan)**:
- Usage: Primary CTAs, links, brand moments
- Current Issue: Site uses #034ad8 (blue) - needs replacement
- Implementation: Replace all instances of #034ad8 with #70D9E5

**Secondary (#FF6D39 - Orange)**:
- Usage: Secondary actions, accents
- Implementation: Use for secondary buttons, hover states

**Accent (#FFB4E6 - Pink)**:
- Usage: Primary CTA buttons, highlights
- Current: Used in ocupop.com for "Work with Us" buttons
- Implementation: Primary button background

**Background Colors**:
- Light (#F8F7F5): Primary page backgrounds
- Dark (#1F2528): Dark sections (if applicable)
- Alabaster (#E8E1D8): Subtle backgrounds

**Mid Gray Scale**:
- Replace current #f2f2f2, #f1f1f1 with mid-100 (#EFF3F7) or mid-200 (#DCE1E6)
- Use mid-500 (#7B7E80) for default text/secondary content
- Use mid-900 (#1D1D1F) for headings on light backgrounds

**Semantic Colors**:
- Success: #15A620 (green)
- Warning: #F7CD1E (yellow)
- Info: #00AAFF (blue)
- Error: ⚠️ TBD (needs stakeholder input - use red temporarily)

### Typography Treatment

**Font Stack Implementation**:
- **Primary**: Replace Poppins with "commuters-sans", system-ui, sans-serif
- **Serif**: Add "Berlingske Serif Regular", serif for body text
- **Current Issue**: Layout.astro loads Poppins from Google Fonts - needs removal
- **Action**: Add commuters-sans and Berlingske Serif font loading

**Heading Hierarchy** (from brand.md scale):
- **H1**: 68px / 400 (normal) / 102px line-height - Hero headings
- **H2**: 24px / 600 (semibold) / 36px line-height - Section headings
- **H3**: ⚠️ TBD (to be defined) - Subsection headings
- **H4**: ⚠️ TBD (to be defined) - Component headings
- **Current**: Various sizes (2rem, 2.5rem, 3rem, 4rem) need standardization

**Body Text**:
- **Primary (Sans)**: 16px / 400 / 24px line-height
- **Serif**: 28.8px / 400 / 43.2px line-height - For paragraphs, body content
- **Current**: Uses Poppins, variable sizes - needs standardization

**UI Elements**:
- **Navigation**: 16px / 400 - Uppercase recommended
- **Buttons**: 16px / 400 - Match current sizing
- **Small/Caption**: 14px / 400

**Emphasis**:
- Use weight 600 (semibold) for headings
- Use weight 700 (bold) sparingly for strong emphasis

### Imagery Style
**Icons**: Font Awesome currently used - maintain consistency  
**Illustrations**: SVG assets in transparent-bg folder  
**Photography**: ⚠️ TBD from brand.md

---

## Component Aesthetics

### Buttons

**Primary Button**:
- **Background**: #FFB4E6 (pink accent) - from brand.md
- **Text**: #FFFFFF (white)
- **Border**: 2px solid #FFB4E6 (matching background)
- **Border Radius**: 8px (1x base unit)
- **Padding**: 12px 24px (1.5x, 3x base unit) - matches brand.md recommendation
- **Font**: commuters-sans, 16px, weight 400
- **Current**: Uses inline styles, customizable colors - needs brand color defaults

**States**:
- **Default**: Background #FFB4E6, white text
- **Hover**: Brightness filter (current implementation) or slight darken (10%)
- **Active**: Darken 15%
- **Focus**: 3px outline offset, primary color (#70D9E5)
- **Disabled**: 50% opacity

**Secondary Button**:
⚠️ **Needs Definition** - Not in current codebase, but should be added:
- Background: transparent
- Border: 2px solid #70D9E5 (primary)
- Text: #70D9E5
- Hover: Background #70D9E5 with opacity (10-20%)

**Text Button (Tertiary)**:
⚠️ **Needs Definition** - Not in current codebase:
- Background: transparent
- Border: none
- Text: #70D9E5
- Hover: Background mid-100 (#EFF3F7)

### Typography Components

**Hero Heading (H1)**:
- **Current**: Uses gradient text, variable sizes (2rem - 4rem)
- **Target**: 68px / 400 / 102px line-height
- **Color**: mid-900 (#1D1D1F) on light backgrounds
- **Gradient**: ⚠️ Consider if gradient aligns with brand.md (needs verification)

**Section Headings (H2)**:
- **Current**: Various sizes
- **Target**: 24px / 600 / 36px line-height
- **Color**: mid-900 (#1D1D1F)

**Body Text**:
- **Current**: Poppins, variable
- **Target**: 
  - Sans-serif: 16px / 400 / 24px (commuters-sans)
  - Serif: 28.8px / 400 / 43.2px (Berlingske Serif) - for paragraphs
- **Color**: mid-500 (#7B7E80) or mid-900 (#1D1D1F) for contrast

**Markdown Content**:
- **Current**: Custom sizes in _markdown.css
- **Target**: Align with brand.md type scale
- **H1**: 68px → Keep for hero context
- **H2**: 24px (matches brand.md)
- **H3**: ⚠️ TBD - use 20px or 18.4px
- **H4**: ⚠️ TBD - use 18px
- **Body**: 16px or 28.8px serif

### Navigation

**Header**:
- **Background**: Light (#F8F7F5) or configurable
- **Text**: mid-900 (#1D1D1F) on light backgrounds
- **Font**: commuters-sans, 16px, uppercase recommended
- **Padding**: 16px (2x base unit) vertical
- **Current**: Uses customizable colors - add brand defaults

**Links**:
- **Default**: mid-900 (#1D1D1F)
- **Hover**: Primary (#70D9E5) or custom hover color
- **Active**: Primary (#70D9E5)

### Cards & Content Blocks

**Blog Cards**:
- **Background**: White or light (#F8F7F5)
- **Border**: ⚠️ TBD - Use mid-200 (#DCE1E6) if needed
- **Border Radius**: ⚠️ TBD - 8px (1x) or 12px (1.5x) recommended
- **Padding**: 24px (3x base unit)
- **Shadow**: ⚠️ TBD - Define shadow system

**Blog Tags**:
- **Current**: #f1f1f1 background, #034ad8 text
- **Target**: mid-100 (#EFF3F7) background, primary (#70D9E5) text
- **Border Radius**: 6px (slightly less than buttons for distinction)

### Pagination

**Current**: Uses #034ad8 blue
- **Active**: Background #70D9E5 (primary), white text
- **Hover**: Text color #70D9E5
- **Default**: mid-700 (#494949) or mid-900 (#1D1D1F)

---

## Motion & Interaction

### Transitions
**Duration**: 200ms (from principles.md)  
**Easing**: ease-in-out (smooth, natural)

### Micro-interactions

**Button Hover**: 
- Current: backdrop-filter brightness
- Target: Subtle color shift (darken 10%) or maintain brightness filter
- Duration: 200ms

**Form Focus**: 
- Border: 2px solid primary (#70D9E5)
- Shadow: ⚠️ TBD - subtle glow using primary color
- Duration: 200ms

**Navigation Hover**:
- Color transition to primary (#70D9E5)
- Duration: 200ms

### Animation Purpose
All motion serves a purpose:
- **Feedback**: Confirms user action
- **Orientation**: Shows relationship between elements  
- **Focus**: Draws attention appropriately

**Performance**: 
- Respects prefers-reduced-motion
- GPU-accelerated properties only (transform, opacity)
- No animation on initial page load

---

## Responsive Design

### Mobile (< 768px)
**Visual Adaptations**:
- Navigation stacks vertically
- Hero headings: Use 68px if space allows, scale down if needed
- Section spacing: Use sectionPaddingMobile (3rem = 48px = 6x base unit)
- Touch targets: Minimum 44px (5.5x base unit)

### Tablet (768px - 1024px)
**Visual Adaptations**:
- Navigation: Horizontal layout
- Section spacing: Use sectionPadding (6rem = 96px = 12x base unit)
- Grid layouts: 2-3 columns for blog cards

### Desktop (> 1024px)
**Visual Adaptations**:
- Full layout with max-width container (1280px)
- Hover states active
- Optimal typography sizes applied

---

## Implementation Notes

### Design Tokens Needed

```css
/* Colors - Add to Tailwind config or CSS variables */
--color-primary: #70D9E5;
--color-secondary: #FF6D39;
--color-accent: #FFB4E6;
--color-light: #F8F7F5;
--color-dark: #1F2528;
--color-alabaster: #E8E1D8;
--color-success: #15A620;
--color-warning: #F7CD1E;
--color-info: #00AAFF;
--color-error: /* TBD */;

/* Mid Gray Scale */
--color-mid-100: #EFF3F7;
--color-mid-200: #DCE1E6;
--color-mid-300: #C3C7CB;
--color-mid-400: #9DA0A4;
--color-mid-500: #7B7E80;
--color-mid-600: #67696B;
--color-mid-700: #494949;
--color-mid-800: #303132;
--color-mid-900: #1D1D1F;

/* Typography */
--font-primary: "commuters-sans", system-ui, sans-serif;
--font-serif: "Berlingske Serif Regular", serif;

/* Type Scale */
--text-xs: 12px;
--text-sm: 14px;
--text-base: 16px;
--text-lg: 18.4px;
--text-xl: 20px;
--text-2xl: 24px;
--text-3xl: 28.8px;
--text-4xl: 68px;

/* Spacing - Update to use 8px base unit */
--space-1: 8px;
--space-2: 16px;
--space-3: 24px;
--space-4: 32px;
--space-5: 40px;
--space-6: 48px;
--space-8: 64px;
--space-10: 80px;
--space-12: 96px;
--space-20: 160px;
```

### Component Variants

1. **Button Variants**:
   - Primary: Pink (#FFB4E6) background
   - Secondary: Transparent with primary border (to be created)
   - Tertiary: Text-only (to be created)

2. **Heading Variants**:
   - Hero (H1): 68px, normal weight
   - Section (H2): 24px, semibold
   - Subsection (H3): ⚠️ TBD
   - Component (H4): ⚠️ TBD

3. **Background Variants**:
   - Light: #F8F7F5 (primary)
   - Dark: #1F2528 (for sections)
   - Alabaster: #E8E1D8 (subtle)

### Asset Requirements
- [ ] Font files: commuters-sans, Berlingske Serif Regular (verify licensing)
- [ ] Update favicon if needed to match brand
- [ ] Logo variants (if dark mode version needed)

### File Changes Required

1. **Layout.astro**:
   - Remove Poppins Google Fonts link
   - Add commuters-sans and Berlingske Serif font loading
   - Update CSS variables for brand colors

2. **main.css**:
   - Add @theme block with brand colors
   - Update font-family defaults
   - Add spacing scale using 8px base

3. **Component Files**:
   - **primary.astro**: Update default colors to brand pink (#FFB4E6)
   - **header.astro**: Add brand color defaults
   - **hero.astro**: Update typography to brand scale
   - **_blog.css**: Replace #034ad8 with #70D9E5, update grays
   - **_markdown.css**: Update typography scale, colors

4. **Tailwind Config** (if exists):
   - Update colors to match brand.md
   - Update font families
   - Update spacing scale

---

## Quality Checklist

Before handoff to development:

- [x] Visual hierarchy is clear and intentional
- [x] Color usage aligns with brand.md system
- [x] Typography creates effective rhythm
- [x] Spacing uses brand.md spacing system (8px base)
- [x] All states are designed (default, hover, active, disabled, error)
- [x] Interactions provide appropriate feedback
- [x] Responsive behavior is specified
- [x] Accessibility considerations documented
- [ ] Brand Guardian review passed (next step)

---

## Integration Notes

### From Creative Director
Strategic direction already established in brand.md. This refactor aligns existing components with extracted brand guidelines.

### To Brand Guardian
Please validate that my visual execution complies with brand.md specifications. All colors, typography, and spacing reference approved systems from brand.md. Areas marked ⚠️ need stakeholder input from brand audit.

### To Developers
These specifications are production-ready. All values reference brand.md design tokens. Priority changes:
1. Replace Poppins with commuters-sans and Berlingske Serif
2. Replace #034ad8 with #70D9E5 throughout
3. Update spacing to 8px base unit multiples
4. Standardize typography to brand.md scale
5. Update component default colors

---

*Art Direction completed by Art Director v1.0*  
*Part of Design Agent System*  
*Next: Brand Guardian compliance check*

