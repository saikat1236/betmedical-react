/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslategray: {
          "100": "#4a4a4a",
          "200": "#444",
        },
        primary: "#3eb2b1",
        dark: "#09142f",
        darkgray: "#979797",
        black1: "#000",
        azure: {
          "100": "#e6fafa",
          "200": "rgba(230, 250, 250, 0.67)",
        },
        gainsboro: {
          "100": "#e8e8e8",
          "200": "#d9d9d9",
        },
        lightpink: "#ffa9a2",
        sec: "#cef5f5",
        dimgray: "#5a5a5a",
        "gray-500": "#667085",
        "gray-900": "#101828",
        "primary-700": "#6941c6",
        whitesmoke: {
          "100": "#f3f3f3",
          "200": "#eee",
        },
        gray1: {
          "100": "#8d8d8d",
          "200": "#0e1923",
        },
        black: "#242021",
      },
      spacing: {},
      fontFamily: {
        "lato": "Lato",
        // "sf-pro-display": "'SF Pro Display'",
        "helvetica-neue": "'Helvetica Neue'",
        "roboto": "Roboto",
        "segoe-ui": "'Segoe UI'",
      },
      borderRadius: {
        xl: "20px",
        "smi-3": "12.3px",
        "mini-2": "14.2px",
        "181xl": "200px",
      },
    },
    fontSize: {
      sm: "14px",
      xl: "20px",
      lg: "18px",
      base: "16px",
      "17xl": "36px",
      "5xl": "24px",
      "sm-7": "13.7px",
      "13xl": "32px",
      inherit: "inherit",
    },
    screens: {
      'sm': {'min': '0px', 'max': '932px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '933px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }


      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
    }
  },
  corePlugins: {
    preflight: false,
  },
};
