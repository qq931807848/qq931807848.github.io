import Ani from './Ani'
export default class Translate {
    constructor(obj) {
        this.obj = obj
        this.count = this.obj.count
        this.rounds = this.obj.count
        this.newarr = this.obj.targets.slice()
        this.run()
        this.reversetext = this.obj.reverse[0]
    }
    run() {
        if (this.newarr.length > 0) {
            let num = this.newarr.shift()
            num.el.classList.add(num.animationClassName)
            var _this = this;
            var add = function () {
                setTimeout(() => {
                    _this.run()
                    // num.el.classList.remove(num.animationClassName) 
                    this.removeEventListener('animationstart', add)
                },50)
            }
            num.el.addEventListener('animationstart', add)
        } else {
            setTimeout(() => {
                //深拷贝数组        
                this.newarr = this.obj.targets.slice()
                //判断是第几轮
                if (this.rounds > 1) {
                    this.rounds--
                    //如果轮数和所传递的反转轮数相等 把数组反转
                    if (this.reversetext == this.curindex()) {
                        this.newarr = this.obj.targets.slice().reverse()
                    }
                    this.run()
                }
            });
        };
    }
    //返回是第几轮
    curindex() {
        return this.count - this.rounds + 1
    }
}
// export default class Translate{
//     constructor(){
//         this.run()
//     }
//     run(el){
//         el.classList.add('change')
//     }
// }
//动画飞入效果
// export default class Translate{
//     constructor(){    
//     }
//    run(el){
//     el.classList.add('change')
//     }
//    static install(){
//         return new Translate();
//     }
// }
// //动画淡入淡出效果
// export class Opicity{
//     constructor(){

//     }
//     static install(){
//         return new Translate();
//     }
//     run(el){
//         el.classList.add('opcity')
//     }
// }
// export default class Translate extends Ani{
//     constructor(){
//         super()
//     }
//     run(){
//         // console.log(this.el)
//         // // this.el=e
//         this.el.classList.add('change');
//     }
//     static install(){
//         return new Translate()
//     }
// }

