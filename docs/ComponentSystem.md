# Coherent AI Labs — Enterprise Component System

This document is the reference guide for building new pages using the design system.
Every future page should be buildable using these reusable components without creating new styles.

---

## Architecture Overview

```
src/
├── lib/
│   ├── tokens.ts        # Design tokens (colors, spacing, typography, radii, shadows)
│   ├── motion.ts        # Motion system (easing, duration, stagger, reveal variants, hover presets)
│   ├── utils.ts         # cn() utility (clsx + tailwind-merge)
│   ├── seo.ts           # SEO metadata generator
│   └── structuredData.ts
├── components/
│   ├── animations/      # Motion components (Reveal, SplitText, MagneticButton, AmbientGlow, SectionTransition)
│   ├── ui/              # Primitives (Button, Card, Input, Heading, etc.)
│   ├── layouts/         # Section templates (FeatureSection, PageHero, BentoLayout, etc.)
│   ├── sections/        # Page-specific section implementations
│   └── layout/          # Global layout (Header, Footer)
├── hooks/               # Custom hooks (useMousePosition, useReducedMotion, etc.)
├── constants/           # Static data files
└── types/               # TypeScript interfaces
```

---

## Quick Start — Building a New Page

```tsx
import { PageHero } from '@/components/layouts/PageHero';
import { FeatureSection } from '@/components/layouts/FeatureSection';
import { CTA } from '@/components/ui/CTA';
import { Container } from '@/components/ui/Container';
import { SectionTransition } from '@/components/animations/SectionTransition';
import { Bot, Brain, Cloud } from 'lucide-react';

export default function NewPage() {
  return (
    <>
      <PageHero
        eyebrow="New Feature"
        title="Page Title Goes Here"
        description="Supporting description text."
      />
      <SectionTransition variant="glow" />
      <FeatureSection
        title="Key Capabilities"
        features={[
          { title: "Feature", description: "...", icon: Bot },
        ]}
      />
      <SectionTransition variant="sweep" />
      <Container className="py-24">
        <CTA title="Ready?" description="..." primaryAction={{ label: "Get Started", href: "/contact" }} />
      </Container>
    </>
  );
}
```

---

## Design Tokens (`src/lib/tokens.ts`)

Centralized values for consistency. Use these instead of hardcoding.

### Colors

| Token | Value | Use |
|-------|-------|-----|
| `colors.background.base` | `#020202` | Page background |
| `colors.background.elevated` | `#050505` | Cards, panels |
| `colors.background.hover` | `#0a0a0a` | Hover states |
| `colors.text.primary` | `#eaeaea` | Headings |
| `colors.text.muted` | `#888888` | Body text |
| `colors.text.dimmed` | `#666666` | Labels, captions |
| `colors.border.default` | `rgba(255,255,255,0.1)` | Card borders |
| `colors.border.hover` | `rgba(255,255,255,0.2)` | Hover borders |
| `colors.accent.primary` | `#ffffff` | CTAs, focus rings |

### Spacing

| Token | Value | Use |
|-------|-------|-----|
| `spacing.xs` | `0.5rem` | Tight gaps |
| `spacing.md` | `1rem` | Default gaps |
| `spacing.lg` | `1.5rem` | Section internal |
| `spacing.xl` | `2rem` | Block spacing |
| `spacing["5xl"]` | `8rem` | Section padding (py-32) |
| `sectionSpacing.headerGap` | `3rem` | Between header and content |

### Typography

- **Display font:** Space Grotesk (`font-display`)
- **Body font:** Inter (`font-sans`)
- **Mono font:** JetBrains Mono (`font-mono`)

| Scale | Size | Use |
|-------|------|-----|
| `hero` | clamp(3rem, 5vw, 4.5rem) | Homepage H1 |
| `sectionTitle` | clamp(2.25rem, 4vw, 3rem) | Section H2 |
| `subsectionTitle` | clamp(1.5rem, 2.5vw, 1.875rem) | H3 |
| `bodyLarge` | 1.125rem | Descriptions |
| `body` | 1rem | Body text |
| `bodySmall` | 0.875rem | Card text |
| `eyebrow` | 0.625rem | Overline labels |

---

## Motion System (`src/lib/motion.ts`)

### Easing

