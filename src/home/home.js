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


