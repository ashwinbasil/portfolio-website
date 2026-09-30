/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "inverse-primary": "#bec6e0",
        "on-tertiary-container": "#75859d",
        "surface-container-lowest": "#ffffff",
        "on-primary": "#ffffff",
        "error-container": "#ffdad6",
        "secondary": "#00668a",
        "surface-variant": "#e0e3e5",
        "on-primary-fixed": "#131b2e",
        "on-secondary": "#ffffff",
        "surface-tint": "#565e74",
        "secondary-fixed-dim": "#7bd0ff",
        "secondary-fixed": "#c4e7ff",
        "tertiary-fixed": "#d3e4fe",
        "error": "#ba1a1a",
        "tertiary": "#000000",
        "outline-variant": "#c6c6cd",
        "on-primary-container": "#7c839b",
        "outline": "#76777d",
        "primary": "#000000",
        "on-error-container": "#93000a",
        "on-tertiary-fixed": "#0b1c30",
        "secondary-container": "#40c2fd",
        "on-secondary-fixed-variant": "#004c69",
        "primary-fixed": "#dae2fd",
        "surface-container": "#eceef0",
        "tertiary-fixed-dim": "#b7c8e1",
        "on-secondary-container": "#004d6a",
        "on-secondary-fixed": "#001e2c",
        "on-primary-fixed-variant": "#3f465c",
        "surface-bright": "#f7f9fb",
        "inverse-surface": "#2d3133",
        "primary-container": "#131b2e",
        "tertiary-container": "#0b1c30",
        "on-surface-variant": "#45464d",
        "inverse-on-surface": "#eff1f3",
        "on-error": "#ffffff",
        "on-surface": "#191c1e",
        "surface-container-high": "#e6e8ea",
        "surface-dim": "#d8dadc",
        "surface-container-low": "#f2f4f6",
        "primary-fixed-dim": "#bec6e0",
        "on-tertiary": "#ffffff",
        "on-tertiary-fixed-variant": "#38485d",
        "surface": "#f7f9fb",
        "background": "#f7f9fb",
        "surface-container-highest": "#e0e3e5",
        "on-background": "#191c1e"
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      },
      spacing: {
        "section-gap": "96px",
        "margin-desktop": "48px",
        "container-max": "1280px",
        "gutter": "24px",
        "base": "8px",
        "margin-mobile": "16px"
      },
      fontFamily: {
        "body-sm": ["Inter"],
        "label-caps": ["JetBrains Mono"],
        "headline-lg-mobile": ["Inter"],
        "data-display": ["JetBrains Mono"],
        "headline-xl": ["Inter"],
        "body-md": ["Inter"],
        "headline-lg": ["Inter"]
      },
      fontSize: {
        "body-sm": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "label-caps": ["12px", { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "500" }],
        "headline-lg-mobile": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "data-display": ["18px", { lineHeight: "24px", fontWeight: "600" }],
        "headline-xl": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "600" }]
      }
    }
  }
}