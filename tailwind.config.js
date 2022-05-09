const formsPlugin = require("@tailwindcss/forms")

module.exports = {
    content: ["index.html", "src/**/*.tsx"],

    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {},
    },
    experimental: { optimizeUniversalDefaults: true },
    plugins: [formsPlugin],
}
