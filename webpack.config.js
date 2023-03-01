const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

// npm i http-proxy-middleware
// npm i -D clean-webpack-plugin webpack webpack-cli webpack-dev-server webpack-merge eslint-plugin-react css-loader node-sass sass-loader style-loader ts-loader identity-obj-proxy
module.exports = {
  mode: 'development',
  entry: './src/main/index.tsx',
  output: {
    path: path.join(__dirname, 'public/js'),
    publicPath: '/public/js',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'scss'],
    alias: {
      '@': path.join(__dirname, 'src'),
    }
  },
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    },{
        test: /\.scss$/,
        use: [{ // Use possibilita colocar um object de loader para a app rodar
          loader: 'style-loader'
        },{
          loader: 'css-loader',
          options: { // esse options faz com que a importacao do style seja compreendida pela aplicacao
            modules:true
          }
        },{
          loader: 'sass-loader'
        }] // ao final desse configuracao criar o arquivo src/main/config/sass-module.d.ts para que o app entenda a class criada no scss
          // configurar jest.config.js para que o jest nao leia arquivo '!**/*.d.ts' e nem o '.scss$': 'identity-obj-proxy'(npm i -D  identity-obj-proxy)
          // ignorar *.scss no .eslintignore
      }
    ]
  },
  devServer: {
    static: './public',
    devMiddleware:{
      writeToDisk: true, // essa linha faz o devServer levantar o servidor e ao mesmo tempo gerar a bundles.js, sem essa opcao o bundle so sera gerado em memoria.
    },
    historyApiFallback:{
      rewrites: [
        { from: /./, to: '/index.html' } // isso faz o devServer lidar com outras rotas alem do index inicial posibilitando navegar por outras rotas na aplicacao.(react-router-dom)
      ]
    },
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }, //essa expecificao faz que o scrit no index.html incluido aqui nao seja feito o bundle junto.
  plugins: [
    new CleanWebpackPlugin()
  ]
}