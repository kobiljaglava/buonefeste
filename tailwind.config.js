const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({addUtilities}) {
    addUtilities({
        ".my-rotate-y-180": {
            transform: "rotateY(180deg)",
        },
        ".preserve-3d": {
            transformStyle: "preserve-3d",
        },
        ".perspective": {
            perspective: "1000px",
        },
        ".backface-hidden": {
            backfaceVisibility: "hidden",
        },
    });
});

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'podkova': ['"Podkova"', 'serif'],
                'permanentmarker': ['"Permanent Marker"', 'serif'],
                'cabin': ['"Cabin"', 'sans-serif'],
                'pacifico': ['"Pacifico"', 'sans-serif'],
            },

            keyframes: {
                balloons: {
                    '0%, 100%': {transform: 'translateY(0) rotate(7deg)'},
                    '50%': {transform: 'translateY(2rem) rotate(-7deg)'},
                },

                ring: {
                    '25%': {transform: 'rotate(5deg)'},
                    '75%': {transform: 'rotate(-5deg)'},
                },

                bang: {
                    'from': {transform: 'translate3d(0, 0, 0)', opacity: '1'},
                },
            },

            animation: {
                'spin-wheel': 'spin 10s linear infinite',
                'balloon': 'balloons 4s ease-in-out infinite',
                'ring': 'ring 1.7s ease-in-out infinite',
                'loco-light-anim': 'loco-light-anim 3s linear infinite',
                'popcap': 'bang 700ms ease-out forwards',
                'bang': 'bang 700ms ease-out forwards',
                'befana':'bounce 3s linear infinite'
            },

        },
    },
    plugins: [Myclass],
}