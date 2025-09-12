/** @type {import('tailwindcss').Config} */
const { theme, lightTheme, darkTheme } = require('./theme');

module.exports = {
    // NOTE: Update this to include the paths to all files that contain Nativewind classes.
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    darkMode: 'class',
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                // All your theme colors are available directly
                ...theme.colors,
            },
            fontFamily: theme.typography.fontFamily,
            fontSize: theme.typography.fontSize,
            fontWeight: theme.typography.fontWeight,
            letterSpacing: theme.typography.letterSpacing,
            lineHeight: theme.typography.lineHeight,
            spacing: theme.spacing,
            boxShadow: theme.shadows,
            borderRadius: theme.radius,
        },
    },
    plugins: [],
}