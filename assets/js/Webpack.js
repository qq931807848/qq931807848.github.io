export default class Webpack{
    constructor(props){
        this.props=props
        this.package()
    }
    package(){
        let {entry,output}=this.props
        if(typeof entry =='object'){
            let {filename,path}=output
            let[der,file,suffix]=filename.split('.')
            for (const key in entry) {
                der=key
                console.log(der)
                var rodom=parseInt(Math.random()*899999999999+100000000000)
                file=rodom
                
                console.log(`将${entry[key]}中的代码打包到${path}/${der}/中，文件名称叫做${key}.${file}.${suffix}`)
            }
        }
        else{
            let {filename,path}=output
            let[der,file]=filename.split('/')
            console.log(`将${entry}中的代码打包到${path}/${der}中，文件夹名为${file}`)
        }
    }
}
// export default class Webpack{
//     constructor(obj){
//      this.entry=obj.entry
//      this.path=obj.output.path
//      this.filename=obj.output.filename 

//      this.entrys=obj.entry.home
//      this.indexs=obj.entry.index
//      this.paths=obj.output.path
//      this.filenames=obj.entry.home 
//     }
//     package(){
//         var end=this.filename.substr(6)
//         var files=this.path+this.filename.substr(0,5)
//         console.log('将'+this.entry+'中的代码打包到'+files+'文件夹中，文件名称叫'+end)
//     }
//     packages(){
//         var filea=this.filenames=this.entrys.substr(5,6)
//         console.log('将'+this.entrys+'中的代码打包到'+this.paths+filea+'文件夹中，')
//         console.log('文件名称叫做'+this.random()+'.js')
//     }
//     random(){
//         return Math.floor(Math.random()*899999999999+100000000000)
//     }
// }
// 将./src/home/home.js中的代码打包到/docs/home/文件夹中，
//文件名称叫home.jfkasldfjklas.js

    // 将./src/home/index.js中的代码打包到/docs/home/文件夹中，文件名称叫index.js