/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "forest-green": "#386641", // deep green
        "meadow-green": "#6a994e", // vibrant green
        "lime-green": "#a7c957", // yellowish-green
        "eggshell-white": "#f2e8cf", // light beige
        "cranberry-red": "#bc4749", //  deep red
      },
      backgroundImage: {
        herobg: "url('./assets/landing.png')",
        logobg: "url('./assets/logoEat.png')",
      },
    },
  },
  plugins: [],
};
