# Remix of Portfolio Template

# LOVABLE TEMPLATE PROMPT
## Editorial Portfolio — Designer/Branding Focus

---

## TEMPLATE OVERVIEW

**Template Name:** Editorial Folio  
**Category:** Portfolio  
**Theme:** Elegant / Sophisticated / Editorial  
**Target User:** Creative professional — Designer/Brand Strategist  
**Core Pages:** Home, About, Services, Portfolio (with individual project pages), Contact

**Design Inspiration:** AlphaOmega Foundation (alphaomegafondation.com) — refined restraint, generous whitespace, sophisticated typography, intentional asymmetry, premium feel without flashiness.

---

## DESIGN SYSTEM

### Color Palette

```
Primary Background:    #FAFAF8  (warm off-white / cream)
Secondary Background:  #F5F5F3  (slightly darker cream for sections)
Tertiary Background:   #EDEDE9  (card backgrounds, subtle contrast)

Primary Text:          #1A1A1A  (near-black, softer than pure black)
Secondary Text:        #4A4A4A  (dark gray for body copy)
Tertiary Text:         #7A7A7A  (muted gray for captions, metadata)

Accent (sparingly):    #1A1A1A  (text-based accent — underlines, borders)
Hover States:          #3A3A3A  (slightly lighter than primary text)

Dividers/Lines:        #E0E0DC  (subtle warm gray)
```

**Usage Rules:**
- No bright colors. The sophistication comes from restraint.
- Accent is achieved through typography weight, size, and spacing — not color.
- Maintain high contrast ratios (minimum 4.5:1 for body text, 3:1 for large text).
- Photography and portfolio work provides the only "color" — design frames it elegantly.

---

### Typography

**Primary Font (Headlines):** Instrument Serif  
**Secondary Font (Body):** Inter or DM Sans (clean, modern sans-serif)

```
Hero Headline:         Instrument Serif, 72-96px, 400 weight, -0.02em tracking
Page Titles:           Instrument Serif, 48-64px, 400 weight, -0.02em tracking
Section Headers:       Instrument Serif, 32-40px, 400 weight, -0.01em tracking
Subheadings:           Inter, 14-16px, 500 weight, 0.08em tracking, uppercase
Body Copy:             Inter, 17-18px, 400 weight, 1.6-1.7 line height
Captions/Meta:         Inter, 13-14px, 400 weight, 0.02em tracking
Navigation:            Inter, 14px, 500 weight, 0.04em tracking
Buttons:               Inter, 14px, 500 weight, 0.06em tracking, uppercase
```

**Typography Rules:**
- Headlines should breathe — generous line height (1.1-1.2)
- Body copy optimized for readability — 65-75 characters per line max
- Use font weight and size for hierarchy, not color
- Avoid bold in body copy unless absolutely necessary
- Instrument Serif is for display only — never for body text

---

### Spacing System

```
Base Unit:             8px

Section Padding:       
  - Desktop:           120px vertical, 80px horizontal
  - Tablet:            80px vertical, 48px horizontal  
  - Mobile:            64px vertical, 24px horizontal

Component Spacing:     
  - Between sections:  120-160px
  - Between elements:  32-48px
  - Between text:      16-24px

Container Max Width:   1280px (content), 1440px (full-bleed images)
Grid:                  12-column with 24px gutters
```

**Spacing Philosophy:**
- Whitespace is a design element — be generous
- Asymmetry is intentional — not everything needs to be centered
- Content should feel like it has room to breathe

---

### Visual Elements

**Imagery:**
- Black and white or desaturated color photography preferred
- High-contrast, editorial quality
- Portfolio images can be full color — the work speaks
- AI-generated placeholder images should feel premium, abstract, or textural
- No stock photography aesthetic

