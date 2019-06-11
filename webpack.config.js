module.exports = {
  output: {
    filename: 'script.js',
  },
  mode: 'development',
  devtool: 'source-map',
  // devtool: true,
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.(js)$/,
        use: ['source-map-loader'],
        enforce: 'pre'
      }
    ]
  },
}