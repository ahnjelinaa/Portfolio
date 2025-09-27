module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

// tailwind.config.js
export default {
  darkMode: "class", // ⬅️ penting biar dark mode aktif
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
  extend: {
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0, transform: 'translateY(10px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
    },
    animation: {
      fadeIn: 'fadeIn 1s ease-out forwards',
    },
  },
}
};


