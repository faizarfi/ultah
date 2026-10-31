/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          50: "#FAF9F5",
          100: "#F5F4EE",
          200: "#EDEBE3",
          300: "#E3E0D5",
          DEFAULT: "#F7F6F0",
        },
        ink: {
          900: "#0C0D0E",
          800: "#18191B",
          700: "#27292D",
          600: "#44474E",
          500: "#6B7280",
          400: "#9CA3AF",
        },
        electric: {
          green: "#00FF77",
          emerald: "#10B981",
          dim: "#00E56A",
        },
        silver: {
          light: "#F1F2F4",
          DEFAULT: "#E2E4E9",
          dark: "#C7CAD1",
        }
      },
      fontFamily: {
        mono: ["var(--font-space-grotesk)", "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        widest2: "0.25em",
        widest3: "0.35em",
      },
      boxShadow: {
        'sheet': '0 25px 60px -15px rgba(0, 0, 0, 0.08), 0 0 1px 1px rgba(0, 0, 0, 0.04)',
        'sheet-hover': '0 35px 80px -20px rgba(0, 0, 0, 0.12), 0 0 1px 1px rgba(0, 0, 0, 0.06)',
        'glow-accent': '0 0 20px -5px rgba(0, 255, 119, 0.4)',
      }
    },
  },
  plugins: [],
};
