/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                display: ["Caveat", "cursive"],
                marvel: ["Marvel", "sans-serif"],
            },
        },
    },
    plugins: [require("daisyui")],
};
