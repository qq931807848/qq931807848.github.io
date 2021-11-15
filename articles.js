import article from './src/articles/article.html'
import article2 from './src/articles/article2.html'
import article3 from './src/articles/article3.html'
import article4 from './src/articles/article4.html'
import article5 from './src/articles/article5.html'
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
    {
        id: 6,
        title: title(article),
        article: parseHTML(article)
    },
    {
        id: 7,
        title: title(article2),
        article: parseHTML(article2)
    },
    {
        id: 8,
        title: title(article3),
        article: parseHTML(article3)
    },
    {
        id: 9,
        title: title(article4),
        article: parseHTML(article4)
    },
    {
        id: 10,
        title: title(article5),
        article: parseHTML(article5)
    },
    {
        id: 11,
        title: title(article),
        article: parseHTML(article)
    },
    {
        id: 12,
        title: title(article2),
        article: parseHTML(article2)
    },
    {
        id: 13,
        title: title(article3),
        article: parseHTML(article3)
    },
    {
        id: 14,
        title: title(article4),
        article: parseHTML(article4)
    },
    {
        id: 15,
        title: title(article5),
        article: parseHTML(article5)
    },
    {
        id: 16,
        title: title(article5),
        article: parseHTML(article5)
    },
    {
        id: 17,
        title: title(article5),
        article: parseHTML(article5)
    }
]