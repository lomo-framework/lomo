/**
 * Created by vincent on 17/3/11.
 */
import Signal from 'signals';
import warning from 'warning';
import createElement from './createElement';
let hashCode = 0;
export default class DisplayObject{
    _signal;
    get signal(){
        if(!this._signal)
            this._signal = new Signal();
        return this._signal;
    }

    _hashCode;
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
    _props;
    get props(){
        return this._props;
    }
    constructor(props){
        this._props = props || {};
        this._hashCode = hashCode ++;
        this.beforeCreate();
        this._element = this.render();
        this.afterCreate();
    }
    beforeCreate(){

    }
    afterCreate(){

    }
    onDestory(){

    }
    querySelector(selector){
        return this.element.querySelector(selector);
    }
    
    removeFromContainer(){
        this.parent && this.parent.removeChild(this);
    }
    onAdded(){
        this.signal.dispatch('addedToStage');
    }
    onRemoved(){
        this.signal.dispatch('removedFromStage');
    }
    on(type, listener, useCapture){
        this.element.addEventListener(type, listener, useCapture);
    }
    once(type, listener, useCapture){
        let wrapper = ()=>{
            this.off(type, wrapper, useCapture);

            listener();
        };
        this.on(type, wrapper, useCapture);
    }
    off(type, listener, useCapture){
        this.element.removeEventListener(type, listener, useCapture);
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
        return <div {...this.props}/>;
    }
}