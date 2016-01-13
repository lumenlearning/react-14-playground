"use strict";
var webpack = require('webpack');

let webpackConfig = {
    entry: "./examples/02-flux/app.jsx",
    output: {
        filename: "./server/assets/client/js/bundle.js"
    },
    module:{
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-core',
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ]
};

module.exports = webpackConfig;