module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
    theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '0',
      },
    },
    extend: {
      colors: {
        primary: "#F1F3FF",
        secondary: "#0D28A6",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
