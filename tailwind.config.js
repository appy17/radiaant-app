// eslint-disable-next-line no-undef
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Poppins",
      },
    },
    
  },
  screens: {
    ssm: "370px",
    mv: "400px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tw-elements/plugin.cjs")],
});
