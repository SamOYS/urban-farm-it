/** @type {import('tailwindcss').Config} */
module.exports = {
    prefix: 'tw-',
    corePlugins: {
        preflight: false,
    },
    content: ["./**/*.liquid"],
    theme: {
        extend: {
            colors: {
                primary: "#C65A24",
            },
            fontFamily: {
            },
        },
        screens: {
            'xs': '385px',
            'm-xs': {
                'max': '385px',
            },
            'sm': '540px',
            'm-sm': {
                'max': '540px',
            },
            'md': '768px',
            'm-md': {
                'max': '768px',
            },
            'lg': '1024px',
            'm-lg': {
                'max': '1024px'
            },
            'xl': '1279px',
            'm-xl': {
                'max': '1279px'
            },
            '2xl': '1380px',
            '3xl': { 'raw': '(min-width: 1540px)' },
        },
    },
    plugins: [], // Ensure no other plugins are conflicting
}
