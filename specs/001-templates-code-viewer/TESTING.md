# Manual Testing Checklist

This document outlines manual testing requirements that should be performed to ensure the templates feature meets all quality standards.

## Accessibility Testing (T031)

### Lighthouse Audit
**Target**: 100 accessibility score, WCAG AA compliance

**Steps**:
1. Open Chrome DevTools
2. Navigate to Lighthouse tab
3. Run audit on `/templates` index page
4. Run audit on individual template pages (e.g., `/templates/stakeholder-interview`)
5. Verify accessibility score is 100
6. Check for any WCAG AA violations

**Expected Results**:
- ✅ Accessibility score: 100
- ✅ No WCAG AA violations
- ✅ Proper heading hierarchy
- ✅ All interactive elements have accessible names
- ✅ Sufficient color contrast ratios
- ✅ Focus indicators visible

---

## Cross-Browser Testing (T032)

### Copy Functionality Testing
**Browsers**: Chrome, Firefox, Safari, Edge

**Steps**:
1. Navigate to any template page
2. Click the "Copy" button
3. Verify "Copied!" success message appears
4. Paste into a text editor
5. Verify complete template content (frontmatter + body) is copied correctly

**Expected Results**:
- ✅ Chrome: Copy works with Clipboard API
- ✅ Firefox: Copy works with Clipboard API
- ✅ Safari: Copy works with Clipboard API
- ✅ Edge: Copy works with Clipboard API
- ✅ Fallback works in non-HTTPS contexts (document.execCommand)

**Test Cases**:
- [ ] Copy stakeholder-interview.md
- [ ] Copy brand-guidelines.md
- [ ] Copy project-design-requirements.md
- [ ] Copy test-long-content.md
- [ ] Copy test-empty.md

---

## Syntax Highlighting Testing (T033)

### File Type Support
**Test all template file types for proper syntax highlighting**

**Steps**:
1. Create templates with different file extensions
2. Verify language detection works correctly
3. Check syntax highlighting renders properly

**Expected Results**:
- ✅ Markdown (.md) - syntax highlighting active
- ✅ YAML (.yml, .yaml) - syntax highlighting active
- ✅ JSON (.json) - syntax highlighting active
- ✅ Plain text (.txt) - no highlighting, renders correctly
- ✅ Default fallback - renders as markdown

**Test Cases**:
- [x] `.md` files: stakeholder-interview, brand-guidelines, project-design-requirements
- [ ] `.yml` file (create if needed)
- [ ] `.json` file (create if needed)
- [x] Very long content: test-long-content.md
- [x] Empty content: test-empty.md

---

## Performance Testing (T034 & T038)

### Long Content Scrolling (T034)
**Template**: test-long-content.md (>1000 lines rendered)

**Steps**:
1. Navigate to `/templates/test-long-content`
2. Verify page loads without errors
3. Test vertical scrolling
4. Test horizontal scrolling (if code lines are very long)
5. Verify smooth scrolling on mobile

**Expected Results**:
- ✅ Page loads without hanging
- ✅ Scrolling is smooth and responsive
- ✅ No layout shifts during scroll
- ✅ Code viewer handles long content gracefully

### Page Load Performance (T038)
**Target**: <2 seconds page load time

**Steps**:
1. Open Chrome DevTools Network tab
2. Hard refresh (Cmd+Shift+R / Ctrl+Shift+R)
3. Navigate to `/templates` index page
4. Navigate to individual template pages
5. Check DOMContentLoaded and Load times

**Expected Results**:
- ✅ Index page loads < 2 seconds
- ✅ Template detail pages load < 2 seconds
- ✅ Time to Interactive (TTI) < 3 seconds
- ✅ First Contentful Paint (FCP) < 1.5 seconds

**Metrics to Record**:
- FCP: _____ ms
- LCP: _____ ms
- TTI: _____ ms
- Total Load Time: _____ ms

---

## Empty Template Handling (T035)

### Empty File Test
**Template**: test-empty.md (minimal content)

**Steps**:
1. Navigate to `/templates/test-empty`
2. Verify page renders without errors
3. Check that empty body doesn't break layout
4. Verify copy button still works

