module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        "autofit": "repeat(auto-fill, minmax(120px, 1fr))",
      },
      colors: {
        "primary-blue": "#7ca5c0",
        "primary-lighter-blue": "#AEC7D8",
        "secondary-blue": "#275370",
      },
      fontFamily: {
        body: ["Poppins"],
      },
      spacing: {
        "350px": "350px",
        "450px": "450px",
        "640px": "640px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
