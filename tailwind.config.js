/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                accent: {
                    1: '#A5D8FF',
                    2: '#D0BCFF',
                    3: '#B197FC',
                },
                primary: {
                    DEFAULT: '#3B82F6',
                    bg: '#EFF6FF',
                },
                secondary: {
                    bg: '#FFFFFF',
                    DEFAULT: '#F3F4F6',
                },
                dark: {
                    bg: '#000000',
                    'secondary-bg': '#404040',
                    secondary: '#737373',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
