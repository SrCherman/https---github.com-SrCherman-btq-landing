/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Oswald', 'sans-serif'],
            },
            colors: {
                btq: {
                    black: '#000000',
                    dark: '#121212',
                    gray: '#1E1E1E',
                    white: '#FFFFFF',
                }
            }
        },
    },
    plugins: [],
}
