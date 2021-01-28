module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-bg": "url('/images/hero.jpg')",
      }),
    },
    fontFamily: {
      sans: ["Roboto"],
    },
    fontSize: {
      "6xl": "3.4rem",
    },
    lineHeight: {
      "leading-10": "3.8rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
