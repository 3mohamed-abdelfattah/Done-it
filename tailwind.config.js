/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter"]
            },
            colors: {
                primary: "#F2F2F2",
                secondary: "#4EA8DE",
                background: "#1A1A1A",
            },
            screens: {
                'md': '800px',
            },
        },
    },
    plugins: [],
}