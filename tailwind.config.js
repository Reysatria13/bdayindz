module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        beige: '#f0e4b1',
        terracotta: '#d86a3e',
        teal: '#1cb1a1',
        lightblue: '#a7d8f2',
      },
      fontFamily: {
        playful: ["Quicksand", "Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}
