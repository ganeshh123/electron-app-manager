module.exports = {
  /* Prevents duplicate bundling related errors.
     Ref: https://reactjs.org/warnings/invalid-hook-call-warning.html
  */
  externals: {
    react: "react",
    "react-dom": "react-dom",
  }, 
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  }
};
