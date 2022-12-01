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
                primaryLight: "#EEF4ED",
                secondaryLight: "#54B689",
                blurLight: "rgba(84, 182, 137, 0.10)",
                btnLight: "#4F4F4F",
                textLight: "#252422",
                blurDark: "rgba(22, 31, 43, 0.30)",
                primaryDark: "#111821",
                secondaryDark: "#1E2A3A",
                btnDark: "#1E2A3A",
                textDark: "#EDF2F4",
            },
        },
    },
    plugins: [],
}