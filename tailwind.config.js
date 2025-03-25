/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f2fbfa",
          100: "#d2f5f2",
          200: "#a5eae5",
          300: "#70d8d3",
          400: "#42bfbd",
          500: "#29a4a4",
          600: "#1e8183",
          700: "#1c6769",
          800: "#1b5154",
          900: "#1a4547",
          950: "#09272a",
        },
        accent: {
          50: "#fdf3f3",
          100: "#fbe5e5",
          200: "#f9cfcf",
          300: "#f4adad",
          400: "#eb7e7e",
          500: "#df5454",
          600: "#cb3737",
          700: "#a42929",
          800: "#8d2727",
          900: "#762626",
          950: "#400f0f",
        },
      },
    },
  },
  plugins: [],
};
