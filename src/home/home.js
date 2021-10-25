<<<<<<< HEAD
import Ani from '../../assets/js/Ani'
import Translate from '../../assets/js/Translate'
console.log(window.location.search)
let ani = new Ani(new Translate({
    targets: [
        {
            el: document.querySelector('.header_title_span'),
            animationClassName: 'change'
        },
        {
            el: document.querySelector('.header_title_div'),
            animationClassName: 'change'
        },
        {
            el: document.querySelector('.first_section'),
            animationClassName: 'change'
        },
        {
            el: document.querySelector('.content_title_span'),
            animationClassName: 'change'
        },
        {
            el: document.querySelector('.content-title_span'),
            animationClassName: 'change'
        },
        {
            el: document.querySelector('.second_section'),
            animationClassName: 'change'
        },
        {
            el: document.querySelector('.content_firsttext'),
            animationClassName: 'change'
        },
        {
            el: document.querySelector('.content_secondtext'),
            animationClassName: 'change'
        },
        {
            el: document.querySelector('.content_thirdtext'),
            animationClassName: 'change'
        },
    ],
    count: 1,
    reverse: [2]
}))
=======
import articles from '../article_route'
var tabItem = document.querySelector('.tab-item');
var main = tabItem.querySelector('.main');
var temp = tabItem.querySelector('.item');
temp.remove();
articles.forEach(async article => {
    var cloneNode = temp.cloneNode(true);
    let articleContent = await article.article();
    cloneNode.insertBefore(articleContent, cloneNode.querySelector('.nav'));
    main.appendChild(cloneNode);
})

    // var str = 'hello world'; // new String()
    // var reg = /\n/  //正则：是用来匹配字符串的；
    //但是，有一些特殊字符，是无法匹配的；
    // 特殊字符： / \ () [] {} \n
    //  \n 匹配回车；
    // \s 匹配空格；
    // g  global;   
    //  +  一个或者多个

    // var s = '#############'
    //  let res = s.replace(/#+(\S)*\s/g, function(item){
    //      console.log(item) //#  ## ### ####  ##### ######
    //      if(item.length)
    //      var el = document.createElement('h' + item.length);
    //      return item;
    //  })

    // 作业： 
    // 1.匹配换行，把换行之前的文本改成p标签
    // 2. ###  h3  
    // #### h4  
    // # h1
    // ###### h6
>>>>>>> c31f0a2a4c1e554c1331bc2fa84cf6a3e86f8cf0
