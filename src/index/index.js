var btn = document.querySelector('.next')
var wrap = document.getElementById('wrap')
btn.onclick = function () {
    window.location.href='https://qq931807848.github.io/docs/home.html';
}
var img = document.querySelector('.header_img');
var h4 = document.querySelector('.h4')
var text = document.querySelector('.text')
var cotp = document.querySelector('.content_p')
var h2 = document.querySelector('.h2')
var constnum = 0
class Ani {
    constructor(targets) {
        this.targets = targets
        this.count = this.targets.count
        this.newarr=this.targets.targets.slice()
        this.addClassName()
    }
    addClassName() {
        if(this.newarr.length>0){
            let num = this.newarr.shift()
            num.el.classList.add(num.animationClassName)
            var _this = this;
            var add= function () {
                num.el.classList.remove(num.animationClassName)
                _this.addClassName()
                this.removeEventListener('animationend',add)
            }
            num.el.addEventListener('animationend',add)  
        }else{
            this.newarr=this.targets.targets.slice()
            if(this.count>1){ 
                this.count--
                this.addClassName()
            }
        };
    }
}
let ani = new Ani({
    targets: [
        {
            el: img,
            animationClassName: 'photo_img'
        },
        {
            el: text,
            animationClassName: 'nav_text'
        },
        {
            el: h4,
            animationClassName: 'text_h4'
        },
        {
            el: cotp,
            animationClassName: 'text_p'
        },
        {
            el: h2,
            animationClassName: 'text_h2'
        },
    ],
    count: 2
})
// function addAnimation(){
//     if(num<elArr.length){
//        elArr[num].setAttribute('class',classNameArr[num])
//        elArr[num].addEventListener('animationend',function(e){
//               console.log('aa')
//               elArr[num].setAttribute('class','')
//               num++
//              addAnimation()
//        })
//     }
//     else{
//         console.log('bb')
//         num=0
//      
//     }
// }
// addAnimation()
// var elArr = [img, text, h4, cotp, h2]
// var classNameArr = ['photo_img', 'nav_text', 'text_h4', 'text_p', 'text_h2']

