# Ocupop Brand Guidelines

**Status**: 🔄 Draft  
**Last Updated**: 2025-11-18  
**Version**: 1.0  
**Extends**: docs/design/design-principles.md, docs/design/ocupop-design-principles.md

> Generated from brand audit of ocupop.com and tailwind.config.txt  
> **Note**: Sections marked with ⚠️ need stakeholder input

---

## Brand Overview

### Mission
⚠️ **Needs Stakeholder Input**: Mission statement or core purpose to be defined

### Brand Personality
**Adjectives**: Direct, Authentic, Capable, Playful, Professional

**Tone**: 
- Direct and honest communication without corporate speak
- Confident but not arrogant ("Getting Shit Done" attitude)
- Playful but professional (appropriate use of personality)
- Client-focused and collaborative
- Experienced and adaptable (25+ years, "From Y2K to the dawn of AI")

**Audience**: 
⚠️ **Needs Stakeholder Input**: Primary target audience to be defined

---

## Visual Identity

### Color Palette

> Implements design-principles.md "Color" section (Default Strictness: 🟡 MEDIUM)  
> **Project Strictness Override**: 🟡 MEDIUM - Strategic color deployment with flexibility

#### Primary Colors

```css
/* Primary Brand Color - Cyan */
--color-primary: #70D9E5;
```
- **Usage**: CTAs, primary actions, links, brand moments
- **Strictness**: 🔴 HIGH (exact hex only)
- **Accessibility**: ⚠️ Needs contrast verification with backgrounds
- **Source**: Extracted from tailwind.config.txt and website analysis

```css
/* Secondary Brand Color - Orange */
--color-secondary: #FF6D39;
```
- **Usage**: Secondary actions, accents, highlights
- **Strictness**: 🟡 MEDIUM
- **Accessibility**: ⚠️ Needs contrast verification
- **Source**: Extracted from tailwind.config.txt

```css
/* Accent Color - Pink */
--color-accent: #FFB4E6;
```
- **Usage**: Call-to-action buttons, highlights, notifications (use sparingly)
- **Strictness**: 🟡 MEDIUM
- **Accessibility**: ⚠️ Needs contrast verification
- **Source**: Extracted from website analysis (used in primary CTAs)

#### Background Colors

```css
/* Light Background */
--color-light: #F8F7F5;
```
- **Usage**: Primary page backgrounds, light sections
- **Strictness**: 🔴 HIGH
- **Source**: Extracted from tailwind.config.txt and website

```css
/* Dark Background */
--color-dark: #1F2528;
```
- **Usage**: Dark sections, high contrast areas
- **Strictness**: 🔴 HIGH
- **Source**: Extracted from tailwind.config.txt and website

```css
/* Alabaster - Neutral Background */
--color-alabaster: #E8E1D8;
```
- **Usage**: Subtle backgrounds, neutral tones
- **Strictness**: 🟡 MEDIUM
- **Source**: Extracted from tailwind.config.txt

#### Color Scales

**Primary Scale** (to be generated):
⚠️ **Needs Generation**: Create full scale from #70D9E5 using color tools

**Secondary Scale** (to be generated):
⚠️ **Needs Generation**: Create full scale from #FF6D39 using color tools

#### Semantic Colors

```css
--color-success: #15A620;  /* Green - from tailwind config */
--color-warning: #F7CD1E;  /* Yellow - from tailwind config */
--color-error:   ⚠️ TBD;   /* ⚠️ NEEDS STAKEHOLDER INPUT */
--color-info:    #00AAFF;  /* Blue - from tailwind config */
```

⚠️ **Critical Gap**: Error/destructive color not defined. Need stakeholder input.

#### Additional Accent Colors

```css
--color-blue: #00AAFF;
--color-yellow: #F7CD1E;
--color-green: #15A620;
--color-lime: #D1C700;
--color-bittercube: #17384B; /* Dark teal */
```

⚠️ **Needs Guidelines**: When should each accent color be used?

#### Neutral Palette (Mid Gray Scale)

```css
--color-mid-100: #EFF3F7;  /* Lightest */
--color-mid-200: #DCE1E6;
--color-mid-300: #C3C7CB;
--color-mid-400: #9DA0A4;
--color-mid-500: #7B7E80;  /* DEFAULT */
--color-mid-600: #67696B;
--color-mid-700: #494949;
--color-mid-800: #303132;
--color-mid-900: #1D1D1F;  /* Darkest */
```

