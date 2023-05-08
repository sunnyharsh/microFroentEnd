const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode: 'development',
    devServer: {
        port: 3001
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/indx.html'
        }),
        new ModuleFederationPlugin({
            name: "products",
            filename: "remoteEntery.js",
            exposes:{
                './productIndex': "./src/index.js"
            }
        })
    ]
}