module.exports = {
    mode: "JIT",
    purge: {
        enabled: true,
        content: ["./src/**/*.js", "./public/index.html"],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {
            opacity: ["disabled"],
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
