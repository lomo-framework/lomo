/**
 * Created by vincent on 17/3/11.
 */
import signals from "signals";
import Signal from "../utils/Signal";
import assign from "object-assign";
import createDOMNode from "../utils/createDOMNode";
import eachChildren from "../utils/eachChildren";
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
    this._props = assign({}, this.constructor.defaultProps, props);
    this.$initialize();
  }
  $initialize(){
    this.render(this.props);
    this.signal.dispatch(Signal.CREATE);
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
      return this.getProperty('style')[styleName];
    }
    return this.getProperty('style');
  }
  setStyle(styleName, value){
    if(styleName !== void 0){
      if(typeof styleName == 'string'){
        this.setProperty('style', assign({}, this.getProperty('style'), {[styleName]: value}));
      }else if(typeof styleName == 'object'){
        this.setProperty('style', assign({}, this.getProperty('style'), styleName));
      }
    }
  }
  getClassName(){
    return this.getProperty('className');
  }
  setClassName(className){
    this.setProperty('className', className);
  }
  getProperty(name){
    return this.props[name];
  }
  setProperty(name, value, validateNow=false){
    if(this._props[name] !== value){
      this._props = assign({}, this._props, {[name]: value});
      this._invalid = true;
      if(validateNow){
        this.validateProperty();
        // this.render(this.props);
        // this.onUpdate();
        // this.signal.dispatch(Signal.UPDATE);
      }
    }
  }
  validateProperty(){
    if(this._invalid){
      this._invalid = false;
      this.render(this.props);
    }
  }
  $validateStyle(style){
    assign(this.element.style, style);
  }
  $validateClassName(className){
    if(className !== void 0){
      this.element.className = className;
    }
  }

  /**
   * 生成 DOM 节点
   * @param props
   */
  render(props){
    let {style, className, nodeType, children, ...others} = props;
    this._element = createDOMNode(nodeType || this.nodeType);
    this.$validateStyle(style);
    this.$validateClassName(className);
    this.$setDOMProps(others);
    this.$setDOMChildren(children);

    this.onCreate();
  }

  /**
   * 将属性应用到 DOM 节点
   * @param props
   */
  $setDOMProps(props){
    if(props){
      for (var name in props) {
        if(props.hasOwnProperty(name)) {
          this.element.setAttribute(name, props[name]);
        }
      }
    }
  }
  $setDOMChildren(children){
    eachChildren(children, (child)=>{
      if(typeof child == 'string'){
        var textNode = document.createTextNode(child);
        this.element.appendChild(textNode);
      }else {
        console.warn(`只有容器才能添加子元素`);
      }
    });
  }
}
