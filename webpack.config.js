const path = require("path");
const { output, target, devServer } = require("../code_two/code_2/webpack.config");

module.exports = {
    mode: "development",
    entry:"./src/index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "main.js"
    },

    target: "web",
    devServer: {
        port: 5000,
        open: true,
        hot: true,
        liveReload: true,
    },
    resolve: {
        extensions: [".js",".jsx",".json",".ts"],
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
        ],
    },
}