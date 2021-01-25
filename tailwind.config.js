module.exports = {
    purge: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
    ],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {},
        fontFamily: {
            sans: ["Quicksand"],
            serif: ["Quicksand"],
            mono: ["Quicksand"],
            display: ["Quicksand"],
            body: ["Quicksand"],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
