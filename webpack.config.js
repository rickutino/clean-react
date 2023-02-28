const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  mode: 'development',
  entry: './src/main/index.tsx',
  output: {
    path: path.join(__dirname, 'public/js'),
    publicPath: '/public/js',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.join(__dirname, 'src'),
    }
  },
  devServer: {
    contentBase: './public',
    writeToDisk: true, // essa linha faz o devServer levantar o servidor e ao mesmo tempo gerar a bundles.js, sem essa opcao o bundle so sera gerado em memoria.
    historyApiFallback: true, // isso faz o devServer lidar com outras rotas alem do index inicial posibilitando navegar por outras rotas na aplicacao.(react-router-dom)
  },
  external: {
    react: 'React',
    'react-dom': 'ReactDom'
  }, //essa expecificao faz que o scrit no index.html incluido aqui nao seja feito o bundle junto.
  plugins: [
    new CleanWebpackPlugin()
  ]
}