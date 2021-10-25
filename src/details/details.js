import articles from '../articles'
import Ellipsis from '../show/show'
String.prototype.ellipsis = function (num) {
    if (this.length > num) {
        var newstr = this.substring(0, num) + '...'
    }
    else {
        var newstr = this
    }
    return newstr
}

let topics = document.querySelector('.topic-list')
let item = document.querySelector('.list-item');
item.remove()
var a = document.createDocumentFragment()
articles.forEach(el => {
    var cloneNode = item.cloneNode(true)
    cloneNode.querySelector('.item').appendChild(el.title)
    cloneNode.querySelector('.item').appendChild(el.article)
    a.appendChild(cloneNode)
})
topics.appendChild(a)
let ellipsis = new Ellipsis({
    el:document.querySelectorAll('.answer')[0],
    textCount:140,
    findAllButtonText:"查看所有",
    showFindAllButton:true   
})
ellipsis.exec();
let ellipsis2 = new Ellipsis({
    el:document.querySelectorAll('.answer')[1],
    textCount:140,
    findAllButtonText:"查看所有",
    showFindAllButton:true   
})
ellipsis2.exec();
let ellipsi3 = new Ellipsis({
    el:document.querySelectorAll('.answer')[2],
    textCount:140,
    findAllButtonText:"查看所有",
    showFindAllButton:true   
})
ellipsi3.exec();
let ellipsis4 = new Ellipsis({
    el:document.querySelectorAll('.answer')[3],
    textCount:140,
    findAllButtonText:"查看所有",
    showFindAllButton:true   
})
ellipsis4.exec();
let ellipsis5 = new Ellipsis({
    el:document.querySelectorAll('.answer')[4],
    textCount:140,
    findAllButtonText:"查看所有",
    showFindAllButton:true   
})
ellipsis5.exec();

var questions=document.querySelectorAll('.question')
for(var i = 0; i <questions.length; i++){  
    questions[i].addEventListener('click',function(){
     console.log(this.dataset.id)
     window.location.href=`https://qq931807848.github.io/docs/show.html`
    })
}
//tab切换
let parent=document.querySelector('.action-list');
let spans=parent.querySelectorAll('span');
console.log(spans);
for(var i = 0;i<spans.length; i++){
    spans[i].addEventListener('click',function(){
        for(var j = 0; j<spans.length; j++){
            spans[j].classList.remove('color')
        }
        this.classList.add('color');
        this.parentNode.parentNode.parentNode.children[1].innerHTML='aa';
    })
}


