/** @type {import('tailwindcss').Config} */
const path = require('path');

module.exports = {
  content: [
    "./index.html", 
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      // ...
    ],
  },
  theme: {
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      fontFamily: {
        kaufmann: ["Kaufmann BT"],
        lato: ["Lato", "sans-serif"],

      },
      colors: {
        main: "#006778",
        secondary: "#E6BA95",
        tertial: "#00BFDE",
        accent: "#780032",
        "accent-light": "#DE005D",
        text: "#262D33",
        white: "#fff",
        subtext: "#737373",
        blue: "#5FE4F9E5",
        "secondary-placeholder": "#522600",
        "error-input-bgn": "#FFF2F2",
        light: "rgba(255, 247, 239, 0.68)",
        sand: "rgba(230, 186, 149, 0.68)",
        backdrop: 'rgba(51, 77, 81, 0.50)',
        bookingSubText: "rgba(0, 0, 0, 0.50)",
        customRed: "#FF4E56",
        lightBlue:"#1dd0ee4d",
      },
      backgroundImage: {
        'primary-gradient': 'radial-gradient(circle, rgba(0, 103, 120, 0) 0%, #006778 50%, rgba(0, 103, 120, 0) 100%)',
        'main-gradient': "linear-gradient(180deg, #006778 0%, #00BFDE 100%)",
        'auth-button-bgn': "linear-gradient(21deg, #00BFDE 13.35%, #006778 86.65%)",
        'main-fb-bgn': "linear-gradient(164deg, #006778 4.74%, #00BFDE 88.81%)",
        'main-wa-bgn': "linear-gradient(9deg, #00BFDE 5.7%, #008298 71.75%, #006778 83.33%)",
        'main-google-bgn': "linear-gradient(69deg, #00BFDE 8.52%, #006778 91.48%)",
      },
      backgroundSize: {
        '600%': '600% 600%',
      },
      animation: {
        'gradient': 'gradient 5s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".main-border": {
          "border-image": "linear-gradient(to right, #00BFDE , #006778 )",
          "border-image-slice": "1",
          "border-radius": "12px",
        },

        ".border-error": {
          "border-image": "linear-gradient(to right, #DE005D , #780032)",
          "border-image-slice": "1",
          "border-radius": "12px",
        },
        ".disabled-button::after": {
          content: "''",
          position: "absolute",
          top: "-2px",
          left: "-2px",
          right: "-2px",
          bottom: "-2px",
          backgroundColor: "#ccc",
          zIndex: "-1",
          borderRadius: "12px",
          pointerEvents: "none",
        },
        ".input-border-gradient": {
          background:
            "linear-gradient(white, white) padding-box, linear-gradient(to right, #00BFDE , #006778 ) border-box",
          "border-image": "linear-gradient(to right, #00BFDE , #006778 )",
        },
        ".input-border-gradient-modal": {
          background:
            "linear-gradient(white, white) padding-box, linear-gradient(to left, #00BFDE , #006778 ) border-box",
          "border-image": "linear-gradient(to right, #00BFDE , #006778 )",
        },
        ".input-border-gradient-error": {
          background:
            "linear-gradient(#FFF2F2, #FFF2F2) padding-box, linear-gradient(to right, #DE005D , #780032 ) border-box",
          "border-image": "linear-gradient(to right, #DE005D , #780032)",
        },
        ".clip-path-swiper-before": {
          "clip-path":
            "polygon(0% 2.268%,0% 2.268%,0.018% 1.9%,0.071% 1.551%,0.156% 1.226%,0.27% 0.929%,0.41% 0.664%,0.573% 0.438%,0.757% 0.253%,0.958% 0.116%,1.174% 0.03%,1.401% 0%,98.855% 0%,98.855% 0%,99.181% 0.06%,99.473% 0.228%,99.727% 0.488%,99.937% 0.826%,100.099% 1.224%,100.207% 1.668%,100.256% 2.14%,100.241% 2.626%,100.158% 3.11%,100% 3.575%,58.451% 99.038%,58.451% 99.038%,58.367% 99.212%,58.274% 99.37%,58.174% 99.512%,58.065% 99.637%,57.951% 99.745%,57.83% 99.835%,57.704% 99.906%,57.574% 99.958%,57.441% 99.989%,57.306% 100%,1.401% 100%,1.401% 100%,1.174% 99.97%,0.958% 99.884%,0.757% 99.747%,0.573% 99.562%,0.41% 99.336%,0.27% 99.071%,0.156% 98.774%,0.071% 98.449%,0.018% 98.1%,0% 97.732%,0% 2.268%)",
        },
        ".clip-path-swiper-after": {
          "clip-path":
            "polygon( 37.355% 0.951%,37.355% 0.951%,37.429% 0.779%,37.511% 0.623%,37.6% 0.482%,37.695% 0.358%,37.796% 0.252%,37.903% 0.163%,38.013% 0.093%,38.127% 0.042%,38.245% 0.011%,38.364% 0%,98.764% 0%,98.764% 0%,98.965% 0.029%,99.155% 0.115%,99.332% 0.251%,99.494% 0.434%,99.638% 0.659%,99.762% 0.922%,99.862% 1.217%,99.937% 1.54%,99.984% 1.886%,100% 2.251%,100% 97.749%,100% 97.749%,99.984% 98.114%,99.937% 98.46%,99.862% 98.783%,99.762% 99.078%,99.638% 99.341%,99.494% 99.566%,99.332% 99.749%,99.155% 99.885%,98.965% 99.971%,98.764% 100%,1.256% 100%,1.256% 100%,0.969% 99.941%,0.711% 99.774%,0.487% 99.515%,0.301% 99.179%,0.158% 98.783%,0.063% 98.342%,0.02% 97.873%,0.034% 97.39%,0.108% 96.91%,0.247% 96.448%,37.355% 0.951%)",
        },
        ".clip-path-signup-1": {
          "clip-path":
            "polygon( 0% 0%,0% 0%,0.79% 1.029%,3.002% 3.954%,6.401% 8.533%,10.754% 14.524%,15.825% 21.685%,21.379% 29.775%,27.182% 38.55%,32.998% 47.77%,38.594% 57.192%,43.734% 66.575%,43.734% 66.575%,49.225% 75.029%,55.773% 81.932%,62.993% 87.439%,70.5% 91.706%,77.909% 94.89%,84.835% 97.145%,90.892% 98.628%,95.695% 99.494%,98.86% 99.899%,100% 100%,0% 100%,0% 0%)",
        },
        ".clip-path-signup-2": {
          "clip-path":
            "polygon( 31.053% 82.832%,31.053% 82.832%,34.453% 79.545%,37.619% 76.023%,40.564% 72.338%,43.303% 68.565%,45.85% 64.776%,48.218% 61.044%,50.421% 57.442%,52.474% 54.043%,54.391% 50.92%,56.184% 48.145%,56.184% 48.145%,57.932% 45.713%,59.728% 43.588%,61.615% 41.806%,63.633% 40.401%,65.822% 39.408%,68.225% 38.862%,70.882% 38.797%,73.835% 39.249%,77.123% 40.251%,80.789% 41.839%,80.789% 41.839%,84.461% 42.2%,87.739% 39.909%,90.625% 35.583%,93.122% 29.836%,95.23% 23.284%,96.952% 16.544%,98.288% 10.229%,99.24% 4.957%,99.81% 1.342%,100% 0%,100% 100%,0% 100%,0% 100%,0.575% 99.782%,2.183% 99.149%,4.646% 98.132%,7.79% 96.762%,11.437% 95.068%,15.411% 93.082%,19.536% 90.835%,23.636% 88.357%,27.533% 85.679%,31.053% 82.832% )",
        },
      };

      addUtilities(newUtilities);
    },
    require('autoprefixer'),
    require('tailwindcss-animated'),
  ],
  
};