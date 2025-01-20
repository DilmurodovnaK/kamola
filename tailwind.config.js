/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            "2xl": { max: "1485px" },
            xl: { max: "1180px" },
            lg: { max: "950px" },
            md: { max: "790px" },
            nb: { max: "706px" },
            sm: { max: "654px" },
            ms: { max: "460px" },
            mm: { max: "390px" },
        },
        extend: {
            fontFamily: {
                dancingscript: ['Dancing Script', 'serif'],
                playfair: ['"Playfair Display"', 'serif'],
            },
        },
    },
    plugins: [],
}