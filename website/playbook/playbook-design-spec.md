# The 316 Playbook - Design Specification

## Brand Colors

**Primary Colors:**
- Navy: `#001A54` - Headers, body text, primary UI elements
- Gold: `#F2C100` - Accents, highlights, callouts, CTAs

**Supporting Colors:**
- White: `#FFFFFF` - Background, negative space
- Light Gray: `#F5F5F5` - Sidebar backgrounds, table alternating rows
- Medium Gray: `#757575` - Secondary text, captions
- Dark Gray: `#333333` - Body text alternative

## Typography

### Font Families

**Primary Font: Montserrat**
- Headers (H1-H4)
- Subheadings
- Pull quotes
- Callout boxes

**Secondary Font: Open Sans**
- Body text
- Tables
- Lists
- Captions

**Fallback Stack:**
```css
Primary: 'Montserrat', 'Helvetica Neue', Arial, sans-serif
Secondary: 'Open Sans', 'Segoe UI', Verdana, sans-serif
Monospace: 'Courier New', Courier, monospace (for numbers/calculations)
```

### Type Scale

**H1 (Chapter Titles):**
- Font: Montserrat Bold
- Size: 36pt
- Color: Navy #001A54
- Line height: 1.2
- Margin top: 0
- Margin bottom: 24pt
- Letter spacing: +1pt

**H2 (Major Sections):**
- Font: Montserrat SemiBold
- Size: 24pt
- Color: Navy #001A54
- Line height: 1.3
- Margin top: 32pt
- Margin bottom: 16pt

**H3 (Subsections):**
- Font: Montserrat SemiBold
- Size: 18pt
- Color: Navy #001A54
- Line height: 1.4
- Margin top: 24pt
- Margin bottom: 12pt

**H4 (Minor Headings):**
- Font: Montserrat Medium
- Size: 14pt
- Color: Navy #001A54
- Line height: 1.4
- Margin top: 16pt
- Margin bottom: 8pt

**Body Text:**
- Font: Open Sans Regular
- Size: 11pt
- Color: Dark Gray #333333
- Line height: 1.6
- Margin bottom: 12pt
- Paragraph spacing: 6pt

**Captions:**
- Font: Open Sans Italic
- Size: 9pt
- Color: Medium Gray #757575
- Line height: 1.4

## Layout & Grid

### Page Setup
- Size: 8.5" × 11" (US Letter)
- Orientation: Portrait
- Margins: 0.75" top/bottom, 1" left/right
- Gutter (for binding): Additional 0.25" on inside margin

### Grid System
- Base grid: 12 columns
- Gutter width: 20px
- Single column for body text (spans 8-10 columns)
- Sidebar callouts can use 3-4 columns

### Spacing
- Base unit: 8pt
- Vertical rhythm: Multiples of 8pt (8, 16, 24, 32, 48)
- Section breaks: 48pt minimum
- Paragraph spacing: 12pt

## Content Elements

### Callout Boxes

