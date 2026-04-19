import forms from '@tailwindcss/forms'
import containerQueries from '@tailwindcss/container-queries'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "error-container": "#93000a",
        "surface-container": "#1f1f1f",
        "primary-fixed-dim": "#abc7ff",
        "inverse-on-surface": "#303030",
        "surface-container-lowest": "#0e0e0e",
        "surface-container-low": "#1b1b1b",
        "error": "#ffb4ab",
        "on-error-container": "#ffdad6",
        "on-primary-fixed": "#001b3f",
        "surface-variant": "#353535",
        "on-tertiary-fixed-variant": "#464649",
        "surface": "#131313",
        "surface-bright": "#393939",
        "outline": "#8b919f",
        "primary-fixed": "#d7e2ff",
        "on-secondary": "#2f3034",
        "on-tertiary": "#303033",
        "on-background": "#e2e2e2",
        "surface-dim": "#131313",
        "surface-container-highest": "#353535",
        "on-primary-container": "#fcfbff",
        "on-primary": "#002f66",
        "tertiary": "#c7c6c9",
        "inverse-primary": "#005cbb",
        "on-tertiary-fixed": "#1b1b1e",
        "tertiary-fixed": "#e4e2e5",
        "on-secondary-fixed": "#1a1b1f",
        "on-error": "#690005",
        "secondary-fixed-dim": "#c7c6cb",
        "inverse-surface": "#e2e2e2",
        "primary-container": "#0071e3",
        "tertiary-container": "#747376",
        "tertiary-fixed-dim": "#c7c6c9",
        "on-surface": "#e2e2e2",
        "primary": "#abc7ff",
        "background": "#131313",
        "secondary": "#c7c6cb",
        "outline-variant": "#414753",
        "secondary-fixed": "#e3e2e7",
        "on-tertiary-container": "#fdfafe",
        "surface-container-high": "#2a2a2a",
        "surface-tint": "#abc7ff",
        "on-surface-variant": "#c1c6d6",
        "on-secondary-container": "#b5b4ba",
        "on-primary-fixed-variant": "#00458f",
        "secondary-container": "#46464b",
        "on-secondary-fixed-variant": "#46464b"
      },
      "borderRadius": {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
      "fontFamily": {
        "headline": ["Inter", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Inter", "sans-serif"],
        "inter": ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [
    forms,
    containerQueries
  ],
}