| Preset | Value | Use |
|--------|-------|-----|
| `EASE_OUT_EXPO` | `[0.16, 1, 0.3, 1]` | All primary animations |
| `EASE_IN_OUT` | `[0.4, 0, 0.2, 1]` | Breathing/loops |
| `EASE_SNAP` | `[0.22, 1, 0.36, 1]` | Micro-interactions |

### Durations

| Preset | Value | Use |
|--------|-------|-----|
| `DURATION.instant` | 0.2s | Button press |
| `DURATION.fast` | 0.35s | Tooltips |
| `DURATION.normal` | 0.5s | Card reveals |
| `DURATION.slow` | 0.8s | Section headers |
| `DURATION.dramatic` | 1.0s | Hero elements |

### Reveal Variants

Use with `<Reveal variant="...">` or directly with `reveal.fadeUp`:

| Variant | Effect | Best For |
|---------|--------|----------|
| `fadeUp` | Opacity + Y + Blur | Section headers, general content |
| `scaleUp` | Opacity + Scale + Blur | Cards, panels |
| `slideRight` | Opacity + X (from left) | Left-aligned content |
| `slideLeft` | Opacity + X (from right) | Right-side panels |
| `perspective` | Opacity + RotateX + Y + Blur | Hero CTAs, dramatic reveals |
| `fade` | Opacity only | Subtle elements |
| `pop` | Opacity + Scale (small) | Badges, icons |

### Stagger

```tsx
<RevealStagger stagger={0.08}>
  <RevealItem>First</RevealItem>
  <RevealItem>Second</RevealItem>
</RevealStagger>
```

| Preset | Value | Use |
|--------|-------|-----|
| `STAGGER.tight` | 0.03s | Pills, tags |
| `STAGGER.default` | 0.06s | List items |
| `STAGGER.wide` | 0.1s | Cards |
| `STAGGER.dramatic` | 0.15s | Hero elements |

---

## UI Primitives

### Button

```tsx
<Button variant="primary" size="default">Label</Button>
```

| Variant | Visual |
|---------|--------|
| `primary` | White bg, black text, hover scale |
| `secondary` | Dark bg, white text |
| `outline` | Transparent, white border |
| `ghost` | No bg, muted text |

Sizes: `sm`, `default`, `lg`, `icon`

### Card / MotionCard

```tsx
// Static card
<Card variant="default" padding="default" hoverEffect>Content</Card>

// Motion-enhanced card (auto entrance + hover)
<MotionCard entrance="fadeUp" delay={0.1}>Content</MotionCard>
```

Variants: `default`, `glass`, `ghost`
Padding: `default`, `sm`, `none`

### Badge / MotionBadge

```tsx
<Badge variant="glow" ping>AI-Powered</Badge>
<MotionBadge variant="glow" delay={0.2}>Viewport Pop</MotionBadge>
```

Variants: `default`, `primary`, `secondary`, `outline`, `glass`, `glow`

### Heading

```tsx
<Heading level={2}>Section Title</Heading>
```

Levels: 1-6 (auto-sizes, font-display, tracking-tight)

### Text

```tsx
<Text size="lg" variant="default">Body content</Text>
```

Sizes: `sm`, `default`, `lg`, `xl`
Variants: `default` (muted), `primary`, `light`, `dark`

### Input / Textarea

```tsx
<Input variant="default" inputSize="default" placeholder="Email" />
<Textarea variant="glass" inputSize="lg" />
```

Variants: `default`, `ghost`, `glass`
Sizes: `sm`, `default`, `lg`

### FormField / FormSection

```tsx
<FormSection title="Contact Details">
  <FormField label="Email" required error={errors.email}>
    <Input type="email" />
  </FormField>
</FormSection>
```

---

## Layout Components

### Section / MotionSection

```tsx
// Basic section
<Section padding="default" border="top" backgroundElement={<AmbientGlow />}>
  <Container>...</Container>
</Section>

// Motion-enhanced (built-in glow + noise)
<MotionSection glow="top-center" noise border="top">
  <Container>...</Container>
</MotionSection>
```

### Container

```tsx
<Container size="default">...</Container>
```

Sizes: `sm` (3xl), `md` (5xl), `default` (7xl), `lg` (1400px), `full`

### Grid

```tsx
<Grid cols={3} gap="default">...</Grid>
```

Cols: 1, 2, 3, 4, 12
Gaps: `sm`, `default`, `lg`, `none`

---

## Section Templates

### PageHero

```tsx
<PageHero
  eyebrow="Platform"
  title="Enterprise AI Platform"
  description="Supporting text."
  align="center"
>
  <Button variant="primary">CTA</Button>
</PageHero>
```

