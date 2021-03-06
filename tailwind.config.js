module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
        fontFamily: {
            sans: ['Rubik', 'sans-serif'],
            serif: ['Playfair Display', 'sans-serif']
        },
        linearBorderGradients: theme => ({
            colors: {
                ...theme('colors'),
                'main-gradient': ['rgb(206,89,63)', 'rgb(85,10,18)'],
            }
        }),
        extend: {
            colors: {
                white: "rgb(255, 255, 255)",
                start: "rgb(206,89,63)",
                end: "rgb(85,10,18)"
            },
            height: () => ({
                "1/5": "20%",
                "2/5": "40%",
                "3/5": "60%",
                "4/5": "80%",
                "5/5": "100%",
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

//
//
