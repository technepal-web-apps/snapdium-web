const path = require('path');

module.exports = function(api) {
    api.cache(true);

    return {
        presets: [["babel-preset-expo", {
            jsxImportSource: "nativewind"
        }], "nativewind/babel"],

        plugins: [["module-resolver", {
            root: ["./"],

            alias: {
                "@": "./",
                '@assets': path.resolve(__dirname, 'assets'),
                "tailwind.config": "./tailwind.config.js"
            }
        }]]
    };
};