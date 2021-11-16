import articles from '../../articles'
import Ellipsis from '../details/details'
String.prototype.ellipsis = function (index) {
    if (this.length > index) {
        var newstr = this.substring(0, index) + '...'
    }
    else {
        var newstr = this
    }
    return newstr
}
let art = articles.slice();
console.log(art)
let topics = document.querySelector('.topic-list')
let item = document.querySelector('.list-item');
item.remove()
var a = document.createDocumentFragment();
let nums = 5;
art.forEach((el,index) => {
    if(index<nums){
        var cloneNode = item.cloneNode(true)
        cloneNode.querySelector('.item').appendChild(el.title)
        cloneNode.querySelector('.item').appendChild(el.article)
        a.appendChild(cloneNode);
    }
})
let btu=document.querySelector('.button');
var oc = 1;
var num = 5;
btu.addEventListener('click',function(){
    if(art.length<=nums) {
        btu.style.display='none';
    }else if(art.length-num*oc>=5){
        for(let i = num*oc; i<num*oc+num; i++){
            var cloneNode = item.cloneNode(true)
            cloneNode.querySelector('.item').appendChild(art[i].title)
            cloneNode.querySelector('.item').appendChild(art[i].article)
            a.appendChild(cloneNode);
        }
        oc++;
        topics.appendChild(a);
        rando()
    }else{
      this.removeEventListener('click',function(){console.log('aa')})
        for(let i = num*oc; i<art.length; i++){
            var cloneNode = item.cloneNode(true)
            cloneNode.querySelector('.item').appendChild(art[i].title)
            cloneNode.querySelector('.item').appendChild(art[i].article)
            a.appendChild(cloneNode);
        } 
        topics.appendChild(a);
        rando();
        this.style.display='none';
        
    }
})
topics.appendChild(a)
rando()
function rando(){
    for(var i = 0;i<document.querySelectorAll('.answer').length;i++){
        let ellipsis = new Ellipsis({
          el:document.querySelectorAll('.answer')[i],
          textCount:140,
          findAllButtonText:"查看所有",
          showFindAllButton:true  
      })
      ellipsis.exec();
      }
}
var questions=document.querySelectorAll('.question')
for(var i = 0; i <questions.length; i++){  
    questions[i].addEventListener('click',function(){
     console.log(this.dataset.id)
     window.location.href=`https://qq931807848.github.io/docs/details.html`
    })
}
//tab切换
let parent=document.querySelector('.action-list');
let spans=parent.querySelectorAll('span');
for(var i = 0;i<spans.length; i++){
    spans[i].addEventListener('click',function(){
        for(var j = 0; j<spans.length; j++){
            spans[j].classList.remove('color')
        }
        this.classList.add('color');
        this.parentNode.parentNode.parentNode.children[1].innerHTML='aa';
    })
}

