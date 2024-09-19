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
        vyellow: "#DEDF1B",
        vbg: "#18181B",
        vbgGreen: "#000000",
        vGray: "#727070",
        vlitegrey: "#808080",
        vbgYellow: "#DEDF1B",
        vbgdarkYellow: "#DEDF1B",
        vbgCardBrown: "#1E1E1E",
        vbgdarkYellowcard:"#DEDF1B",
        vbgbtnBrown:"#303032",
        vtabcolor:"#9ca3af",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        orbit: ["Orbitron", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        bg: "teal-600",
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
        marqueebtn: 'marquee 5s linear infinite',
  
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
     
    },
  },
  plugins: [],
};
