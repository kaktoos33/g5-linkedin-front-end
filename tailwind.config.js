module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        backgroundColor: theme => ({
            ...theme('colors'),
            'primary': '#F6F6F6',
        }),
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}