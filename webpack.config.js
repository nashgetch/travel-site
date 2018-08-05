module.exports = {
  entry: "./app/assets/scripts/app.js",
  output: {
    path: "./app/temp/scripts",
    filename: "app.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.es6']
  },
}