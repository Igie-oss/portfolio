/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                lightPrimary: "#EEF4ED",
                lightSecondary: "#54B689",
                lightBlur: "rgba(84, 182, 137, 0.10)",
                lightBtn: "#4F4F4F",
                lightText: "#252422",
                darkBlur: "rgba(22, 31, 43, 0.30)",
                darkPrimary: "#111821",
                darkSecondary: "#1E2A3A",
                darkBtn: "#54B689",
                darkText: "#EDF2F4",
            },
        },
    },
    plugins: [],
}