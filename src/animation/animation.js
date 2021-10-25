import Ani from '../../assets/js/Translate'

import Translate from '../../assets/js/Translate'
// let ani=new Ani(new Translate({
//     targets: [
//         {
//             el: document.querySelector('.box1'),
//             animationClassName: 'change'
//         },
//         {
//             el: document.querySelector('.box2'),
//             animationClassName: 'change'
//         },
//         {
//             el: document.querySelector('.box3'),
//             animationClassName: 'change'
//         },
//         {
//             el: document.querySelector('.box4'),
//             animationClassName: 'change'
//         },
//         {
//             el: document.querySelector('.box5'),
//             animationClassName: 'change'
//         },
//     ]
//     }))
// let ani=new Ani({
//     el:document.querySelector('.box1'),
//     module:new Translate()
// })

// let animate = new Ani({
//     el:document.querySelector('.box1'),
//     type:'translate', 
// })
// animate.load();
// 作业三： 
// Ani.create({  
//     type:'translate',
// }).mount(document.querySelector('.box1'))
// 作业：Translate()   Opicity();
// new Animate({
//     el:document.querySelector('div'),
//     model:new Translate()
// })
// 作业四：
//  use方法中应该接收一个 Translate.install的静态方法；如果没有静态方法，那么直接执行这个方法；
//  注意：是直接执行这个方法，而不是 new一个构造函数；
// Anis.create().use(Translate).mount(document.querySelector('div'))
//作业5
let animate = Ani.create().use(Translate).mount(document.querySelector('.box1'))