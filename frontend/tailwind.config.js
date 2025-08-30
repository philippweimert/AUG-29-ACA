/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: 'var(--color-border-default)',
        'border-subtle': 'var(--color-border-subtle)',
        input: 'var(--color-border-default)',
        ring: 'var(--color-focus-ring)',
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        primary: {
          DEFAULT: 'var(--color-primary-900)',
          foreground: 'var(--color-white)',
        },
        secondary: {
          DEFAULT: 'var(--color-primary-400)',
          foreground: 'var(--color-primary-900)',
        },
        destructive: {
          DEFAULT: 'hsl(0 100% 50%)',
          foreground: 'var(--color-white)',
        },
        muted: {
          DEFAULT: 'var(--color-neutral-100)',
          foreground: 'var(--color-text-subtle)',
        },
        accent: {
          DEFAULT: 'var(--color-accent-500)',
          foreground: 'var(--color-white)',
        },
        popover: {
          DEFAULT: 'var(--color-surface-primary)',
          foreground: 'var(--color-text-primary)',
        },
        card: {
          DEFAULT: 'var(--color-surface-primary)',
          foreground: 'var(--color-text-primary)',
        },
      },
      borderRadius: {
        lg: 'var(--radius-lg)',
        md: 'var(--radius-base)',
        sm: 'var(--radius-sm)',
      },
      fontFamily: {
        sans: ['var(--font-body)', 'sans-serif'],
        display: ['var(--font-display)', 'sans-serif'],
      },
      fontSize: {
        'caption': ['14px', '1.5'],
        'base': ['16px', '1.65'],
        'lg': ['18px', '1.65'],
        'h4': ['22px', '1.4'],
        'h3': ['28px', '1.4'],
        'h2': ['40px', '1.3'],
        'h1': ['56px', '1.2'],
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
      },
      spacing: {
        '1': 'var(--spacing-1)',
        '2': 'var(--spacing-2)',
        '3': 'var(--spacing-3)',
        '4': 'var(--spacing-4)',
        '5': 'var(--spacing-5)',
        '6': 'var(--spacing-6)',
        '7': 'var(--spacing-7)',
        '8': 'var(--spacing-8)',
        '9': 'var(--spacing-9)',
        '10': 'var(--spacing-10)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: '0' },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: '0' },
        },
      },
      animation: {
        "accordion-down": "accordion-down var(--duration-base) var(--ease-out)",
        "accordion-up": "accordion-up var(--duration-base) var(--ease-out)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};