### FeatureSection

```tsx
<FeatureSection
  eyebrow="Capabilities"
  title="What We Build"
  description="..."
  features={[{ title, description, icon, value? }]}
  columns={3}
  glow="top-center"
/>
```

### StatsRow

```tsx
<StatsRow
  variant="cards"
  stats={[
    { value: "99.9%", label: "Uptime" },
    { value: "3x", label: "Faster" },
  ]}
/>
```

Variants: `default`, `bordered`, `cards`

### CTA

```tsx
<CTA
  title="Ready to start?"
  description="Let's build together."
  primaryAction={{ label: "Book Call", href: "/contact" }}
  secondaryAction={{ label: "Learn More", href: "/platform" }}
/>
```

---

## Animation Components

### Reveal

```tsx
<Reveal variant="fadeUp" delay={0.2}>Content reveals on scroll</Reveal>
```

### RevealStagger + RevealItem

```tsx
<RevealStagger stagger={0.08}>
  <RevealItem>Item 1</RevealItem>
  <RevealItem>Item 2</RevealItem>
</RevealStagger>
```

### SplitText

```tsx
<SplitText splitBy="word" staggerDelay={0.04} baseDelay={0.1} blur={10}>
  Engineering intelligent software
</SplitText>
```

Modes: `word`, `character`, `line`
Props: `triggerOnView`, `baseDelay`, `staggerDelay`, `blur`, `yOffset`, `duration`

### MagneticButton

```tsx
<MagneticButton strength={25} className="...">
  CTA Label
</MagneticButton>
```

### AmbientGlow / NoiseTexture

```tsx
<AmbientGlow position="top-center" size="lg" intensity={0.03} animate />
<NoiseTexture opacity={0.02} />
```

Positions: `top-center`, `top-left`, `top-right`, `center`, `bottom-center`, `bottom-left`, `bottom-right`, `custom`
Sizes: `sm`, `md`, `lg`, `xl`

### SectionTransition

```tsx
<SectionTransition variant="glow" />
```

Variants: `glow` (center line), `sweep` (left-to-right draw), `fade` (gradient bridge)

---

## Accessibility Checklist

Every component in this system includes:

- [x] `focus-visible:ring-2 focus-visible:ring-white` on interactive elements
- [x] `aria-expanded` on accordions and toggles
- [x] `aria-label` / `aria-labelledby` / `aria-controls` on disclosure patterns
- [x] `role="alert"` on error messages
- [x] `prefers-reduced-motion` bypass via `useReducedMotion()` hook
- [x] Keyboard navigation (Tab, Enter, Space, Escape)
- [x] Semantic HTML (section, nav, button, fieldset, legend)
- [x] Color contrast: white text (#eaeaea) on dark bg (#020202) = 16.5:1 ratio
- [x] Screen reader text via `sr-only` class where needed

---

## Performance Guidelines

1. **GPU-only animations:** Only animate `transform`, `opacity`, `filter`
2. **will-change hints:** Apply to continuously animated elements
3. **React.memo:** Use on expensive visualization components
4. **LazySection:** Wrap below-fold heavy sections
5. **Stagger wisely:** Cap stagger items at ~15 to avoid delayed perception
6. **Reduced motion:** Always provide `useReducedMotion()` gate
7. **No layout shifts:** All animated elements have fixed dimensions
8. **Static export:** Site generates at build time — no runtime server cost

---

## File Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| UI Primitives | PascalCase | `Button.tsx`, `Card.tsx` |
| Motion-Enhanced | `Motion` prefix | `MotionCard.tsx` |
| Section Templates | PascalCase | `FeatureSection.tsx` |
| Page Sections | PascalCase | `Hero.tsx`, `CoreServices.tsx` |
| Hooks | camelCase with `use` | `useMousePosition.ts` |
| Constants | camelCase | `navigation.ts` |
| Lib utilities | camelCase | `motion.ts`, `tokens.ts` |

---

## Adding a New Component

1. Create the component in the appropriate directory
2. Use CVA for variant management if it has multiple visual states
3. Import tokens from `@/lib/tokens` for any hardcoded values
4. Add motion via `Reveal` wrapper or `Motion*` variant
5. Include `focus-visible` and keyboard support
6. Gate animations with `useReducedMotion()`
7. Export from `@/components/ui/index.ts` barrel
8. Document usage in this file