**Strictness**: 🔴 HIGH - Use these exact values for consistency  
**Source**: Extracted from tailwind.config.txt

---

### Typography

> Implements design-principles.md "Typography" section (Strictness: 🔴 HIGH)

#### Font Stack

```css
/* Primary Font Family - Sans Serif */
--font-primary: "commuters-sans", system-ui, sans-serif;

/* Secondary Font Family - Serif */
--font-serif: "Berlingske Serif Regular", serif;
```

**Licensing**: ⚠️ **Needs Verification**: Confirm license status for both fonts

**Fallbacks**: System fonts ensure text displays even if custom font fails

**Strictness**: 🔴 HIGH - Only use fonts from approved stack

**Usage Guidelines**:
- **Primary (commuters-sans)**: Headings, UI elements, navigation, most body text
- **Serif (Berlingske Serif Regular)**: Body text, paragraphs (when appropriate)

⚠️ **Needs Clarification**: When should serif vs sans-serif be used?

#### Type Scale

> Base size: 16px | Scale ratio: Custom (observed from website)

```css
--text-xs:   12px; /* Line height: ~18px (1.5) */
--text-sm:   14px; /* Line height: ~21px (1.5) */
--text-base: 16px; /* Line height: 24px (1.5) */
--text-lg:   18.4px; /* Line height: ~28px (1.5) - observed */
--text-xl:   20px; /* Line height: 30px (1.5) */
--text-2xl:  24px; /* Line height: 36px (1.5) - H2 */
--text-3xl:  28.8px; /* Line height: 43.2px (1.5) - Body serif */
--text-4xl:  68px; /* Line height: 102px (1.5) - H1 */
```

⚠️ **Incomplete**: H3, H4, H5, H6 sizes need to be defined

**Strictness**: 🔴 HIGH - Only use sizes from this scale (once complete)

#### Font Weights

```css
--weight-normal:   400; /* Body text, H1 headings, default */
--weight-medium:   500; /* ⚠️ Usage to be confirmed */
--weight-semibold: 600; /* H2 headings, emphasis */
--weight-bold:     700; /* Strong emphasis, CTAs */
```

**Usage Guidelines**:
- **Headings**: Normal (400) for H1, Semibold (600) for H2
- **Body Text**: Normal (400)
- **UI Elements**: ⚠️ To be confirmed (likely Medium 500)
- **Emphasis**: Semibold (600) or Bold (700)

**Strictness**: 🔴 HIGH - Only use these four weights

---

### Spacing System

> Implements design-principles.md "Spacing" section (Strictness: 🔴 HIGH)

#### Base Unit: 8px

**Philosophy**: All spacing should be multiples of 8px for consistent rhythm

#### Spacing Scale

```css
--space-0:  0px;   /* No space */
--space-1:  8px;   /* 1x - Tiny */
--space-1.5: 12px; /* 1.5x - Tight spacing (observed) */
--space-2:  16px;  /* 2x - Small */
--space-3:  24px;  /* 3x - Medium */
--space-5:  40px;  /* 5x - XL */
--space-6:  48px;  /* 6x - 2XL */
--space-8:  64px;  /* 8x - 3XL */
--space-10: 80px;  /* 10x - 4XL */
--space-12: 96px;  /* 12x - 5XL */
--space-20: 160px; /* 20x - 7XL */
```

⚠️ **Outlier**: 30px spacing observed - needs verification if intentional

**Common Uses**:
- Component padding: 2x-3x (16-24px)
- Element margins: 2x-3x (16-24px)
- Section spacing: 8x-12x (64-96px)
- Hero sections: 10x-20x (80-160px)

**Strictness**: 🔴 HIGH - Only use multiples of 8px (with noted exceptions)

---

### Layout System

> Implements design-principles.md "Layout & Hierarchy" section

#### Grid System

⚠️ **Needs Definition**: Grid system to be documented

#### Breakpoints

```css
--breakpoint-sm: 640px;   /* Mobile landscape / Small tablet */
--breakpoint-md: 768px;   /* Tablet portrait */
--breakpoint-lg: 1024px;  /* Tablet landscape / Desktop */
--breakpoint-xl: 1280px;  /* Large desktop */
--breakpoint-2xl: 1536px; /* Extra large desktop */
--breakpoint-3xl: 1920px; /* Full HD displays */
--breakpoint-4xl: 2560px; /* 2K / QHD displays */
--breakpoint-5xl: 3840px; /* 4K / UHD displays */
```

