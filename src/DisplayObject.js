import EventDispatcher from './EventDispatcher';

class DisplayObject extends EventDispatcher {
  static styleRules = {
    colorStyles : {
      'backgroundColor': 1,
      'borderColor': 1,
      'color': 1
    },
    numericStyles : {
      'fontWeight': 1,
      'zIndex': 1
    }
  };

  constructor() {
    super();

    this.createElement();
  }

  _contentElement;

  /**
   * 用于存放子元素的容器
   * @returns {*}
   */
  get contentElement(){
    return this._contentElement || this.element;
  }

  set contentElement(value) {
    if (this._contentElement != value) {
      this._contentElement = value;
    }
  }

  _element;

  get element() {
    return this._element;
  }

  set element(value) {
    if(this._element != value) {
      this._element = value;
      this.element.__lomo_wrapper = this;

      if (process.env.NODE_ENV !== 'production') {
        this.element.setAttribute('data-lomo', this.name || this.constructor.name || 'DisplayObject');
      }
    }
  }
  getAttribute(name) {
    return this.element.getAttribute(name);
  }
  setAttribute(name, value) {
    this.element.setAttribute(name,value);
  }
  removeAttribute(name){
    this.element.removeAttribute(name);
  }
  // get __lomo_wrapper() {
  //   return this;
  // }
  // set __lomo_wrapper(value) {
  // }

  get x() {
    let strpixels = this.element.style.left;
    let pixels = parseFloat(strpixels);
    if (isNaN(pixels))
      pixels = this.element.offsetLeft;
    return pixels;
  }

  set x(value) {
    this.element.style.position = 'absolute';
    this.element.style.left = value.toString() + 'px';
  }

  get y() {
    let strpixels = this.element.style.top;
    let pixels = parseFloat(strpixels);
    if (isNaN(pixels))
      pixels = this.element.offsetTop;
    return pixels;
  }

  set y(value) {
    this.element.style.position = 'absolute';
    this.element.style.top = value.toString() + 'px';
  }

  get width() {
    let pixels;
    let strpixels = this.element.style.width;
    if (strpixels !== null && strpixels.indexOf('%') != -1)
      pixels = NaN;
    else if (strpixels === "")
      pixels = NaN;
    else
      pixels = parseFloat(strpixels);
    if (isNaN(pixels)) {
      pixels = this.element.offsetWidth;
      if (pixels === 0 && this.element.scrollWidth !== 0) {
        // invisible child elements cause offsetWidth to be 0.
        pixels = this.element.scrollWidth;
      }
    }
    return pixels;
  }
  _width;
  set width(value) {
    if (this._width !== value) {
      this._width = value;
      this.element.style.width = this._width.toString() + 'px';
    }
  }

  get height() {
    let pixels;
    let strpixels = this.element.style.height;
    if (strpixels !== null && strpixels.indexOf('%') != -1)
      pixels = NaN;
    else if (strpixels === "")
      pixels = NaN;
    else
      pixels = parseFloat(strpixels);
    if (isNaN(pixels)) {
      pixels = this.element.offsetHeight;
      if (pixels === 0 && this.element.scrollHeight !== 0) {
        // invisible child elements cause offsetHeight to be 0.
        pixels = this.element.scrollHeight;
      }
    }
    return pixels;
  }

  _height;
  set height(value) {
    if (this._height !== value) {
      this._height = value;
      this.element.style.height = this._height.toString() + 'px';
    }
  }

  _displayStyleForLayout;

  get visible() {
    return this.element.style.display !== 'none';
  }

  set visible(value) {
    let oldValue = this.element.style.display !== 'none';
    if (value !== oldValue) {
      if (value) {
        this.element.style.display = this._displayStyleForLayout;
      } else {
        this._displayStyleForLayout = this.element.style.display;
        this.element.style.display = 'none';
      }
    }
  }

  internalChildren() {
    return this.contentElement.childNodes;
  }

  _name;

  get name() {
    return this._name;
  }

  set name(value) {
    if (this._name !== value) {
      this._name = value;
    }
  }

