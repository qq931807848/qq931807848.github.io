import article from './articles/article.html'
import article2 from './articles/article2.html'
import article3 from './articles/article3.html'
import article4 from './articles/article4.html'
import article5 from './articles/article5.html'
function parseHTML(text) {
    var oDiv = document.createElement('div')
    oDiv.innerHTML = text
    return oDiv.childNodes[0].content.childNodes[3]
}
function title(tit) {
    var oDiv = document.createElement('div')
    oDiv.innerHTML = tit
    return oDiv.childNodes[0].content.childNodes[1]
}
export default [
    {
        id: 1,
        title: title(article),
        article: parseHTML(article)
    },
    {
        id: 2,
        title: title(article2),
        article: parseHTML(article2)
    },
    {
        id: 3,
        title: title(article3),
        article: parseHTML(article3)
    },
    {
        id: 4,
        title: title(article4),
        article: parseHTML(article4)
    },
    {
        id: 5,
        title: title(article5),
        article: parseHTML(article5)
    },
]