**Source**: Extracted from tailwind.config.txt

**Mobile-First Approach**: Design for mobile first, enhance for larger screens

**Strictness**: 🔴 HIGH - Use these breakpoints consistently

---

### Elevation & Depth

#### Shadow System

⚠️ **Needs Definition**: Shadow system to be documented from design system

#### Border Radius

⚠️ **Needs Definition**: Border radius values to be documented

**Observed**: Rounded corners on buttons and cards, exact values need measurement

---

## Components

> Implements design-principles.md "Components" section (Strictness: 🟡 MEDIUM)

### Buttons

#### Primary Button
```css
background: var(--color-accent); /* Pink #FFB4E6 */
color: #FFFFFF;
padding: ⚠️ TBD; /* Needs measurement */
border-radius: ⚠️ TBD; /* Needs measurement */
font-weight: var(--weight-normal); /* 400 - observed */
font-size: var(--text-base); /* 16px - observed */

/* States */
hover: ⚠️ TBD;
active: ⚠️ TBD;
disabled: ⚠️ TBD;
focus: ⚠️ TBD;
```

⚠️ **Incomplete**: Full button specifications need documentation

#### Secondary Button
⚠️ **Needs Documentation**: Secondary button style not clearly observed

#### Text Button (Tertiary)
⚠️ **Needs Documentation**: Text/link button style to be defined

### Input Fields
⚠️ **Needs Documentation**: Input field styles to be defined

### Cards
⚠️ **Needs Documentation**: Card component styles to be defined

**Observed**: Work portfolio items use grid layout with images and text overlays

---

## Tone & Voice

> Implements design-principles.md "Content" section (Strictness: 🟢 LOW - Flexible)

### Brand Voice

**Core Characteristics**: Direct, Authentic, Capable, Playful, Professional, Client-Focused

