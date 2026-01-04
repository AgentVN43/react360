/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4D7E37",
        sub: "#F5F5DC",
      },
      fontFamily: {
        "kreey": ["Custom"],
        "custom2": ["Custom2"],
        "gliker": ["Gliker"],
        "risa": ["risa"],
      },
    },
  },
  plugins: [],
}
