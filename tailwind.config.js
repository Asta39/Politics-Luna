/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
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
        border: "var(--color-border)", /* gray-200 */
        input: "var(--color-input)", /* white */
        ring: "var(--color-ring)", /* green-500 */
        background: "var(--color-background)", /* white */
        foreground: "var(--color-foreground)", /* gray-900 */
        primary: {
          DEFAULT: "var(--color-primary)", /* green-900 */
          foreground: "var(--color-primary-foreground)", /* white */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* green-500 */
          foreground: "var(--color-secondary-foreground)", /* white */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* red-600 */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* gray-50 */
          foreground: "var(--color-muted-foreground)", /* gray-500 */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* yellow-600 */
          foreground: "var(--color-accent-foreground)", /* green-900 */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* white */
          foreground: "var(--color-popover-foreground)", /* gray-900 */
        },
        card: {
          DEFAULT: "var(--color-card)", /* white */
          foreground: "var(--color-card-foreground)", /* gray-900 */
        },
        success: {
          DEFAULT: "var(--color-success)", /* green-600 */
          foreground: "var(--color-success-foreground)", /* white */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* yellow-500 */
          foreground: "var(--color-warning-foreground)", /* green-900 */
        },
        error: {
          DEFAULT: "var(--color-error)", /* red-600 */
          foreground: "var(--color-error-foreground)", /* white */
        },
        surface: {
          DEFAULT: "var(--color-surface)", /* gray-50 */
          foreground: "var(--color-surface-foreground)", /* gray-900 */
        },
        'text-primary': "var(--color-text-primary)", /* gray-900 */
        'text-secondary': "var(--color-text-secondary)", /* gray-500 */
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        'headline': ['Inter', 'sans-serif'],
        'body': ['Source Sans Pro', 'sans-serif'],
        'accent': ['Playfair Display', 'serif'],
      },
      fontWeight: {
        'headline-medium': '600',
        'headline-bold': '700',
        'headline-black': '800',
        'body-normal': '400',
        'body-semibold': '600',
        'accent-semibold': '600',
      },
      boxShadow: {
        'cta': 'var(--shadow-default)',
      },
      transitionDuration: {
        'smooth': '200ms',
      },
      transitionTimingFunction: {
        'smooth': 'ease-in-out',
      },
      zIndex: {
        'header': '100',
        'floating': '90',
        'tooltip': '110',
        'mobile-menu': '120',
        'modal': '1000',
      },
      spacing: {
        'header-height': '60px',
        'nav-spacing': '16px',
        'touch-target': '44px',
      },
      maxWidth: {
        'content': '1200px',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}