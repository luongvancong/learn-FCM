const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        app: './src/index.js',
        "firebase-messaging-sw": "./src/firebase-messaging-sw.js"
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist',
    },

    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "dist/app.js", to: "../public" },
                { from: "dist/firebase-messaging-sw.js", to: "../public"}
            ],
        }),
    ],
};
