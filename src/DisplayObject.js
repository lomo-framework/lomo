/**
 * Created by vincent on 17/3/11.
 */
import warning from 'warning';
import createElement from './createElement';
let hashCode = 0;
export default class DisplayObject{
    _hashCode = hashCode ++;
    get hashCode(){
        return this._hashCode;
    }
    _element;
    get element(){
        return this._element;
    }
    _parent;
    get parent(){
        return this._parent;
    }
    
    constructor(){
        this._createElement();
    }
    _createElement(){
        this._element = this.render();
    }
    querySelector(selector){
        return this.element.querySelector(selector);
    }
    
    removeFromContainer(){
        this.parent && this.parent.removeChild(this);
    }
    onAdded(){
        // fixme
        // this.dispatchEvent('addedToStage');
    }
    onRemoved(){
        // fixme
        // this.dispatchEvent('removedFromStage');
    }
    on(...args){
        this.element.addEventListener(...args);
    }
    off(...args){
        this.element.removeEventListener(...args);
    }
    get style(){
        return this.element.style;
    }
    get classList(){
        return this.element.classList;
    }
    setClass(className){
        this.element.className = className;
    }
    addClass(className){
        this.element.classList.add(className);
    }
    removeClass(className){
        this.element.classList.remove(className);
    }
    setStyle(styleName, value){
        if(typeof styleName == 'string'){
            this.element.style[styleName] = value;
        }else if(typeof styleName == 'object'){
            for(let name in styleName){
                if(styleName.hasOwnProperty(name)) {
                    this.element.style[name] = value;
                }
            }
        }
    }
    render(){
        return <div/>;
    }
}