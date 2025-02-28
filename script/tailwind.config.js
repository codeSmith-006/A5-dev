/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                pop: ["Poppins", "sans-serif"],
            },
            colors: {
                btn: "#3752FD",
                grid: "#F4F7FF"
            },
        },
    },
    plugins: [],
}