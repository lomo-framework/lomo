import EventDispatcher from "./EventDispatcher";
import HashMap from "hashmap";

const DebugAttributeKey = 'data-lomo';
class DisplayObject extends EventDispatcher {
  static styleRules = {
    perInstanceStyles : {
      'backgroundColor': 1,
      'backgroundImage': 1,
      'color': 1,
      'fontFamily': 1,
      'fontWeight': 1,
      'fontSize': 1,
      'fontStyle': 1
    },
    colorStyles : {
      'backgroundColor': 1,
      'borderColor': 1,
      'color': 1
    },
    skipStyles : {
      'constructor': 1
    },
    numericStyles : {
      'fontWeight': 1,
      'zIndex': 1
    }
  };
  static toHexColor(value){
    var hexVal = value.toString(16);
    if(value > 16777215)
    {
      //rgba -- return rgba notation
      var rgba = hexVal.match(/.{2}/g);
      for(var i = 0; i < 4; i++)
      {
        rgba[i] = parseInt(rgba[i], 16);
      }
      rgba[3] = parseInt(""+(rgba[3]/255)*1000, 10) / 1000;
      return "rgba(" + rgba.join(",") + ")";
    }
    return "#" + hexVal.padStart(6, '0');
  }

  constructor(auto=true) {
    super();

    auto && this.createElement();
  }

  _innerElement;

  get innerElement(){
    return this._innerElement || this.element;
  }

  set innerElement(value) {
    if (this._innerElement != value) {
      this._innerElement = value;
    }
  }

  _element;

  get element() {
    return this._element;
  }

  set element(value) {
    if(this._element != value) {
      this._element = value;
      this.element.lomo_wrapper = this;
      this.$debug();
    }
  }
  $debug(){
    if (process.env.NODE_ENV !== 'production') {
      this.element.setAttribute(DebugAttributeKey, this.name || this.constructor.name || 'DisplayObject');
    }
  }

  _props;
  get props() {
    if(!this._props){
      this._props = new HashMap();
    }
    return this._props;
  }

  get lomo_wrapper() {
    return this;
  }
  set lomo_wrapper(value) {
  }

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

  set width(value) {
    if (this.props.get('width') != value) {
      this.props.set('width', value);
      this.element.style.width = value.toString() + 'px';
      this.dispatchEvent("widthChanged");
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

  set height(value) {
    if (this.props.get('height') != value) {
      this.props.set('height', value);
      this.element.style.height = value.toString() + 'px';
      this.dispatchEvent("heightChanged");
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
      this.dispatchEvent('visibleChanged');
    }
  }

  internalChildren() {
    return this.innerElement.childNodes;
  }

  _name;

  get name() {
    return this._name;
  }

  set name(value) {
    if (this._name != value) {
      this._name = String(value);
      this.$debug();
    }
  }

  get style() {
    return this.element.style;
  }

  get className() {
    return this.element.className;
  }

  set className(value) {
    if (this.element.className != value) {
      this.element.className = value;
    }
  }

  createElement(){
    this.element = document.createElement('div');
  }

  addElement(c) {
    this.innerElement.appendChild(c.element);
    return c;
  }

  addElementAt(c, index) {
    let children = this.internalChildren();
    if (index >= children.length)
      this.addElement(c);
    else {
      this.innerElement.insertBefore(c.element, children[index]);
    }
    return c;
  }

  getElementAt(index) {
    let children = this.internalChildren();
    if (children.length == 0) {
      return null;
    }
    return children[index].lomo_wrapper;
  }

  getElementIndex(c) {
    let children = this.internalChildren();
    for (let i = 0; i < children.length; i++) {
      if (children[i] == c.element)
        return i;
    }
    return -1;
  }

  getElementByName(name){
    let children = this.internalChildren();
    for (let i = 0; i < children.length; i++) {
      let wrapper = children[i].lomo_wrapper;
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

  removeElement(c) {
    this.innerElement.removeChild(c.element);
    return c;
  }

  removeElementAt(index) {
    let child = this.getElementAt(index);
    return this.removeElement(child);
  }
  removeElements(beginIndex=0, endIndex=-1) {
    let children = this.internalChildren();
    if(endIndex == -1 || endIndex > children.length - 1){
      endIndex = children.length - 1;
    }
    let elements = [];
    for (let i = endIndex; i >= beginIndex; i--) {
      elements.push(this.removeElement(children[i].lomo_wrapper));
    }
    return elements;
  }

  get numElements() {
    let children = this.internalChildren();
    return children.length;
  }

  get alpha(){
    let strAlpha = this.element.style.opacity;
    return parseFloat(strAlpha);
  }

  set alpha(value) {
    this.element.style.opacity = value;
  }

  get parent() {
    let element = this.element;
    while(element = element.parentNode, element){
      if(element.lomo_wrapper)
        return element.lomo_wrapper;
    }
  }

  get root() {
    return this.parent.root;
  }

  $internalSetStyle(name, value) {
    let {skipStyles, colorStyles, numericStyles} = DisplayObject.styleRules;
    if (value === undefined || skipStyles[name])
      return;
    if (typeof(value) == 'number') {
      if (colorStyles[name])
        value = DisplayObject.toHexColor(value);
      else if (numericStyles[name])
        value = value.toString();
      else
        value = value.toString() + 'px';
    } else if (name == 'backgroundImage') {
      if (name.indexOf('url') !== 0)
        value = 'url(' + value + ')';
    }
    this.element.style[name] = value;
  }
  setStyle(nameOrStyles, value){
    if(typeof nameOrStyles == 'string' && value != null){
      this.$internalSetStyle(nameOrStyles, value);
    }else if(typeof nameOrStyles == 'object'){
      for (let name in nameOrStyles) {
        if(nameOrStyles.hasOwnProperty(name)){
          this.$internalSetStyle(name, nameOrStyles[name]);
        }
      }
    }
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
