/**
 * webpack 打包配置文件
 */

//导入nodejs 内置模块 path
const path = require('path');
//三方插件包 导入
const HtmlWebpackPlugin = require('html-webpack-plugin');
//导入插件
//引入 提取js中的css代码的插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//将css文件及代码进行极致压缩s
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
//自动清除dist
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = {
  //入口===程序主模块
  entry: {
    commoncss:'./src/js/common-js/common-CSS.js',
    dom:'./src/js/common-js/dom.js',
    http:'./src/js/common-js/http.js',
    untils:'./src/js/common-js/utils.js',
    // 三方插件模块
    captcha: './src/lib/captcha/captcha-mini.js',
    //私有模块
    advertisement: './src/js/advertisement.js',
    home: './src/js/home.js',
    login: './src/js/login.js',
    register: './src/js/register.js',
    
    

   
  },  //相对路径引入main.js 
  //出口===最终生成的文件放的位置
  output: {
    path: path.resolve(__dirname, 'dist'),   //绝对路径
    filename: 'js/[name].js',
    publicPath: './'
  },
  //loader===解释器  css==css的解释  html==html的解释器
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../'
          }
        }, 'css-loader', 'postcss-loader']
        //MiniCssExtractPlugin.loader   link 标签的形式引入css
        //css-loader  让webpack 可以打包 css代码
        //style-loader  将打包之后的代码 通过style标签插入页面中
      },
      {
        test: /\.less$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../'
          }
        }, 'css-loader', 'postcss-loader', 'less-loader']
        //css-loader  让webpack 可以打包 css代码
        //style-loader  将打包之后的代码 通过style标签插入页面中
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/, //配置css中的图片打包
        loader: 'url-loader',     //只有一个处理的loader的写法  
        //可以通过url-loader 将图片压缩为 base64编码格式的图片
        //大图就不压缩  小图可以压缩
        options: {
          name: '[hash].[ext]',  // 图片输出的名字hash长度16位 默认32位
          limit: 20 * 1024,  // 限制 小于30kb base64处理
          esModule: false,
          outputPath: 'img'
        }
      },
      {
        test: /\.html$/,    //配置html文件打包
        loader: 'html-loader'
      },
      {
        test: /\.(svg|woff|ttf|woff2|eot|mp4|img)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'fonts'
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',    // loader 编译es6为es5
        exclude: /node_modules/  // 排除
      }
    ]
  },
  //plugin 插件
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/page/home.html',    //哪个页面需要打包 相对路径
      filename: 'home.html',
      chunks: ['home','commoncss','dom']   // 当前页面打包之后 绑定哪个js模块
    }),
    new HtmlWebpackPlugin({
      template: './src/page/login.html',    //哪个页面需要打包 相对路径
      filename: 'login.html',
      chunks: ['login','commoncss','dom','http','untils']
    }),
    new HtmlWebpackPlugin({
      template: './src/page/register.html',    //哪个页面需要打包 相对路径
      filename: 'register.html',
      chunks: ['register','commoncss','dom', 'captcha','http','untils'],
    }),
    new HtmlWebpackPlugin({
      template: './src/page/advertisement.html',    //哪个页面需要打包 相对路径
      filename: 'advertisement.html',
      chunks: ['advertisement','commoncss','dom']
    }),
    



    new MiniCssExtractPlugin({
      filename: 'css/[name].css' // 输出到css文件夹里
    }),
    new OptimizeCssAssetsWebpackPlugin(),
    //清除dist
    new CleanWebpackPlugin()
  ],
  //mode 环境   development:本地开发环境  production：生产环境（线上环境）
  // mode: 'development',
  mode: process.env.NODE_ENV,
  //webpack.config.js   
  // 开发服务器 配置【】
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'), // 启动服务器目录
    compress: true, // 启动gzip
    port: 8088,  // 端口  8080 80  8081 8082
    open: true, // 自动打开服务
    publicPath: '/', // 静态资源查找路径
    openPage: 'home.html', // 打开的页面
  },
  target: 'web', // 目标是浏览器

}