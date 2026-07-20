# Coherent AI Labs Design System

Welcome to the Coherent AI Labs Design System documentation. This system provides a robust set of UI primitives, complex components, animation helpers, layouts, and hooks designed to maintain a perfectly consistent aesthetic across the entire application while accelerating frontend development.

## 1. UI Primitives (`src/components/ui`)

Our UI primitives are built using Class Variance Authority (`cva`) to handle Tailwind variants efficiently.

### `Button`
- **Variants:** `default`, `primary`, `outline`, `glass`
- **Sizes:** `sm`, `md`, `lg`
- **Usage:** `<Button variant="primary">Get Started</Button>`

### `Tag` / `Badge` / `Chip`
- **Purpose:** Used for data labeling, categorizing, or highlighting status.
- **Usage:** `<Tag variant="outline">AI Model</Tag>`

### `Heading` & `Paragraph` (`Text`)
- **Purpose:** Handles the typography scale, ensuring perfect sizing, weight, and line-height.
- **Usage:** `<Heading level={1}>Transforming AI</Heading>` and `<Paragraph>Descriptive text.</Paragraph>`

### `GlassPanel` & `Card`
- **Purpose:** Base structural containers for content blocks, featuring blur, borders, and subtle glows.
- **Usage:** `<GlassPanel>Content</GlassPanel>`

## 2. Structural Layouts (`src/components/layouts`)

Avoid rebuilding standard page structures. Use our layout shells:

- **`MarketingLayout`:** Default layout wrapping standard pages (Header -> Main -> Footer).
- **`DocumentationLayout`:** Built-in sidebar and responsive grid for docs/blogs.
- **`SplitLayout`:** 50/50 visual split. Ideal for Login/Signup or Feature deep-dives.
- **`BentoLayout`:** A CSS Grid template optimized for Bento-box style UI feature cards.

## 3. Animation Library (`src/lib/animations.ts`)

Our motion logic is centralized using Framer Motion variants to ensure consistency and respect for OS-level Reduced Motion preferences.

- **Available Variants:** `fadeUp`, `fadeIn`, `slideLeft`, `slideRight`, `scale`, `staggerContainer`.
- **Usage:** 
  ```tsx
  import { m } from 'motion/react';
  import { fadeUp } from '@/lib/animations';

  <m.div variants={fadeUp} initial="hidden" animate="visible" />
  ```

### Advanced Animation Components (`src/components/animations/`)
- **`MagneticButton`:** Use this for primary CTAs on landing pages. The button subtly follows the cursor.
- **`SectionReveal`:** Wrap any section in this to automatically fade-up the content when it scrolls into view (powered by `useInView`).

## 4. Hooks (`src/hooks`)

- **`useIntersection`:** Simple visibility tracking.
- **`useReducedMotion`:** True if the user prefers reduced motion. All animations should respect this.
- **`useTheme`:** Manages the CSS `.dark` / `.light` class toggling.
- **`useScrollProgress`:** Returns `0-100` percentage of scroll depth.
- **`useScrollDirection`:** Useful for hiding/showing headers on scroll.

## 5. SEO & Metadata (`src/lib`)

Never hardcode SEO tags. Use the standard generators.
- **`generateSEO(props)`:** Returns structured objects for OpenGraph and Twitter cards.
- **`generateOrganizationSchema()`:** Generates JSON-LD for rich Google Search Results.
