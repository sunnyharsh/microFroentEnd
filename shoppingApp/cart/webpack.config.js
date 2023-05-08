const HtmlWebpackPlugin=require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports={
    mode:'development',
    devServer:{
        port:3002
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/indx.html'
        }),
        new ModuleFederationPlugin({
            name: "cart",
            filename: "remoteEntery.js",
            exposes:{
                './cartIndex': "./src/index.js"
            }
        })
    ]
}