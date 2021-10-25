/**
 * @description 解析html文件中的template;
 * **/
export const parseHTML = function (text) {
    let el = document.createElement('div');
    el.innerHTML = text;
    return el.querySelector('template').content;
}
/**
 * @description 截取字符串,超出...
 * @param el: 元素
 * @param textCount : 字符串截取长度 number类型;
 * @param findAllButtonText: 非必填项,默认为'查看全部'
 * @param showFindAllButton :非必填项,是否显示'查看全部'按钮,默认为false
 * @author bo-ddd
 * **/
export class Ellipsis {
    constructor(props) {
        this.el = props.el;
        this.text = '';
        this.textCount = props.textCount;
        this.findAllButtonText = props.findAllButtonText || '查看全文';
        this.ellipsisButtonText = props.ellipsisButtonText || '收起';
        this.showFindAllButton = props.showFindAllButton || false;
        this.flag = true; //判断是否显示查看全部按钮的显示状态；
    }

    get buttonText() {
        return this.flag ? this.findAllButtonText : this.ellipsisButtonText;
    }

    beforeMount(){}

    exec() {
        this.text = this.el.textContent;
        if (!this.text) throw new Error('文本内容不能为空');
        // 把文本切割成50个长度；
        this.el.innerHTML = this.format(this.text, this.textCount);
        //如果 需要展示查看全部的那个按钮
        if (this.showFindAllButton) {
            //增加a标签；
            this.addButton();
        }
        this.beforeMount(this.el)
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
        this.el.appendChild(a, this.el.childNodes[0]);
    }

    format(str, num) {
        return str.length < num ? str : (str.substring(0, num) + '...');
    }
}

export class Url {
    constructor(target) {
        this.target = target;
        this.searchParams = this.getSearchParams(target);
        this.params = this.getParams(this.searchParams);
    }
    getSearchParams(target){
        return Url.isPlantObject(target) ? '' : this.target.split('?')[1];
    }
    parse() {
        var res = '';
        if(Url.isPlantObject(this.target)){
            for(let key in this.target){
                // key  type  id  name;
                res += (key + '=' + this.target[key]) + '&'
            }
            res = res.substring(0,res.length - 1);
        }
        return res;
    }
    static isPlantObject(val) {
        return Object.prototype.toString.call(val).slice(8, -1) == 'Object';
    }
    get(name) {
        return this.params[name];
    }
    getParams(str) {
        if(!str) return;
        var res = {};
        //[type=2,id=1,name=xiaoming]
        str.split('&').forEach(item => {
            // item  type=2   id=1   name=xiaoming;
            let arr = item.split('='); // [type,2]  [id,1] [name,xiaoming];
            res[arr[0]] = arr[1];
        })
        return res;
    }
}

export class Markdown{
    static TITLE_REG = /(#+)\s+([^\n]+)/;
    constructor(text){
        this.text = text;
    }
    parse(){
        return this.text.replace(/.+/g,(item)=>{
            if(Markdown.isTitle(item)){
                return this.parseTitle(item);
            }else{
                return this.parseParagraph(item)
            }
        })
    }
    parseParagraph(text){
        return text.trim().length ? `<p>${text.trim()}</p>` : '';
    }
    parseTitle(text){
        return text.replace(Markdown.TITLE_REG,function(item){
            let n = RegExp.$1.length > 6 ? 6 : RegExp.$1.length;  // 1-6个#号；
            let textConent = RegExp.$2;
            return `<h${n}>${textConent}</h${n}>`;
        })
    }
    static isTitle(val){
        return Markdown.TITLE_REG.test(val);
    }
}