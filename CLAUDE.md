# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Alphaswiss is a Next.js 14 website for an independent wealth management company. The project uses modern React patterns with TypeScript, Tailwind CSS for styling, and follows App Router architecture.

## Commands

### Development
- `npm run dev` - Start the development server on localhost:3000
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality checks

### Testing
No testing framework is currently configured in this project.

## Architecture

### Directory Structure
- `app/` - Next.js 14 App Router pages and layouts
  - `layout.tsx` - Root layout with Inter and Playfair Display fonts
  - `page.tsx` - Homepage composed of reusable sections
  - `globals.css` - Global CSS with CSS variables for theming
- `components/` - Reusable React components organized by type
  - `layout/` - Layout components (Navbar, Footer)
  - `sections/` - Page sections (Hero, Values, Services)
  - `ui/` - UI primitives (Button component using class-variance-authority)
- `lib/` - Utility functions
  - `utils.ts` - Contains `cn()` utility for merging Tailwind classes

### Technology Stack
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with CSS-in-JS pattern using CSS variables
- **Typography**: Google Fonts (Inter, Playfair Display)
- **UI Patterns**: Component composition, shadcn/ui style components
- **State Management**: None currently implemented
- **Animation**: Framer Motion for interactions

### Design System
- Uses CSS variables for theming (`--primary`, `--secondary`, etc.)
- Custom brand colors: Swiss red (`#DA291C`) and gold (`#C5A059`)
- Consistent spacing and typography scale through Tailwind
- Component variants handled through class-variance-authority

### Path Aliases
- `@/*` maps to the project root for clean imports
- Example: `import { cn } from "@/lib/utils"`

### Key Dependencies
- **UI**: @radix-ui/react-slot, class-variance-authority, clsx, tailwind-merge
- **Animation**: framer-motion
- **Icons**: lucide-react

## Development Notes

- Components follow a modular pattern with clear separation between layout, sections, and UI primitives
- Styling uses Tailwind utilities with a design system based on CSS variables
- The project structure supports scalability with organized component directories
- All TypeScript strict mode enabled with path mapping configured