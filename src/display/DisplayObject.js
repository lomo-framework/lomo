/**
 * Created by vincent on 17/3/11.
 */
import signals from "signals";
import Signal from "../utils/Signal";
import createDOMNode from "../utils/createDOMNode";
let hashCode = 0;

export default class DisplayObject{
  _signal;
  get signal(){
    if(!this._signal)
      this._signal = new signals.Signal();
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
  get stage(){
    return this.parent?this.parent.stage:null;
  }
  get nodeType(){
    return null;
  }
  constructor(props){
    this._hashCode = hashCode ++;
    this._props = props || {};

    this.$initialize();
  }
  $initialize(){
    this.render(this.props);
    this.onCreate();
    this.signal.dispatch(Signal.CREATE);
  }
  $setDOMProps(props){
    if(props){
      for (var name in props) {
        if(props.hasOwnProperty(name)) {
          this.element.setAttribute(name, props[name]);
        }
      }
    }
  }
  onCreate(){

  }
  onDestory(){
    this.signal.dispatch(Signal.DESTORY);
  }
  querySelector(selector){
    return this.element.querySelector(selector);
  }

  removeFromContainer(){
    this.parent && this.parent.removeChild(this);
  }
  onAdded(){
    this.signal.dispatch(Signal.ADDED_TO_STAGE);
  }
  onRemoved(){
    this.signal.dispatch(Signal.REMOVED_FROM_STAGE);
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
  getStyle(styleName){
    if(typeof styleName == 'string'){
      return this.element.style[styleName];
    }
    return this.element.style;
  }
  setStyle(styleName, value){
    if(styleName !== void 0){
      if(typeof styleName == 'string'){
        this.element.style[styleName] = value;
      }else if(typeof styleName == 'object'){
        Object.assign(this.element.style, styleName);
      }
    }
  }
  getClassName(){
    return this.element.className;
  }
  setClassName(className){
    if(className !== void 0){
      this.element.className = className;
    }
  }
  render(props){
    let {style, className, ...others} = props;
    this._element = createDOMNode(this.nodeType);
    this.setStyle(style);
    this.setClassName(className);
    this.$setDOMProps(others);
  }
}
