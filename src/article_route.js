import { parseHTML, Ellipsis } from '../assets/lib/utils/utils';

let ellipsis = new Ellipsis({
    textCount:80,
    showFindAllButton:true
})

function formatHTML(div,id){
    let html = parseHTML(div);
    let article = html.querySelector('article');
    let title = html.querySelector('h3');
    title.onclick = function(){
        window.location.href = `./articleDetail.html?id=${id}`
    }
    ellipsis.el = article;
    ellipsis.exec();
    return html;
}

export default  [
    {
        id:1,
        title:'如何看待知乎上的男拳',
        article:async ()=> {
            let html = await import(/* webpackChunkName: "articleContent" */ './article/1.html');
            return formatHTML(html.default,1);
        }
    }
]