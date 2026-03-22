# StopLosingLeadsHQ - GHL Funnel Design Board

Use this as a build sheet inside GoHighLevel Funnel Builder to recreate the current site design.

## 1) Brand and Style Direction
- Theme: dark, premium, conversion-focused B2B service funnel
- Visual language: glassmorphism cards, teal accent glow, subtle texture/noise
- Tone: direct, problem/solution, urgency with clarity

## 2) Global Canvas Settings
- Page background: `#0A0F1A` (`--base-bg`)
- Alternate section background: `#0F1623` (`--alt-bg`)
- Main text color: `#F1F5F9`
- Secondary text color: `#94A3B8`
- Muted text color: `#64748B`
- Accent teal: `#0D9488`
- Accent teal hover: `#14B8A6`
- Success green: `#22C55E`
- Danger red: `#EF4444`

## 3) Typography
- Body font: `Inter` (400, 500, 600)
- Heading font: `Plus Jakarta Sans` (700, 800)
- H1 style:
  - Size: `clamp(30px, 7vw, 56px)`
  - Weight: `800`
  - Line height: `1.1`
  - Letter spacing: `-0.03em`
- Main section H2 style:
  - Size: `clamp(28px, 3.5vw, 40px)`
  - Weight: `700`
  - Letter spacing: `-0.02em`
- Paragraph body:
  - Typical size: `15px` to `18px`
  - Line height: `1.7`

## 4) Layout System
- Page width: full width (`100%`)
- Global horizontal padding by section: `16px` to `20px` (`px-4` or `px-5`)
- Content max widths used repeatedly:
  - `560px`
  - `640px`
  - `720px`
  - `2xl` container: `672px`
  - `3xl` container: `768px`
  - `4xl` container: `896px`
  - `5xl` container: `1024px`
- Standard section vertical spacing:
  - Most sections: `py-24` (`96px top`, `96px bottom`)
  - Final CTA: `py-32` (`128px top`, `128px bottom`)

## 5) Navbar Spec
- Position: fixed, top, full width
- Height: `56px` (`h-14`)
- Horizontal padding:
  - Mobile: `16px`
  - Desktop: `40px`
- Background (on load): `rgba(10,15,26,0.7)`
- Background (on scroll): `rgba(10,15,26,0.9)`
- Backdrop blur: `16px`
- Bottom border: `1px solid rgba(255,255,255,0.05)`
- Z-index: very high (`50`)
- Left brand text:
  - Font: `Plus Jakarta Sans`
  - Size: `15px` mobile, `18px` desktop
  - Weight: `700`
- Right CTA button:
  - Height feel: compact (`py-2`)
  - Padding: `12px 20px` on desktop, smaller on mobile
  - Radius: `8px`
  - Font size: `12px` mobile, `14px` desktop

## 6) Reusable Components

### 6.1 Glass Card
- Background: `rgba(255,255,255,0.03)`
- Border: `1px solid rgba(255,255,255,0.08)`
- Backdrop blur: `12px`
- Hover background: `rgba(255,255,255,0.06)`
- Hover border: `rgba(255,255,255,0.15)`
- Hover lift: `translateY(-4px)`
- Hover shadow: `0 8px 32px rgba(13,148,136,0.1)`

### 6.2 Primary Button (`btn-teal`)
- Background: `#0D9488`
- Text: white
- Weight: `600`
- Hover: background `#14B8A6`
- Shadow: teal glow
- Hover scale: `1.02`
- Active scale: `0.98`

### 6.3 Outline Button (`btn-teal-outline`)
- Background: transparent
- Text: teal
- Border: `1.5px solid #0D9488`
- Weight: `600`
- Hover: teal fill + white text + glow

### 6.4 Badge (`teal-badge`)
- Pill radius: full (`9999px`)
- Padding: `6px 16px`
- Bg: `rgba(13,148,136,0.1)`
- Border: `1px solid rgba(13,148,136,0.2)`
- Text: teal, uppercase, tracked (`0.05em`)
- Size: `13px`

### 6.5 Stat Number
- Font: `Plus Jakarta Sans`
- Size: `48px`
- Weight: `800`
- Color: teal
- Glow text-shadow: `0 0 30px rgba(13,148,136,0.3)`

## 7) Effects and Background Elements
- Noise overlay:
  - Fixed full-page subtle grain
  - Opacity: `0.035`
- Dot grid (hero):
  - Dot color: `rgba(255,255,255,0.06)`
  - Grid size: `28px`
- Ambient orbs:
  - 600x600 circles
  - Radial gradients with low alpha
  - Heavy blur (`80px`)

## 8) Section-by-Section Build Map (Top to Bottom)

### 8.1 Hero (`#hero`)
- Height: `min-height 100vh`
- Padding:
  - Top: `80px` (to clear fixed navbar)
  - Bottom: `64px`
  - Horizontal: `20px`
- Alignment: centered, text-center
- Main content max width: `720px`
- Blocks inside:
  - Badge
  - H1 with teal highlighted phrase
  - Supporting paragraph (max `560px`)
  - 2 CTA buttons
  - Tiny trust line (`text-sm`)
  - Animated Lead Leak Diagram block

### 8.2 Problem (`#problem`)
- Background: alternate (`#0F1623`)
- Section spacing: `96px` vertical
- Header max width: `768px`
- Card list max width: `672px`
- Problem list rows:
  - Row padding: `20px x 16px`
  - Icon box: `40x40`, radius `12px`
