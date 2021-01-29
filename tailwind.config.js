module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-bg": "url('/images/hero.jpg')",
        "testimonial-bg" : "url('/images/back-customers.jpg')",
      }),
    },
    fontFamily: {
      sans: ["Roboto"],
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.5rem",
      "5xl": "3rem",
      "6xl": "3.4rem",
      "7xl": "5rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
