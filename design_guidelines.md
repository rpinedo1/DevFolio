# Portfolio Website Design Guidelines

## Design Approach
**Selected Approach**: Reference-Based (LinkedIn/Portfolio Hybrid)
Drawing inspiration from professional networks like LinkedIn and modern developer portfolios like those on dribbble.com/shots/popular/web-design. This approach emphasizes clean professionalism while showcasing technical expertise attractively.

## Core Design Elements

### A. Color Palette
**Primary**: 220 15% 15% (sophisticated dark navy)
**Background**: 0 0% 97% (warm off-white) for light mode, 220 15% 8% for dark mode
**Accent**: 210 100% 56% (professional blue for CTAs and links)
**Text**: 220 15% 20% (dark charcoal) for light mode, 0 0% 90% for dark mode

### B. Typography
**Primary**: Inter (Google Fonts) - clean, modern sans-serif
**Headings**: 600-700 weight, varying sizes (text-4xl to text-lg)
**Body**: 400-500 weight, text-base to text-lg
**Code/Technical**: JetBrains Mono for any code snippets or technical details

### C. Layout System
**Spacing Units**: Tailwind 4, 8, 12, 16 (p-4, m-8, gap-12, etc.)
**Container**: max-w-4xl centered with px-6 padding
**Sections**: py-16 to py-24 for generous vertical breathing room

### D. Component Library

**Navigation**: Fixed header with smooth scroll links, clean typography
**Hero Section**: Name, title, brief tagline, and professional photo (if available)
**Experience Cards**: Timeline-style cards with company logos, dates, and key achievements
**Skills Grid**: Organized by categories (Languages, AWS/Cloud, etc.) with subtle borders
**Project Cards**: Image/icon, title, description, tech stack tags, and links
**Contact Section**: Professional links with subtle hover states

### E. Visual Treatments
**Gradients**: Subtle linear gradients on hero background (220 25% 95% to 220 15% 98%)
**Shadows**: Soft drop shadows on cards (shadow-sm to shadow-lg)
**Borders**: 1px borders in 220 15% 85% for light mode, 220 15% 25% for dark mode
**Hover States**: Gentle scale transforms (scale-105) and shadow increases

## Images Section
**Professional Headshot**: Optional hero image (256x256px, rounded-full) in hero section
**Company Logos**: Small logos (48x48px) for Amazon, Intel in experience timeline
**Project Screenshots**: 400x250px cards for personal projects showcase
**Background**: Subtle geometric pattern or gradient overlay behind hero text

## Key Design Principles
- **Professional First**: Clean, recruiter-friendly aesthetic that builds trust
- **Content Hierarchy**: Clear visual hierarchy emphasizing key achievements and skills
- **Mobile Responsive**: Fully responsive design optimized for mobile recruiters
- **Performance**: Fast loading with optimized images and minimal animations
- **Accessibility**: High contrast ratios, keyboard navigation, screen reader friendly