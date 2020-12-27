module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      sans: ['Rubik', 'sans-serif']
    },
    linearBorderGradients: theme => ({
      colors: {
        ...theme('colors'),
        'main-gradient' : ['rgb(246, 224, 94)', 'rgb(245, 101, 101)', 'rgb(237, 100, 166)']
      }
    }),
    extend: {
      height: () => ({
        "1/5" : "20%",
        "2/5" : "40%",
        "3/5" : "60%",
        "4/5" : "80%",
        "5/5" : "100%",
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-border-gradients')(),
  ],
}
