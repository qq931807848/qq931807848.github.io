// Generated using webpack-cli https://github.com/webpack/webpack-cli
// const fs = require('fs');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : "style-loader";

const conf = getConfig({
  modules:['home','index','details','demo','template']  //新增模块
});

const config = {
  entry:conf.entry,
  output: {
    filename: '[name]/[name].[chunkhash].js',
    path: path.resolve(__dirname, "docs"),
    clean: true,
  },
  devServer: {
    open: true,
    host: "localhost",
    hot:true,
    static: './docs',
  },
  plugins: [
    ...conf.html
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.less$/i,
        use: [stylesHandler, "css-loader", "postcss-loader", "less-loader"],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

function getConfig(props){
  let entry = {};
  let html = [];
  let modules = props.modules || [];
  modules.forEach(name=>{
    entry[name] = [`./src/${name}/${name}.js`, `./src/${name}/${name}.less`];
    html.push(new HtmlWebpackPlugin({
      template: `src/${name}/${name}.html`,
      filename: `${name}.html`,
      chunks: [`${name}`]
    }))
  })
  return {
    entry,
    html
  }
}

module.exports = async () => {
  if (isProduction) {
    config.mode = "production";
    config.plugins.push(new MiniCssExtractPlugin({
      filename: '[name]/[name].[contenthash].css'
    }));
  } else {
    config.mode = "development";
  }
  return config;
};

// class FileSystem {
//     constructor(props) {
//         this.baseDir = props.baseDir;
//         this.arr = ['home', 'article', 'articleDetail'];
//         this.suffixs = ['html', 'less', 'js'];
//         this.moduleArr = this.arr.slice();
//         this.mod = 'template';
//     }
//     /**
//      * @description 这个方法是创建文件夹
//      * @param {*} filename 文件夹名称
//      */
//     creatDir(filename) {
//         return new Promise((resolve, reject) => {
//             fs.mkdir(filename, function (err, data) {
//                 if (err) {
//                    console.log('文件已经存在')
//                 }else{
//                     resolve(data)
//                 }
//             })
//         })
//     }
//     /**
//      * @description 这个方法是创建文件
//      * @param {*} filename 文件名称
//      * @param {*} content 文件内容
//      */
//     creatFile(filename, content) {
//         return new Promise((resolve, reject) => {
//             fs.writeFile(filename, content, function (err, data) {
//                 if (err) {
//                     console.log('没有这个文件')
//                 }else{

//                     resolve(data)
//                 }
//             })
//         })
//     }
//     /**
//      * @description 这个方法是查看一个文件或文件夹的状态
//      * @param {*} filename 要查看的文件或文件夹名称
//      */
//     getFileStatus(filename) {
//         return new Promise((resolve, reject) => {
//             fs.stat(filename, function (err, data) {
//                 if (err) {
//                     reject(err)
//                 } else {
//                     //  fileType   1.文件  2.文件夹 3.txt  4.md
//                     resolve(data.isDirectory() == true ? data.isDirectory : data.isFile())
//                 }
//             })
//         })
//     }
//     /**
//      * @description 这个方法是检测一个文件或文件夹是否存在
//      * @param {*} filename 文件夹或文件的名字 
//      */
//     access(filename) {
//         return new Promise((resolve, reject) => {
//             fs.access(filename, function (err, data) {
//                 if (err) {
//                     resolve(data)
//                 } else {
//                     resolve(true)
//                 }
//             })
//         })
//     }
//     /**
//      * @description 这个方法是copy一个文件
//      * @param {*} filename 要copy的文件名称
//      * @param {*} dest copy之后叫的名字
//      */
//     copyFile(filename, dest) {
//         return new Promise((resolve, reject) => {
//             fs.copyFile(filename, dest, function (err, data) {
//                 if (err) {
//                     reject(err)
//                 } else {
//                     resolve(data)
//                 }
//             })
//         })
//     }
//     /**
//      * @description 这个方法是获取文件夹下面的所有文件
//      * @param {*} dirName 这个是文件夹的名字
//      * @returns 
//      */
//     getAllFile(dirName) {
//         return new Promise((resolve, reject) => {
//             fs.readdir(dirName, function (err, data) {
//                 if (err) {
//                     reject(err)
//                 } else {
//                     resolve(data)
//                 }
//             })
//         })
//     }
//     /**
//      * @description 这是创建文件的方法
//      * @param {*} dirName  文件夹的名字
//      * @param {*} fileName  文件的名字
//      */
//     creatFiles(dirName, fileName) {
//         this.suffixs.forEach(async suffix => {
//             if (await this.access(`./src/${dirName}/${fileName}.${suffix}`)) {
//                 this.creatFile(`./src/${dirName}/${fileName}.${suffix}`, '')
//             }
//         })
//     }
//     /**
//      * @description 这个方法是创建还没有的文件夹和文件
//      * @param {*} arr 这个是模块的名字集合
//      */
//     exec(arr) {
//         arr.forEach(async file => {
//             let isFloder = await this.access(`./src/${file}`);
//             if (isFloder) {
//                 this.suffixs.forEach(async suffix => {
//                     if (await this.access(`./src/${file}/${file}.${suffix}`)) {
//                         return;
//                     } else {
//                         this.creatFile(`./src/${file}/${file}.${suffix}`, '')
//                     }
//                 })
//             } else {
//                 await this.creatDir(`./src/${file}`);
//                 let dirStatus = await this.getFileStatus(`./src/${file}`)
//                 if (dirStatus) {
//                     this.creatFiles(file, file);
//                 }
//             }
//         })
//     }
//     /**
//     * @description 这个方法是copy文件
//     * @returns  数组中如果存在该模块的名字 则直接返回
//     */
//     async upDateArr() {
//         if (this.moduleArr.indexOf(this.mod) == -1) {
//             this.moduleArr.push(this.mod);
//             this.exec(this.moduleArr);
//             this.moduleArr.forEach(async (file) => {
//                 this.creatFiles(file, this.mod)
//             })
//         } else {
//             return;
//         }
//     }
//      /**
//      * @description 这个方法是用来创建模块的文件的
//      * @param   传一个对象 （模块数组，模板名称，是否覆盖文件内容）
//      */
//   async creatModule(module,replace,template){
//   let hasDir = await this.access(`./src/${module}`);
//       if(!hasDir){
//       await this.creatDir(`./src/${module}`);
//           let files = await this.getAllFile(`./src/${template}`);
//              files.forEach(async file => {
//                 let suffix =/(?<=\.)\D+/.exec(file)[0];
//                   if (replace||!await this.access(`./src/${module}/${module}.${suffix}`)) {
//                       this.copyFile(`./src/template/template.${suffix}`,
//                           `./src/${module}/${module}.${suffix}`)
//                   }
//               })
//       }else{
//         let files = await this.getAllFile(`./src/${template}`);
//         files.forEach(async file => {
//            let suffix =/(?<=\.)\D+/.exec(file)[0];
//              if(await this.access(`./src/${module}/${module}.${suffix}`)){
//                  if(replace){
//                     this.copyFile(`./src/template/template.${suffix}`,
//                     `./src/${module}/${module}.${suffix}`)
//                  }
//              }else{
//                  if(replace){
//                     this.copyFile(`./src/template/template.${suffix}`,
//                     `./src/${module}/${module}.${suffix}`)
//                  }else{
//                     await this.creatFile(`./src/${module}/${module}.${suffix}`,'');
//                  } 
//              }
//          })
//       }
//     }
//     /**
//      * @description 这个方法是用来创建模块的
//      * @param {*} obj 传一个对象 （模块数组，模板名称，是否覆盖文件内容）
//      */
//     generateModules(obj) {
//         obj.modules.forEach(async module => {
//           this.creatModule(module,obj.replace,obj.template)
//         })
//     }
// }
// var modules = []//添加模块
// let fileSystem = new FileSystem({
//     baseDir: './src'
// });
// fileSystem.generateModules({
//     modules,
//     template: 'template',//模板模块
//     replace: false,
// })


