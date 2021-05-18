const Theme = {
  colors: {
    darkBlue: "#0e1930",
    lightBlue: "#0070F4",
    white: "#fff",
    paleWhite: "rgba(255, 255, 255,0.8)",
    footer: "rgb(9, 19, 38)",
  },
  fonts: {
    roboto: "'Roboto', sans-serif",
    biryani: "'Biryani', sans-serif",
  },
  mediaQueries: {
    "bellow-1280": `screen and (max-width: 1280px)`,
    "bellow-1024": `screen and (max-width: 1024px)`,
    "bellow-1000": `screen and (max-width: 1000px)`,
    "bellow-900": `screen and (max-width: 900px)`,
    "bellow-768": `screen and (max-width: 768px)`,
    "bellow-600": `screen and (max-width: 600px)`,
    "bellow-580": `screen and (max-width: 580px)`,
    "bellow-420": `screen and (max-width: 420px)`,
    "bellow-320": `screen and (max-width: 320px)`,
  },
  sizes: {
    defaultPaddingTop: "3%",
    defaultPaddingSides: "calc((5%))",
  },
};

export default Theme;