**Borders & Lines:**
- 1px lines only — never thicker
- Warm gray (#E0E0DC) for dividers
- Use sparingly — whitespace should do the heavy lifting

**Shapes:**
- No rounded corners on containers (0px border-radius)
- Subtle rounded corners on buttons only (4px max)
- Clean, architectural aesthetic

**Icons:**
- Line-style icons only (1.5px stroke)
- Minimal use — text labels preferred
- Lucide or Phosphor icon libraries

---

## MICRO-INTERACTIONS & ANIMATIONS

### Global Animation Principles
- All animations: ease-out or cubic-bezier(0.16, 1, 0.3, 1)
- Duration: 300-500ms for most transitions
- Purposeful only — no animation for animation's sake
- Reduced motion: respect prefers-reduced-motion

### Specific Interactions

**Navigation:**
- Menu items: subtle underline grows from left on hover (300ms)
- Mobile menu: slide in from right with slight fade (400ms)

**Buttons:**
- Primary: background shifts slightly darker, subtle lift (transform: translateY(-1px))
- Text links: underline offset animation (underline-offset grows from 2px to 4px)

**Cards/Portfolio Items:**
- Image: subtle scale (1.02) with overflow hidden on container
- Text: slight opacity increase on caption
- Entire card: subtle shadow appears (box-shadow transition)

**Page Transitions:**
- Content fades in on scroll (intersection observer)
- Stagger children elements by 50-100ms
- Entry animation: fade + translateY(20px) to translateY(0)

**Scroll Behaviors:**
- Smooth scroll for anchor links
- Navigation: subtle background appears on scroll (after 100px)
- No parallax — keep it clean

---

## PAGE SPECIFICATIONS

---

### PAGE 1: HOME

**Purpose:** Establish premium brand presence, showcase selected work, guide to key pages.

#### Section 1: Hero
- **Layout:** Full viewport height (100vh), split or asymmetric layout
- **Left/Main Content:**
  - Small eyebrow text: "Design & Brand Strategy" (uppercase, tracked)
  - Main headline: "[Name] — Designer crafting brands with intention and restraint." (Instrument Serif, large)
  - Subtext: Brief positioning statement, 1-2 sentences max (Inter, secondary text color)
  - CTA: "View Selected Work" (text link with arrow, not button)
- **Right/Secondary:** 
  - Featured image or abstract visual element
  - Could be a signature project image, partially cropped
- **Scroll indicator:** Subtle animated line or arrow at bottom

#### Section 2: Selected Work Preview
- **Header:** 
  - Eyebrow: "Selected Work"
  - Title: "Projects" (Instrument Serif)
- **Layout:** 2-column grid on desktop, single column mobile
- **Content:** 3-4 featured projects
- **Each project card:**
  - Large image (16:10 or 4:3 aspect ratio, consistent)
  - Project title (Instrument Serif, 24px)
  - Category/Type (uppercase caption)
  - Year (caption)
  - Hover: subtle image zoom, reveal "View Project →"
- **Footer CTA:** "View All Projects →" (text link)

#### Section 3: Brief Introduction
- **Layout:** Asymmetric — text on one side, image on other
- **Content:**
  - Eyebrow: "About"
  - Pull quote or philosophy statement (Instrument Serif, 32-40px)
  - Short paragraph expanding on approach (2-3 sentences max)
  - Link: "Learn more about my approach →"
- **Image:** Portrait or workspace image, editorial quality

#### Section 4: Services Overview
- **Header:**
  - Eyebrow: "Services"
  - Title: "What I Do"
- **Layout:** 3-column grid or stacked list
- **Each service:**
  - Service name (Instrument Serif, 24px)
  - Brief description (1 sentence)
  - Learn more link
- **Design:** Minimal — typography-driven, no icons

#### Section 5: Recognition/Clients (Optional)
- **Layout:** Simple logo row or text list
- **Content:** "Selected clients" or "Featured in" 
- **Logos:** Grayscale, consistent sizing, generous spacing
- **Alternative:** Text-only list with subtle dividers

#### Section 6: Contact CTA
- **Layout:** Full-width, generous padding
- **Content:**
  - Headline: "Let's create something meaningful." (Instrument Serif)
  - Subtext: Availability statement or invitation
  - CTA Button: "Get in Touch" (primary button style)
- **Background:** Slightly darker cream (#F5F5F3)

---

### PAGE 2: ABOUT

**Purpose:** Personal story, approach, and credibility.

#### Section 1: Hero
- **Layout:** Large headline with portrait image
- **Headline:** "Designing with purpose since [year]." or similar
- **Image:** Professional portrait, editorial quality
- **Can be split layout or image as background with text overlay

#### Section 2: Introduction
- **Layout:** Wide text column (max 720px)
- **Content:**
  - Opening paragraph: Personal introduction, background
  - Philosophy/Approach: What drives the work
  - 3-4 paragraphs total, well-written, human voice
- **Styling:** Drop cap on first paragraph (optional), generous paragraph spacing

#### Section 3: Approach/Values
- **Layout:** 3-column grid or numbered list
- **Content:** 3-4 core values or principles
- **Each item:**
  - Number or icon (very minimal)
  - Value title (Instrument Serif)
  - Description (1-2 sentences)
- **Examples:** "Clarity over complexity," "Strategy before aesthetics," "Long-term thinking"

#### Section 4: Experience Timeline (Optional)
- **Layout:** Vertical timeline or simple list
- **Content:** Key career milestones, education, notable positions
- **Styling:** Minimal — dates + descriptions, subtle connecting line

#### Section 5: Recognition
- **Content:** Awards, publications, speaking engagements
- **Layout:** Simple grid or list
- **Styling:** Logo + text or text only

#### Section 6: Personal Note
- **Layout:** Narrow text column with image
- **Content:** Brief personal section — interests outside work
- **Purpose:** Human connection, relatability
- **Image:** Casual/lifestyle image

#### Section 7: CTA
- **Same pattern as Home contact CTA

---

### PAGE 3: SERVICES

**Purpose:** Detail offerings, build confidence, guide inquiries.

#### Section 1: Hero
- **Headline:** "Services" or "How I Can Help"
- **Subtext:** Brief overview of service approach
- **Layout:** Simple, typography-focused

#### Section 2: Services List
- **Layout:** Each service as expandable section or dedicated block
- **For each service (3-4 services):**

**Service Block Structure:**
- Service number (large, styled: "01")
- Service name (Instrument Serif, 32-40px)
- Description paragraph
- What's included (simple list, not bullets — use dashes or numbers)
- Ideal for / Best suited for (one line)
- Optional: Starting investment range
- CTA: "Inquire about [service] →"

**Example Services:**
1. Brand Strategy & Identity
2. Visual Design Systems
3. Art Direction
4. Brand Guidelines & Documentation

#### Section 3: Process Overview
- **Header:** "The Process" or "How We Work Together"
- **Layout:** Horizontal steps or vertical flow
- **Steps:** 4-5 phases (Discovery → Strategy → Design → Refinement → Delivery)
- **Each step:** Number, title, brief description
- **Styling:** Connected by subtle lines, clean spacing

#### Section 4: FAQ or Additional Info
- **Content:** 4-6 common questions
- **Layout:** Accordion or stacked (open by default)
- **Questions:** Timeline, revision process, what to prepare, etc.

#### Section 5: CTA
- **Headline:** "Ready to start?"
- **Include brief note about ideal projects
- **CTA Button:** "Start a Project"

---

### PAGE 4: PORTFOLIO (Index)

**Purpose:** Showcase all work, easy browsing, inspire confidence.

#### Section 1: Hero
- **Headline:** "Work" or "Selected Projects"
- **Subtext:** Optional filter or category description
- **Layout:** Minimal — let work speak

#### Section 2: Filter (Optional)
- **Categories:** All, Brand Identity, Visual Systems, Art Direction, etc.
- **Styling:** Text-based filter, active state with underline
- **Behavior:** Smooth filter transitions (items fade/reorder)

#### Section 3: Project Grid
- **Layout:** 
  - Desktop: 2-column asymmetric grid (varying sizes creates visual interest)
  - Tablet: 2-column even grid
  - Mobile: Single column
- **Each project card:**
  - Featured image (consistent aspect ratios: 16:10 for landscape, 4:5 for portrait)
  - Project title
  - Client name or project type
  - Year
  - Hover state: subtle zoom, overlay with "View Project" appears
- **Count:** 6-10 projects displayed
- **Load more:** Optional "Load More" button or pagination

#### Section 4: CTA
- **For custom/unlisted work inquiries
- **"Have a specific project in mind? Let's talk."

---

### PAGE 5: PORTFOLIO — Individual Project Page (Template)

**Purpose:** Deep dive into single project, showcase process and outcomes.

#### Section 1: Hero
- **Full-width featured image:** Hero shot of the project (edge to edge or with minimal margin)
- **Project title overlay or below image
- **Meta information:** Client, Year, Services provided, Industry

#### Section 2: Project Overview
- **Layout:** Two-column — overview text + key details sidebar
- **Left column:**
  - "Overview" or "The Brief"
  - 2-3 paragraphs describing project context, challenge, approach
- **Right column (sticky on desktop):**
  - Client
  - Industry  
  - Services
  - Year
  - Optional: Website link, awards

#### Section 3: Image Gallery
- **Layout:** Mixed — full-width images, 2-column grids, alternating
- **Content:** 8-15 images showing:
  - Logo/mark
  - Typography
  - Color palette
  - Applications (stationery, digital, environmental)
  - Details/close-ups
- **Spacing:** Generous padding between images
- **No captions necessary unless adding context

#### Section 4: Process Section (Optional)
- **If showing process:**
  - Sketches
  - Concepts explored
  - Before/after
- **Keep minimal — don't show everything

#### Section 5: Results/Impact (Optional)
- **Metrics or testimonial if available
- **Client quote with attribution

#### Section 6: Next Project Navigation
- **Layout:** Full-width section
- **Content:** "Next Project" with image preview + title
- **Behavior:** Links to next project in sequence
- **Loops back to first project at end

---

### PAGE 6: CONTACT

**Purpose:** Make getting in touch easy and inviting.

#### Section 1: Hero
- **Headline:** "Get in Touch" or "Let's Work Together"
- **Subtext:** Brief welcoming message about starting a conversation

#### Section 2: Two-Column Layout
- **Left column — Contact Form:**
  - Name (required)
  - Email (required)
  - Company/Organization (optional)
  - Project type (dropdown: Brand Identity, Visual Design, Art Direction, Other)
  - Budget range (dropdown or optional)
  - Project description (textarea)
  - How did you hear about me? (optional dropdown)
  - Submit button: "Send Message"
- **Form styling:**
  - Minimal borders (bottom border only or subtle full border)
  - Labels above inputs
  - Clear focus states
  - Generous input height (48-56px)
  
- **Right column — Contact Info:**
  - Email address (linked)
  - Location (City, Country)
  - Social links (text links: Instagram, LinkedIn, Twitter/X)
  - Response time note: "I typically respond within 24-48 hours"
  - Optional: Calendar booking link

#### Section 3: Additional Information
- **"What to expect" section:**
  - Brief process overview
  - Ideal project types
  - Current availability
- **FAQ mini-section** (2-3 questions)

#### Section 4: Alternative Contact
- **For quick inquiries:** Direct email CTA
- **"Prefer email? Reach out directly at [email]"

---

## GLOBAL COMPONENTS

### Navigation (Header)
- **Desktop:**
  - Logo/Name (left)
  - Nav links (center or right): Work, About, Services, Contact
  - Styling: Subtle, sophisticated
  - Behavior: Transparent on hero sections, solid on scroll
- **Mobile:**
  - Logo/Name (left)
  - Hamburger menu (right) — animated icon
  - Full-screen overlay menu
  - Large text links, stacked
  - Include social links in mobile menu

### Footer
- **Layout:** Multi-column or simple centered
- **Content:**
  - Logo/Name
  - Navigation links (repeat main nav)
  - Social links
  - Copyright + year
  - Optional: "Built with Lovable" credit
- **Styling:** Same background as page or slightly contrasting

### Buttons
- **Primary:** 
  - Background: #1A1A1A, Text: #FAFAF8
  - Padding: 16px 32px
  - Border-radius: 4px
  - Hover: slightly lighter background
- **Secondary/Ghost:**
  - Background: transparent
  - Border: 1px solid #1A1A1A
  - Text: #1A1A1A
  - Hover: filled background
- **Text Link:**
  - Underline animation
  - Arrow suffix for CTAs (→)

### Form Inputs
- **Style:** Minimal, bottom-border only or subtle full border
- **Background:** Transparent or very subtle fill
- **Focus:** Dark border, subtle shadow
- **Labels:** Above input, small caps optional

---

## RESPONSIVE REQUIREMENTS

### Breakpoints
```
Desktop:     1280px and up
Tablet:      768px - 1279px  
Mobile:      Below 768px
```

### Key Adaptations

**Navigation:**
- Desktop: Full horizontal nav
- Tablet: Can remain horizontal if space allows, or convert to hamburger
- Mobile: Always hamburger menu with full-screen overlay

**Typography:**
- Scale down proportionally (hero headlines: 96px → 64px → 40px)
- Maintain readability — body never below 16px on mobile
- Reduce tracking slightly on mobile for headlines

**Grids:**
- 2-column → single column on mobile
- Maintain rhythm — don't crush spacing
- Full-bleed images can remain full-bleed

**Spacing:**
- Reduce section padding proportionally
- Maintain generous feel — don't over-compress

**Touch Targets:**
- Minimum 44x44px for all interactive elements
- Extra padding on mobile nav items

**Images:**
- Serve appropriately sized images per viewport
- Consider art direction — different crops for mobile if needed

---

## ACCESSIBILITY REQUIREMENTS

- Color contrast minimum 4.5:1 for body text, 3:1 for large text
- All images have descriptive alt text
- Form labels properly associated with inputs
- Focus states visible on all interactive elements
- Skip to content link for keyboard users
- Semantic HTML structure (proper heading hierarchy)
- ARIA labels where needed
- Reduced motion support (prefers-reduced-motion media query)
- No essential information conveyed by color alone

---

## TECHNICAL REQUIREMENTS

- Clean, semantic HTML5
- CSS custom properties for design tokens
- Component-based structure for reusability
- No unused code or components
- Images optimized (WebP with fallbacks, lazy loading)
- Smooth 60fps animations
- Fast initial load (<3s on 3G)
- Complete meta tags (title, description, OG tags)
- Favicon set
- No console errors
- Form validation with clear error states
- Success states for form submission

---

## PLACEHOLDER CONTENT NOTES

**For AI-Generated Content:**
- Portfolio images: Abstract brand mockups, minimal stationery, typographic compositions
- Photography: Editorial style portraits, workspace shots, architectural details
- Text: Professional but warm tone, first person, confident not boastful

**Sample Project Names:**
- "Northlight Studio — Brand Identity"
- "Meridian Architects — Visual System"
- "Ember & Co — Brand Refresh"
- "Stillwater Journal — Editorial Design"

**Sample Service Descriptions:**
- Brand Strategy & Identity: "Comprehensive brand development from positioning to visual identity."
- Visual Design Systems: "Scalable design systems that maintain consistency across touchpoints."

---

## FINAL CHECKLIST

Before submission, verify:

- [ ] All pages complete and functional
- [ ] Responsive across all breakpoints
- [ ] All links working
- [ ] Form submits correctly
- [ ] Animations performant and purposeful
- [ ] No placeholder text remaining (unless intentional for template)
- [ ] Meta information complete
- [ ] Images optimized
- [ ] Color contrast passing
- [ ] Keyboard navigation working
- [ ] Mobile menu fully functional
- [ ] No console errors
- [ ] Load time acceptable
- [ ] Design cohesive across all pages

---

## PROMPT FOR LOVABLE

Copy and paste the following into Lovable to generate the initial template:

---

**START LOVABLE PROMPT**

Create a premium portfolio website template for a designer/brand strategist with a high-fashion editorial aesthetic inspired by alphaomegafondation.com.

**Design System:**
- Colors: Warm off-white background (#FAFAF8), near-black text (#1A1A1A), secondary text (#4A4A4A), subtle dividers (#E0E0DC). No bright accent colors — sophistication through restraint.
- Typography: Instrument Serif for headlines (elegant, editorial), Inter for body text. Large, confident headlines with tight tracking. Body at 17-18px with 1.6 line height.
- Spacing: Generous whitespace throughout. 120px section padding on desktop. Let content breathe.
- No rounded corners on containers. Subtle border-radius (4px) on buttons only.

**Pages to Create:**

1. **Home:**
   - Full-height hero with large Instrument Serif headline: "[Name] — Designer crafting brands with intention." Subtle scroll indicator.
   - Selected Work section: 2-column grid of 4 featured projects. Each card shows image, project title, category, year. Subtle hover zoom.
   - Brief About section: Asymmetric layout with pull quote and portrait image.
   - Services overview: 3 services listed minimally with titles and one-line descriptions.
   - Contact CTA section with darker cream background.

2. **About:**
   - Hero with large headline and editorial portrait
   - Long-form introduction (3-4 paragraphs, max 720px width)
   - 3 values/principles in a grid
   - Recognition/awards section
   - Contact CTA

3. **Services:**
   - Clean hero with "Services" headline
   - 3-4 services, each as a distinct block with: service number (01, 02...), title, description, what's included list, and "Inquire" link
   - 4-step process section
   - FAQ accordion
   - CTA to start project

4. **Portfolio (index):**
   - "Work" headline
   - Asymmetric 2-column grid of 6-8 project cards
   - Each card: featured image, title, client/type, year
   - Hover reveals "View Project"

5. **Portfolio (single project template):**
   - Full-width hero image
   - Two-column layout: project overview text + sticky details sidebar (client, services, year)
   - Image gallery: mix of full-width and 2-column images
   - "Next Project" navigation at bottom

6. **Contact:**
   - Two-column: contact form (left) and contact info (right)
   - Form fields: name, email, company, project type dropdown, budget dropdown, message textarea
   - Right side: email, location, social links, response time note

**Global Components:**
- Header: Logo left, nav links right (Work, About, Services, Contact). Transparent on hero, solid white on scroll. Hamburger menu on mobile with full-screen overlay.
- Footer: Logo, nav links, social links, copyright. Clean and minimal.

**Interactions:**
- Subtle hover animations: nav underline grows, buttons lift slightly, images scale (1.02)
- Page content fades in on scroll with slight upward motion
- Smooth scrolling for anchor links
- All animations 300-400ms with ease-out timing

**Requirements:**
- Fully responsive (desktop, tablet, mobile)
- Accessibility compliant (contrast, focus states, semantic HTML)
- Performance optimized
- Clean component-based code structure

Generate placeholder content appropriate for a design/branding professional portfolio. Use abstract, sophisticated imagery placeholders. Professional, confident copy.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://elegant-folio-maker-12.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c551fe1a-4de7-4815-bc05-dc90e8fcd418).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
