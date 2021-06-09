const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            { //Regla para trabajar con arvchivos JavaScript
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            { //Regla para trabajar con imágenes
                test: /\.(png|gif|jpg|svg|webp)$/,
                use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: 'assets/[name].[ext]'
                    }
                }
                ]
            },
            { //Regla para trabajar con CSS

            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "index.html"
        })
    ],
};