**Writing Style**:
- Use active voice ("We get off on solving problems" not "Problems are solved by us")
- Address users as "you" ("We wanna hear all about your work")
- Keep sentences concise but allow for personality
- Avoid corporate jargon ("No glitz or eye candy")
- Be specific with numbers and facts ("For 25 years!", "From Y2K to the dawn of AI")
- Use contractions for warmth (we're, you'll, we've)
- Embrace authentic language ("Getting Shit Done", "wanna", "beefy, Swiss Army knife")

### Tone by Context

**Marketing/Sales**: Confident, direct, benefit-focused, authentic  
**Product/UI**: Clear, helpful, action-oriented  
**Support/Help**: Empathetic, patient, solution-focused  
**Errors**: ⚠️ To be defined  
**Success**: Positive, encouraging, celebratory  
**Legal/Privacy**: ⚠️ To be defined

### Voice Examples

**Good Examples** (from website):
- "Getting Shit Done is our Love Language" (direct, memorable, authentic)
- "We don't need to juice our business dating profile with positive affirmations" (honest, refreshing)
- "No games, just great work. For 25 years!" (confident, experienced)
- "We wanna hear all about your work and goals. No glazed eyes here — we will really listen." (collaborative, genuine)

**Bad Examples** (to avoid):
- "Utilize our platform" (use "use" instead)
- "An error has occurred" (passive, unhelpful)
- "Optimized synergistic solutions" (jargon, corporate speak)
- "We are pleased to announce" (too formal, not authentic)

---

## Logo Usage

### Logo Variations

**Primary Logo**: "OCUPOP" wordmark in uppercase, commuters-sans font  
**Logo on Dark**: ⚠️ **Needs Verification**: White/light version for dark backgrounds  
**Logo Mark**: ⚠️ **Needs Verification**: Icon-only version for small spaces  
**Monochrome**: ⚠️ **Needs Verification**: Single color version for special uses

### Logo Styling

- **Font**: commuters-sans (uppercase)
- **Color**: Dark gray (#353535 or similar) on light backgrounds
- **Style**: Simple, clean, no graphic symbol observed

### Clear Space

⚠️ **Needs Definition**: Minimum clear space to be determined

### Minimum Sizes

⚠️ **Needs Definition**: Minimum sizes for digital and print to be determined

### Usage Guidelines

✅ **Do's**:
- Use on simple, uncluttered backgrounds
- Maintain clear space (to be defined)
- Use approved variations only
- Scale proportionally

❌ **Don'ts**:
- Don't rotate or skew
- Don't change colors
- Don't add effects (shadows, gradients, outlines)
- Don't place on busy backgrounds
- Don't stretch or distort

---

## Imagery

> Guidelines for photos, illustrations, icons

### Photography
⚠️ **Needs Stakeholder Input**: Photography style, mood, and subject matter to be defined

### Illustrations
⚠️ **Needs Stakeholder Input**: Illustration style, color treatment, and use cases to be defined

**Observed**: Website uses emoji-style icons (lightning bolt, pointing hand, confetti) for playful touch

### Icons

**Style**: ⚠️ To be defined  
**Base Size**: 24px (3x base unit) - recommended  
**Stroke Weight**: ⚠️ To be defined  
**Source**: ⚠️ To be defined

**Guidelines**:
- Use consistent style across all icons
- Maintain optical balance
- Ensure clarity at small sizes

---

## Motion & Animation

> Implements design-principles.md "Interaction" section (Strictness: 🟢 LOW)

### Animation Principles

**Purpose-Driven**: Every animation serves a function  
**Subtle**: Enhance, don't distract  
**Performant**: GPU-accelerated properties only (transform, opacity)

### Timing

⚠️ **Needs Documentation**: Animation timing values from tailwind.config.txt to be documented

**Observed in tailwind.config.txt**:
- Keyframes defined: expand, modal-reveal, fade-in, slide-in-right, slide-in-left, scale-up variants, webpage-scroll
- Animations: modal-reveal, modal-backdrop, slide-in-right, slide-in-left, fade-in, webpage-scroll

### Common Animations

⚠️ **Needs Guidelines**: Usage guidelines for each animation to be defined

### Accessibility

**Critical**: Respect `prefers-reduced-motion` preference

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Resources

### Design Files

**Figma**: ⚠️ Link to be added  
**Sketch**: ⚠️ Link to be added  
**Adobe XD**: ⚠️ Link to be added

### Asset Library

**Logos**: `docs/assets/logos/`  
**Icons**: `docs/assets/icons/`  
**Illustrations**: `docs/assets/illustrations/`

### Code Resources

**Design Tokens**: `docs/tailwind.config.txt`  
**CSS Variables**: ⚠️ To be created  
**Component Library**: `src/components/`

---

## Governance

### Update Process

1. Propose change in design review meeting
2. Document rationale for change
3. Update this file with new version number
4. Update design tokens and code
5. Communicate changes to team
6. Update component library if needed

### Approval Authority

**Minor Updates** (color values, spacing tweaks): Design lead  
**Major Changes** (new colors, typography): Stakeholder approval required

### Questions?

**Design Lead**: ⚠️ To be added  
**Stakeholder**: ⚠️ To be added

---

## Agent Usage Notes

### For Brand Guardian
- Enforce 🔴 HIGH strictness items automatically
- Flag 🟡 MEDIUM items for human review
- Critical: Flag missing error color immediately

### For Creative Director
- Reference brand personality for strategic decisions
- Use tone/voice for content strategy (well-documented)
- Can propose justified departures from 🟡/🟢 items

### For Art Director
- Use component specs as baseline (needs expansion)
- Apply creative expertise within defined bounds
- Document aesthetic decisions

### For UI Analyzer
- Validate against color palette, spacing, typography
- Test component consistency per specs (once complete)
- Performance checks per animation guidelines

### For Accessibility Champion
- Validate color contrast (⚠️ needs verification)
- Ensure touch targets meet minimums
- Verify motion respects reduced-motion preference

---

*This brand.md extends docs/design/design-principles.md and docs/design/ocupop-design-principles.md with Ocupop-specific guidelines.*  
*Generated from brand audit on 2025-11-18*  
*Version: 1.0*  
*Status: Draft - Requires stakeholder input for completion*

---

## Next Steps for Completion

### Critical (Blocking)
1. Define error/destructive color
2. Verify logo variations (dark mode, icon mark)
3. Complete typography scale (H3-H6)
4. Document button variants and states
5. Verify font licensing

### High Priority
6. Define component library (forms, cards, modals, etc.)
7. Document spacing outliers (12px, 30px)
8. Create color scales for primary and secondary
9. Define animation usage guidelines
10. Verify color accessibility ratios

### Medium Priority
11. Define photography/illustration style
12. Complete logo usage guidelines
13. Document grid system
14. Define shadow and border radius systems

