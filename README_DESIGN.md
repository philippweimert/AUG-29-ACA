# Design System & Visual Identity

This document outlines the design system implemented for the visual overhaul of the Acencia website. It serves as a guide for future development to ensure consistency, maintainability, and adherence to the brand identity.

## Guiding Principles

- **Clean & Modern**: The design prioritizes clarity, whitespace, and a modern aesthetic, moving away from decorative elements like gradients and complex animations.
- **Token-Based**: All visual primitives (colors, fonts, spacing, etc.) are defined as design tokens (CSS variables). **Never hardcode style values.** Always use the appropriate token.
- **Component-Driven**: The UI is built from a set of reusable, accessible components. Always reuse an existing component before creating a new one.
- **Accessible**: All components and styles are designed to meet WCAG 2.1 AA standards.

## Design Tokens

The core of the design system is a set of design tokens defined in `frontend/src/styles/tokens.css`. These are then consumed by Tailwind CSS in `frontend/tailwind.config.js`.

### Colors

The color palette is divided into brand colors, neutrals, and semantic colors.

- **Primary Colors**: Dark Blue (`--color-primary-900`), Light Blue (`--color-primary-400`), etc.
- **Accent Color**: Orange (`--color-accent-500`) is used for primary calls-to-action and highlights.
- **Semantic Colors**: Use semantic variables like `--color-background`, `--color-foreground`, `--color-border-default` in CSS. In Tailwind, use utility classes like `bg-background`, `text-foreground`, `border-border`.

### Typography

- **Display Font**: "Tenor Sans" (`--font-display`) is used for all headings (H1-H4).
- **Body Font**: "Open Sans" (`--font-body`) is used for all other text.
- **Scale**: The typography scale is defined in `tailwind.config.js` and can be accessed via utility classes like `text-h1`, `text-base`, etc.

### Spacing

A 4px-based spacing scale is defined with variables from `--spacing-1` (4px) to `--spacing-10` (64px). Use Tailwind's spacing utilities (`p-4`, `m-8`, etc.) which are mapped to these tokens.

## Component Inventory

The UI is built using a combination of custom components and `shadcn/ui` conventions, which are based on Radix UI for accessibility. Core components can be found in `frontend/src/components/ui/`.

### Key Components

- **Button**: Standard button component with variants (primary, secondary, ghost, link). Found in `frontend/src/components/ui/button.js`.
- **Card**: Used for displaying content in a structured way. Variants for different use cases exist. Found in `frontend/src/components/ui/card.js`.
- **Header & Footer**: The global site header and footer are located in `frontend/src/components/`.
- **Navigation**: The header uses Radix UI's accessible Navigation Menu for dropdowns.

## How to Extend the System

- **Adding New Components**: When creating new components, they should be built using the existing design tokens for all styling.
- **Modifying Tokens**: If a token value needs to be changed (e.g., updating the primary accent color), the change should be made in `frontend/src/styles/tokens.css`. This single change will propagate throughout the entire application.
- **Style Guide**: A living style guide is available at the `/styleguide` route of the application. Use this to see all available tokens and components in action. Before building a new component, check the style guide to see if a suitable one already exists.

## Accessibility

- **Focus States**: All interactive elements have a clear, consistent focus state (a 2px outline).
- **Keyboard Navigation**: All interactive components, especially navigation menus and dropdowns, are fully keyboard navigable.
- **Semantic HTML**: Use semantic HTML5 tags (`<nav>`, `<main>`, `<section>`, etc.) wherever possible.
