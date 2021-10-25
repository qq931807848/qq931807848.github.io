// export default {
//     entry:'./src/home/index.js',
//     output:{
//         filename:'home/index.js',
//         path:'/docs'
//     }
// }
export default{
    entry:{
        home:'./src/home/home.js',
        index:'./src/index/index.js'
    },
    output:{
        filename:'[name].[contenthash].js',
        path:'/docs'
    }
}
// 将./src/home/index.js中的代码打包到/docs/home/文件夹中，文件名称叫index.js
//作业二：
// 将./src/home/home.js中的代码打包到/docs/home/文件夹中，
//文件名称叫home.jfkasldfjklas.js


// 将./src/index/index.js中的代码打包到/docs/index/文件夹中，
//文件名称叫index.asdjfklasdfas.js
//作业： 页面输出：
