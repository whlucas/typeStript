const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

// 这个里面导出导入的语法用commonjs的语法
module.exports = {
    entry: path.resolve("./src/index.ts"),
    output: {   
        path: path.resolve("./dist"),  // 把./dist转换成绝对路径
        filename: "script/bundle.js"  // 把打包后的文件放到这个文件里面哪个地方
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./public/index.html"  // 以这个页面为模板来生成一个页面,这个页面就会自动加载他打包后的js文件,生成的文件出现在配置的output目录里面
        }),
        new CleanWebpackPlugin(),  // 每次打包的时候这个插件会帮你把上次的结果清理一下
    ],
    module: {
        rules: [
            {test: /.ts$/, loader: "ts-loader"}  // 配置ts处理器
        ]
    },
    // 如果里面有ts代码,则必须要加这个,在解析模块的时候让他不光去找js文件,还要去找ts文件
    // 否则ts文件加载不进来
    resolve:{
        extensions: [".ts", ".js"]
    }
}