- CTA: centered teal button

### 8.3 Cost
- Background: base dark
- Section spacing: `96px` vertical
- Container max width: `1024px`
- Layout: 2 columns on desktop, 1 column mobile
- Left: narrative glass card (`p-8`)
- Right: stacked stat cards

### 8.4 Diagnosis (`#diagnosis`)
- Background: alternate
- Section spacing: `96px`
- Max width: `672px`
- Main card padding: `24px` mobile, `32px` desktop
- Interactive checklist style:
  - Item padding `16px`
  - Rounded `12px`
  - Checked state uses teal tint and teal border
- CTA below card

### 8.5 Quiz (`#quiz`)
- Background: base
- Section spacing: `96px`
- Max width: `672px`
- Multi-step card with animated transitions
- Option cards:
  - Padding `16px`
  - Rounded `12px`
  - Contextual colors (green, amber, red states)
- Result card:
  - Top border accent: `3px solid teal`
  - Full-width primary CTA

### 8.6 System (`#system`)
- Background: alternate
- Section spacing: `96px`
- Container max width: `1024px`
- 3-column cards on desktop
- Each card:
  - Radius `16px`
  - Padding `24px`
  - Top border `2px solid teal`
  - Big step number (`48px`, bold, teal glow)

### 8.7 Proof
- Background: base
- Section spacing: `96px`
- Container max width: `1024px`
- Inner stack spacing: large (`~80px` between major blocks)
- Includes:
  - 4 stat cards (2 cols mobile, 4 cols desktop)
  - 3 testimonial cards
  - 2-column comparison table card

### 8.8 Success vs Failure
- Background: alternate
- Section spacing: `96px`
- Container max width: `896px`
- 2 comparison cards:
  - Left (success): green tint
  - Right (failure): red tint
  - Both use blur and soft borders

### 8.9 FAQ
- Background: base
- Section spacing: `96px`
- Max width: `672px`
- Accordion item style:
  - Collapsed bg: `rgba(255,255,255,0.02)`
  - Open bg: `rgba(13,148,136,0.04)`
  - Border left accent when open: `2px teal`

### 8.10 Final CTA (`#final-cta`)
- Background: base
- Section spacing: `128px`
- Max width: `672px`
- H2 max size: `48px`
- Two CTA buttons (stacked mobile, inline desktop)
- Extra quote block with teal tinted background and border

### 8.11 Footer
- Top border: `1px solid rgba(255,255,255,0.06)`
- Vertical padding: `40px`
- Container max width: `1024px`
- Layout: stacked mobile, horizontal desktop

## 9) Mobile vs Desktop Rules
- Mobile first layout everywhere
- At desktop (`>=768px`):
  - 2 or 3 column grids activate
  - Navbar horizontal padding increases
  - Hero CTAs sit side-by-side
- Keep all major content centered and capped with max-widths above

## 10) GHL Builder Translation Guide
- Use one Section per block in the exact order in section map
- Set section backgrounds alternating base/alt where noted
- Place one Row inside each section and set max width manually
- Apply consistent top/bottom padding (`96px` default)
- Build reusable classes in custom CSS:
  - `.btn-teal`
  - `.btn-teal-outline`
  - `.glass-card`
  - `.teal-badge`
  - `.stat-number`
- Add global CSS variables first, then component classes

## 11) Ready-to-Paste Core CSS for GHL
```css
:root {
  --base-bg: #0a0f1a;
  --alt-bg: #0f1623;
  --text-primary: #f1f5f9;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;
  --teal: #0d9488;
  --teal-hover: #14b8a6;
  --success: #22c55e;
  --danger: #ef4444;
  --teal-glow: 0 0 20px rgba(13,148,136,0.3), 0 0 60px rgba(13,148,136,0.1);
  --teal-glow-strong: 0 0 30px rgba(13,148,136,0.4), 0 0 80px rgba(13,148,136,0.15);
}

body {
  font-family: 'Inter', sans-serif;
  background: var(--base-bg);
  color: var(--text-primary);
}

h1, h2, h3, h4, h5 {
  font-family: 'Plus Jakarta Sans', sans-serif;
}

.glass-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.btn-teal {
  background: var(--teal);
  color: #fff;
  font-weight: 600;
  box-shadow: 0 0 20px rgba(13,148,136,0.2);
  transition: all .2s ease;
}

.btn-teal:hover {
  background: var(--teal-hover);
  box-shadow: var(--teal-glow);
  transform: scale(1.02);
}

.btn-teal-outline {
  background: transparent;
  color: var(--teal);
  border: 1.5px solid var(--teal);
  font-weight: 600;
  transition: all .2s ease;
}

.btn-teal-outline:hover {
  background: var(--teal);
  color: #fff;
  box-shadow: var(--teal-glow);
}

.teal-badge {
  display: inline-flex;
  align-items: center;
  padding: 6px 16px;
  border-radius: 9999px;
  background: rgba(13,148,136,0.1);
  border: 1px solid rgba(13,148,136,0.2);
  color: var(--teal);
  font-size: 13px;
  letter-spacing: .05em;
  text-transform: uppercase;
}
```

## 12) Section Order Checklist (for GHL)
1. Fixed Navbar
2. Hero
3. Problem
4. Cost
5. Diagnosis
6. Quiz
7. System
8. Proof
9. Success vs Failure
10. FAQ
11. Final CTA
12. Footer
