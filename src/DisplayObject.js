/**
 * Created by vincent on 17/3/11.
 */
import warning from 'warning';
let hashCode = 0;
export default class DisplayObject{
    _hashCode = hashCode ++;
    get hashCode(){
        return this._hashCode;
    }
    _element = this.renderElement();
    get element(){
        return this._element;
    }
    _elementChildren = this.renderElementChildren();
    get elementChildren(){
        return this._elementChildren;
    }
    _parent;
    get parent(){
        return this._parent;
    }
    _children = [];
    get children(){
        return this._children;
    }
    
    constructor(){

    }
    querySelector(selector){
        return this.element.querySelector(selector);
    }

    getChildIndex(child){
        return this._children.indexOf(child);
    }
    getChildAt(index){
        if(index <= -1){
            index = this._children.length + index;
        }
        if(index >= 0 && index <= this._children.length - 1) {
            return this._children[index];
        }
    }
    addChild(child){
        this.addChildAt(child, -1);
    }
    addChildAt(child, index){
        if(index <= -1){
            index = this._children.length + index + 1;
        }
        if(index >= 0 || index <= this._children.length){
            this.elementChildren.appendChild(child.element);
            child._parent = this;
            this._children.splice(index, 0, child);
            child._onAdded();
            return child;
        }else{
            warning(false, `参数非法(index:${index})`);
        }
    }
    removeChild(child){
        let index = this.getChildIndex(child);
        return this.removeChildAt(index);
    }
    removeChildAt(index){
        if(index <= -1){
            index = this._children.length + index;
        }
        if(index >= 0 && index <= this._children.length - 1){
            let child = this._children[index];
            this.elementChildren.removeChild(child.element);
            child._parent = null;
            this._children.splice(index, 1);
            child._onRemoved();
            return child;
        }else{
            warning(false, `参数非法(index:${index})`);
        }
    }
    removeChildren(startIndex=0, endIndex=-1){
        if(startIndex <= -1){
            startIndex = this._children.length + startIndex;
        }
        if(endIndex <= -1){
            endIndex = this._children.length + endIndex;
        }
        for (let i = startIndex; i <= endIndex; i++) {
            this.removeChildAt(i);
        }
    }
    removeFromContainer(){
        this.parent && this.parent.removeChild(this);
    }
    contains(child){
        return child == this || child.parent == this || this.children.some((item)=>item.contains(child));
    }
    dangerouslySetInnerHTML(innerHTML){
        this.elementChildren.innerHTML = innerHTML;
    }
    // _createElement(){
    //     this._element = this.render();
    //     process.env.NODE_ENV == 'development' && this.element.setAttribute('data-lomo-id', this.hashCode);
    // }
    _onAdded(){
        // fixme
        // this.dispatchEvent('addedToStage');
    }
    _onRemoved(){
        // fixme
        // this.dispatchEvent('removedFromStage');
    }
    addEventListener(...args){
        this.element.addEventListener(...args);
    }
    removeEventListener(...args){
        this.element.removeEventListener(...args);
    }
    renderElement(){
        return this.elementChildren;
    }
    renderElementChildren(){
        return <div/>;
    }
}