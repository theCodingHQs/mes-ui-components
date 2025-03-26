
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3b82f6",
          foreground: "#ffffff"
        },
        secondary: {
          DEFAULT: "#6b7280",
          foreground: "#ffffff"
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff"
        },
        accent: {
          DEFAULT: "#f3f4f6"
        },
        ring: "#3b82f6",
        input: "#e5e7eb"
      }
    },
  },
  plugins: [],
}
