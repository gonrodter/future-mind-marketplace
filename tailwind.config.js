module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      "150px": "150px",
      "240px": "240px",
    },
    extend: {
      gridTemplateColumns: {
        autofit: "repeat(auto-fill, minmax(120px, 1fr))",
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
        "264px": "264px",
        "300px": "300px",
        "350px": "350px",
        "450px": "450px",
        "640px": "640px",
      },
      screens: {
        xs: "585px",
        "1.5md": "900px",
        "1.5xl": "1370px",
      },
      maxWidth: {
        "240px": "240px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