**Expected Results**:
- ✅ Page renders successfully
- ✅ Title displays correctly
- ✅ Code viewer shows frontmatter only
- ✅ Copy button copies frontmatter correctly
- ✅ No JavaScript errors in console

---

## Keyboard Navigation Testing (T039)

### Keyboard-Only Navigation
**Test all interactive elements are accessible via keyboard**

**Steps**:
1. Navigate to `/templates` using only keyboard (Tab key)
2. Test navigation through template list links
3. Navigate to a template detail page
4. Test Copy button activation with Enter/Space
5. Verify focus indicators are visible throughout

**Expected Results**:
- ✅ Tab order is logical and predictable
- ✅ All links focusable with Tab
- ✅ Copy button activates with Enter and Space keys
- ✅ Focus indicators clearly visible (2px solid outline)
- ✅ No keyboard traps
- ✅ Skip navigation available (if applicable)

**Test Routes**:
- [ ] `/templates` index - navigate through all template links
- [ ] `/templates/stakeholder-interview` - activate copy button
- [ ] `/templates/brand-guidelines` - activate copy button
- [ ] Back navigation works (Shift+Tab)

---

## Screen Reader Testing (T040)

### Screen Reader Compatibility
**Screen Readers**: NVDA (Windows), JAWS (Windows), VoiceOver (Mac)

**Steps**:
1. Activate screen reader
2. Navigate to `/templates` index page
3. Listen to page structure announcement
4. Navigate to template list
5. Navigate to template detail page
6. Listen to code viewer content
7. Activate copy button and listen to feedback

**Expected Results**:
- ✅ Page title announced correctly
- ✅ Heading hierarchy announced (h1, h2, etc.)
- ✅ Template list announced as list with X items
- ✅ Links have descriptive names
- ✅ Copy button has proper label: "Copy template code to clipboard"
- ✅ Success message announced: "Copied!"
- ✅ Error message announced (if copy fails)
- ✅ Code blocks properly identified

**ARIA Attributes to Verify**:
- [ ] `role="list"` on template list
- [ ] `aria-label` on copy button
- [ ] `role="alert"` on error messages (if any)

---

## Additional Manual Checks

### Responsive Design
**Test on multiple devices/viewports**:
- [ ] Desktop (1920x1080)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)
- [ ] Mobile landscape (667x375)

**Expected Results**:
- ✅ Layout adapts to viewport
- ✅ Copy button touch-friendly (min 44x44px)
- ✅ Code viewer scrolls horizontally on mobile
- ✅ Template list stacks on mobile
- ✅ Text remains readable at all sizes

### Print Styles
**Test printing template pages**:
1. Navigate to template page
2. Open print preview (Cmd+P / Ctrl+P)
3. Verify layout is print-friendly

**Expected Results**:
- ✅ Copy button hidden in print
- ✅ Code viewer visible with border
- ✅ Content doesn't break across pages unexpectedly

### High Contrast Mode
**Test in high contrast mode**:
1. Enable high contrast mode (Windows) or Increase Contrast (Mac)
2. Navigate through templates
3. Verify all content remains visible and usable

**Expected Results**:
- ✅ Borders increase to 2px width
- ✅ Text remains readable
- ✅ Interactive elements clearly distinguishable

---

## Summary Checklist

- [ ] T031: Accessibility (Lighthouse 100, WCAG AA)
- [x] T032: Cross-browser copy functionality (implemented with fallback)
- [x] T033: Syntax highlighting for all file types (implemented)
- [x] T034: Long content scrolling (test template created)
- [x] T035: Empty template handling (test template created)
- [ ] T038: Page load performance < 2s
- [ ] T039: Keyboard navigation
- [ ] T040: Screen reader testing

**Status**: Automated tests complete ✅ | Manual tests pending 📋

---

## Notes

- All programmatic tasks complete
- Clipboard fallback implemented for older browsers
- Error handling added for invalid frontmatter
- Design tokens applied from colors.json
- Responsive design enhanced with accessibility features
- Build verification complete - all templates generated successfully

