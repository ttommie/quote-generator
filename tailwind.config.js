/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: [ "Inter", "sans-serif" ]
      },
      colors: {
        background: "rgba(var(--background))",
        textColor: "rgba(var(--textColor))",
        border: "rgba(var(--borderColor))",
        borderAccent: "rgba(var(--borderAccent))",
        links: "rgba(var(--links))",
        linksHover: "rgba(var(--linksHover))",
        svg: "rgba(var(--svg))",
        buttonColor: "rgba(var(--buttonColor))",
        buttonAccentColor: "rgba(var(--buttonAccentColor))",
      }
    },
  },
  plugins: [],
}