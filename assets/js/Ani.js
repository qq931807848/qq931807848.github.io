import '../../assets/css/Ani.css'
import Translate from './Translate'
import {Opicity} from './Translate'
export default class Ani {
    constructor(targets) {
        this.targets = targets
    }
    run() {
        this.targets.run()
    }
}

// export default class Ani {
//     constructor(obj) {
//         this.el = obj.el
//         this.module = obj.module
//         this.load()
//     }
//     load() {
//         this.module.run(this.el)  
//     }
// }
//作业2
// export default class Ani{
//     constructor(obj){
//         this.el=obj.el
//         this.type=obj.type   
//     }
//     load(){
//         if(this.type=='translate'){
//             this.module = new Translate()
//             this.module.run(this.el)  
//         }else if(this.type=='opicity'){
//             this.module = new Opicity()
//             this.module.run(this.el)  
//         }
//     }
// }
//作业3
// export default class Ani{
//     constructor(obj){
//        this.type=obj.type
//        this.el=obj.el
//        this.module=obj.module
//     }
//     static create(e){
//         console.log(e)
//         if(e.type=='translate'){
//             e.module = new Translate()
//         }else if(e.type=='opicity'){
//             e.module = new Opicity() 
//         }
//         return new Ani(e);
//     }   
//     mount(e){
//         this.module.run(e)   
//     }
    
//     load(){
//         if(this.type=='translate'){
//             this.module = new Translate()
//             this.module.run(this.el)  
//         }else if(this.type=='opicity'){
//             this.module = new Opicity()
//             this.module.run(this.el)  
//         }
//     }
   
// }
//作业4
//  export default class Ani{
//     constructor(props){
//         // console.log(props);
//         // this.el = props.el;
//         // this.type = props.type;
//     }
//     static create(){
//         //返回一个Ani的实例
//         return new Ani();
//     }
//     use(Translate){
//         try{
//             this.model = Translate.install();
//         }catch(e){
//             Translate();
//         }
//         //实例调用的该方法 return 该实例的this
//         console.log(this)

//         return this
//     }
//     mount(el){
//         this.model.run(el);
//     }
// }
//作业5
//  export default class Ani{
//     constructor(props){
//         this.el=Ani.el
//     }
//     static create(){
//         //返回一个Ani的实例
//         return new Ani();
//     }
//     use(Translate){
//         try{
//             this.model = Translate.install;
//         }catch(e){
//             Translate();
//         }
//         //实例调用的该方法 return 该实例的this
//         return this
//     }
//     static el
//     mount(el){
//         Ani.el=el
//         this.model().run(el);
//     }
// }
