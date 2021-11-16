/**
  * @description 截取字符串,超出...
  * @param el: 元素
  * @param textCount : 字符串截取长度 number类型;
  * @param findAllButtonText: 非必填项,默认为'查看全部'
  * @param showFindAllButton :非必填项,是否显示'查看全部'按钮,默认为false
  * **/
export default class Ellipsis {
    constructor(obj) {
        this.el = obj.el;
        this.text = this.el.innerHTML
        this.textCount = obj.textCount;
        this.findAllButtonText = obj.findAllButtonText || '查看全部';
        this.ellipsisButtonText = obj.ellipsisButtonText || '收起';
        this.showFindAllButton = obj.showFindAllButton || false;
        this.flag = true;
    }
    get buttonText() {
        return this.flag ? this.findAllButtonText : this.ellipsisButtonText;
    }
    exec() {
        this.el.innerHTML = this.format(this.text, this.textCount);
        this.el.innerHTML = this.format(this.text, this.textCount);
        if (this.showFindAllButton) {
            this.addButton();
        }
    }
    addButton() {
        var a = document.createElement('a');
        a.textContent = this.findAllButtonText;
        a.style.cssText = `
                color:blue;
                cursor: pointer;
            `
        var _this = this;
        a.addEventListener('click', function () {
            _this.flag = !_this.flag;
            this.textContent = _this.buttonText;
            _this.el.childNodes[0].textContent = _this.flag ? _this.format(_this.text, _this.textCount) : _this.text;
        })
        this.el.appendChild(a)
    }
    format(str, num) {
        return str.length < num ? str : (str.substring(0, num) + '...');
    }
}
// let ellipsis = new Ellipsis({
//     el:document.querySelector('.list'),
//     textCount:30,
//     findAllButtonText:"查看所有",
//     showFindAllButton:true   
// })
// ellipsis.exec();

