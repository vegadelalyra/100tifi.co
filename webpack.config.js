// A TYPICAL WEBPACK CONFIGURATION MAINTAINS THIS CONFIGURATION

// FIRST, 
// DECLARE THE IMPORT WITH "REQUIRE" FOR ANY NODE MODULE, LOADER OR PLUGIN USED IN YOUR PROJECT.
const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin')

// SECOND, 
// DEFINE YOUR EXPORTED MODULE TO YOUR PRODUCT. ESENTIALS: <entry>, <point>, <output>, <resolve> and finally <module>.
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {
// THIRD,
// SET UP THE RULES FOR YOUR LOADERS AND PLUGINS 
        rules: [ //RULES MUST BE AN ARRAY
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            }
           
        ]
    },
// FORTH,
// INITIALIZE AND CONFIGURE YOUR PLUGINS OBJECTS
    plugins:[
        new HtmlWebpackPlugin(
            {
            inject: true,
            template: './public/index.html',
            filename: './index.html',
            }
        ),
        new CopyWebpackPlugin(
            {
                patterns: [{ 
                    from: './src/styles/styles.css',
                    to: ''}],
            }
        ),
    ]
}