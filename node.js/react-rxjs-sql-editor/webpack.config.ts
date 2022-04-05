import webapck from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const config = {
    mode: 'development',
    entry: [
        './src/index.tsx'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'swc-loader',
                exclude: /node_modules/
            },
            {
                test: /\.module\.pcss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true
                        }
                    },
                    'postcss-loader'
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'react-rxjs-sql-editor'
        })
    ],
    resolve: {
        extensions: [
            '.tsx',
            '.ts'
        ]
    }
}

export default config