  get style() {
    return this.element.style;
  }

  get classList() {
    return this.element.classList;
  }

  /**
   * 创建自身组件
   */
  createElement(){
  }

  addElement(child) {
    this.contentElement.appendChild(child.element);
    return child;
  }

  addElementAt(child, index) {
    const children = this.internalChildren();
    if (index >= children.length)
      return this.addElement(child);
    else {
      this.contentElement.insertBefore(child.element, children[index]);
      return child;
    }
  }

  getElementAt(index) {
    const children = this.internalChildren();
    if (children.length == 0) {
      return null;
    }
    return children[index].__lomo_wrapper;
  }

  getElementIndex(child) {
    const children = this.internalChildren();
    for (let i = 0; i < children.length; i++) {
      if (children[i] == child.element)
        return i;
    }
    return -1;
  }

  getElementByName(name){
    const children = this.internalChildren();
    for (let i = 0; i < children.length; i++) {
      let wrapper = children[i].__lomo_wrapper;
      if(wrapper){
        if (wrapper.name == name)
          return wrapper;
        else{
          let element = wrapper.getElementByName(name);
          if(element){
            return element;
          }
        }
      }
    }
  }

  removeElement(child) {
    this.contentElement.removeChild(child.element);
    return child;
  }

  removeElementAt(index) {
    return this.removeElement(this.getElementAt(index));
  }
  removeElements(beginIndex=0, endIndex=-1) {
    const children = this.internalChildren();
    if(endIndex == -1 || endIndex > children.length - 1){
      endIndex = children.length - 1;
    }
    let elements = [];
    for (let i = endIndex; i >= beginIndex; i--) {
      elements.push(this.removeElement(children[i].__lomo_wrapper));
    }
    return elements;
  }

  get numElements() {
    return this.internalChildren().length;
  }

  get alpha(){
    const opacity = this.element.style.opacity;
    if(opacity == ''){
      return 1;
    }
    return parseFloat(opacity);
  }

  set alpha(value) {
    this.element.style.opacity = value;
  }

  get parent() {
    let element = this.element;
    while(element = element.parentNode, element){
      if(element.__lomo_wrapper)
        return element.__lomo_wrapper;
    }
  }

  get stage() {
    const parent = this.parent;
    return parent?parent.stage:null;
  }

  $internalSetStyle(name, value) {
    let {colorStyles, numericStyles} = DisplayObject.styleRules;
    if (value === undefined)
      return;
    if (typeof(value) == 'number') {
      if (colorStyles[name]) {
        if(value > 0xffffff) {
          value = `rgba(${value >> 16 & 0xff},${value >> 8 & 0xff},${value >> 0 & 0xff},${(value >> 24 & 0xff)/255})`;
        }else{
          value = `#${value.toString(16).padStart(6, '0')}`;
        }
      } else if (!numericStyles[name]) {
        value = `${value}px`;
      }
    }
    this.element.style[name] = value;
  }
  setStyle(nameOrStyles, value){
    if(typeof nameOrStyles == 'string'){
      this.$internalSetStyle(nameOrStyles, value);
    }else if(typeof nameOrStyles == 'object'){
      for (let name in nameOrStyles) {
        if(nameOrStyles.hasOwnProperty(name)){
          this.$internalSetStyle(name, nameOrStyles[name]);
        }
      }
    }
  }
  on(type, listener){
    this.addEventListener(type, listener);
  }
  once(type, listener){
    this.addEventListener(type, (event)=>{
      this.removeEventListener(type, listener);
      listener.call(this, event);
    });
  }
  off(type, listener){
    this.removeEventListener(type, listener);
  }
  addDOMEventListener(type,listener,useCapture){
    this.element.addEventListener(type,listener,useCapture);
  }
  removeDOMEventListener(type,listener,useCapture){
    this.element.removeEventListener(type,listener,useCapture);
  }
  dispatchDOMEvent(event){
    this.element.dispatchEvent(event);
  }
}
module.exports = DisplayObject;
