/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#5F7ADB",
        secondary: "#A2B2EE",
        background: "#282b32",
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        ":root": {
          "--color-primary": theme("colors.primary"),
          "--color-secondary": theme("colors.secondary"),
        },
      });
    },
  ],
};