**Tip/Best Practice:**
- Background: Light Gold (#FFF9E6)
- Border: 3px left border, Gold #F2C100
- Padding: 16pt all sides
- Icon: Gold lightbulb or star (optional)
- Title: Montserrat SemiBold, 12pt, Navy
- Body: Open Sans Regular, 11pt

**Warning/Caution:**
- Background: Light Gray #F5F5F5
- Border: 3px left border, Navy #001A54
- Padding: 16pt all sides
- Icon: Navy exclamation (optional)
- Title: Montserrat SemiBold, 12pt, Navy
- Body: Open Sans Regular, 11pt

**Case Study/Example:**
- Background: White
- Border: 1px solid Medium Gray, rounded corners (4px)
- Padding: 20pt all sides
- Title: Montserrat SemiBold, 14pt, Navy
- Label: "CASE STUDY" in Gold, 9pt, uppercase, letter-spacing +1pt

### Tables

**Style:**
- Header row: Navy background #001A54, white text
- Header font: Montserrat SemiBold, 10pt
- Body font: Open Sans Regular, 10pt
- Alternating rows: White / Light Gray #F5F5F5
- Cell padding: 8pt vertical, 12pt horizontal
- Border: None (use background colors for separation)
- Alignment: Numbers right-aligned, text left-aligned

**Financial Tables (special formatting):**
- Currency: Monospace font for alignment
- Negative numbers: Red #D32F2F
- Positive returns/gains: Green #388E3C
- Totals row: Bold, Light Gold background

### Lists

**Bulleted Lists:**
- Bullet style: Solid disc, Gold #F2C100
- Indent: 24pt from left margin
- Spacing: 8pt between items
- Font: Open Sans Regular, 11pt

**Numbered Lists:**
- Number style: Navy #001A54, Montserrat SemiBold
- Indent: 24pt from left margin
- Spacing: 8pt between items
- Font: Open Sans Regular, 11pt

**Checklists:**
- Checkbox: Gold square outline, 12pt
- Indent: 24pt from left margin
- Spacing: 12pt between items
- Font: Open Sans Regular, 11pt

### Pull Quotes
- Font: Montserrat Medium Italic, 18pt
- Color: Navy #001A54
- Border: 4px left border, Gold #F2C100
- Padding: 16pt left
- Margin: 24pt top/bottom
- Line height: 1.5
- Max width: 60% of text column

### Formulas & Calculations
- Background: Light Gray #F5F5F5
- Border: 1px solid Medium Gray
- Padding: 12pt
- Font: Courier New (monospace), 10pt
- Color: Navy #001A54
- Border-radius: 4px

### Images & Diagrams
- Max width: Full text column
- Border: None (or 1px Light Gray if needed)
- Caption: Below image, Open Sans Italic, 9pt, Medium Gray
- Spacing: 24pt above/below

## Page Elements

### Headers (Running Headers)
- Font: Open Sans Regular, 9pt
- Color: Medium Gray #757575
- Position: Top of page, outer margin
- Left page: Chapter title
- Right page: Section title
- Separator: 1px line below, Light Gray

### Footers (Page Numbers)
- Font: Montserrat SemiBold, 10pt
- Color: Navy #001A54
- Position: Bottom of page, outer margin
- Style: Just the number (no "Page" prefix)

### Chapter Openers
- First page of each chapter: No running header
- Large chapter number: Montserrat Bold, 120pt, Gold #F2C100, 10% opacity, background element
- Chapter title overlays the number

## Special Sections

### Table of Contents
- Chapter titles: Montserrat SemiBold, 14pt, Navy
- Section titles: Open Sans Regular, 11pt, Dark Gray
- Page numbers: Right-aligned, Montserrat SemiBold, 11pt
- Dot leaders: Light Gray dots between title and page number
- Spacing: 16pt between chapters, 8pt between sections

### Introduction/Foreword
- First paragraph: Drop cap (first letter)
- Drop cap: Montserrat Bold, 48pt, Gold #F2C100
- Drop cap height: 3 lines of body text

### Appendix/Resources
- Background: Light Gray #F5F5F5 for entire section
- Same typography as body content
- Links: Navy #001A54, underlined

## Iconography

**Icon Style:**
- Line icons (not solid)
- Stroke width: 2px
- Colors: Navy or Gold (context dependent)
- Size: 24pt × 24pt standard

**Common Icons Needed:**
- Calculator (deal analysis)
- Warning triangle (red flags)
- Checkmark (best practices)
- Lightbulb (tips)
- Dollar sign (financial sections)
- House (property-specific content)

## PDF Export Settings

**Quality:**
- Resolution: 300 DPI minimum
- Color space: CMYK for print, RGB for digital
- Compression: High quality JPEG for images
- Embed all fonts

**Interactive Elements (Digital Version):**
- Clickable table of contents
- Hyperlinks: Gold #F2C100, underlined on hover
- Bookmarks for each chapter

**File Settings:**
- PDF/X-1a or PDF/X-4 for print
- PDF 1.7 for digital distribution
- Security: Allow printing and copying
- Metadata: Title, author, keywords populated

## Print Specifications

**Paper:**
- Weight: 80-100lb text weight (body)
- Weight: 100-120lb cover weight (covers)
- Finish: Matte or silk (not glossy)
- Color: Bright white

**Binding:**
- Perfect bound (for 30-40 pages)
- Or saddle-stitch if kept to 40 pages max

**Bleed:**
- 0.125" (3mm) on all sides for cover
- No bleed needed for interior pages (standard margins)

## Accessibility

**Contrast Ratios:**
- Navy on White: 12.5:1 (AAA)
- Gold on White: 3.5:1 (AA for large text only)
- Dark Gray on White: 10.5:1 (AAA)

**Best Practices:**
- Use Gold for accents and large text only
- Never use Gold for body text
- Maintain sufficient line height (1.6 minimum)
- Use real headings (not just bold text)
- Provide alt text for images in digital version

## Brand Voice in Design

**Professional but Approachable:**
- Clean, modern layout
- Generous white space
- Not overly corporate or stuffy
- Use of Gold as confidence/premium indicator
- Navy as trustworthy, stable foundation

**Educational Focus:**
- Prioritize readability over decoration
- Clear information hierarchy
- Tables and lists over dense paragraphs
- Visual breaks every 1-2 pages
- Actionable formatting (checklists, templates)

## File Delivery

**Source Files:**
- Markdown source files (provided)
- Export to InDesign or Affinity Publisher for layout
- Export final PDF

**Naming Convention:**
```
316-playbook-v1.0-digital.pdf
316-playbook-v1.0-print.pdf
316-playbook-source.indd (or .afpub)
```

**Version Control:**
- Date all versions
- Maintain changelog
- Archive previous versions
