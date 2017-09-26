import EventDispatcher from "./EventDispatcher";
import {colorStyles, numericStyles, skipStyles} from "../utils/constants";
import {attributeFromColor, parseStyles} from "../utils/CSSUtil";
class DisplayObject extends EventDispatcher {
  constructor() {
    super();

    this.createElement();
    if (process.env.NODE_ENV !== 'production') {
      this.positioner.setAttribute('data-lomo', this.constructor.name || 'unset');
    }
    this.positioner.lomo_wrapper = this;
  }
  _element;

  get element(){
    return this._element;
  }

  set element(value) {
    if (this._element != value) {
      this._element = value;
      this.dispatchEvent("elementChanged");
    }
  }

  _values = {};
  getValue(name) {
    return this._values[name];
  }
  setValue(name, value) {
    let oldValue = this._values[name];
    if (oldValue != value) {
      this._values[name] = value;
      this.dispatchEvent({type: `valueChanged`, propertyName: name, oldValue: oldValue, newValue: value});
    }
  }

  get lomo_wrapper() {
    return this;
  }
  set lomo_wrapper(value) {
  }

  _explicitWidth;

  get explicitWidth() {
    return this._explicitWidth;
  }

  /**
   *  @private
   */
  set explicitWidth(value) {
    if (this._explicitWidth == value)
      return;

    // width can be pixel or percent not both
    if (!isNaN(value))
      this._percentWidth = NaN;

    this._explicitWidth = value;

    this.dispatchEvent("explicitWidthChanged");
  }

  _explicitHeight;

  /**
   *  The explicitly set width (as opposed to measured width
   *  or percentage width).
   *
   *  @langversion 3.0
   *  @playerversion Flash 10.2
   *  @playerversion AIR 2.6
   *  @productversion FlexJS 0.0
   */
  get explicitHeight() {
    return this._explicitHeight;
  }

  /**
   *  @private
   */
  set explicitHeight(value) {
    if (this._explicitHeight == value)
      return;
    // height can be pixel or percent not both
    if (!isNaN(value))
      this._percentHeight = NaN;
    this._explicitHeight = value;
    this.dispatchEvent("explicitHeightChanged");
  }

  _percentWidth;
  get percentWidth() {
    return this._percentWidth;
  }
  set percentWidth(value) {
    this._percentWidth = value;
    this.positioner.style.width = value.toString() + '%';
    if (!isNaN(value))
      this._explicitWidth = NaN;
    this.dispatchEvent("percentWidthChanged");
  }

  _percentHeight;
  get percentHeight() {
    return this._percentHeight;
  }
  set percentHeight(value) {
    this._percentHeight = value;
    this.positioner.style.height = value.toString() + '%';
    if (!isNaN(value))
      this._explicitHeight = NaN;

    this.dispatchEvent("percentHeightChanged");
  }

  _width;
  get width() {
    let pixels;
    let strpixels = this.positioner.style.width;
    if (strpixels !== null && strpixels.indexOf('%') != -1)
      pixels = NaN;
    else if (strpixels === "")
      pixels = NaN;
    else
      pixels = parseFloat(strpixels);
    if (isNaN(pixels)) {
      pixels = this.positioner.offsetWidth;
      if (pixels === 0 && this.positioner.scrollWidth !== 0) {
        // invisible child elements cause offsetWidth to be 0.
        pixels = this.positioner.scrollWidth;
      }
    }
    return pixels;
  }

  set width(value) {
    if (this.explicitWidth != value) {
      this.explicitWidth = value;
    }

    if (this._width != value) {
      this._width = value;

      this.positioner.style.width = value.toString() + 'px';

      this.dispatchEvent("widthChanged");
    }
  }

  _height;
  get height() {
    let pixels;
    let strpixels = this.positioner.style.height;
    if (strpixels !== null && strpixels.indexOf('%') != -1)
      pixels = NaN;
    else if (strpixels === "")
      pixels = NaN;
    else
      pixels = parseFloat(strpixels);
    if (isNaN(pixels)) {
      pixels = this.positioner.offsetHeight;
      if (pixels === 0 && this.positioner.scrollHeight !== 0) {
        // invisible child elements cause offsetHeight to be 0.
        pixels = this.positioner.scrollHeight;
      }
    }
    return pixels;
  }
  set height(value) {
    if (this.explicitHeight != value) {
      this.explicitHeight = value;
    }

    if (this._height != value) {
      this._height = value;
      this.positioner.style.height = value.toString() + 'px';
      this.dispatchEvent("heightChanged");
    }
  }

  // isWidthSizedToContent() {
  //   if (!isNaN(this._explicitWidth))
  //     return false;
  //   if (!isNaN(this._percentWidth))
  //     return false;
  //   let left = this.getValue("left");
  //   let right = this.getValue("right");
  //   return (left === undefined || right === undefined);
  //
  // }

  // isHeightSizedToContent() {
  //   if (!isNaN(this._explicitHeight))
  //     return false;
  //   if (!isNaN(this._percentHeight))
  //     return false;
  //   let top = this.getValue("top");
  //   let bottom = this.getValue("bottom");
  //   return (top === undefined || bottom === undefined);
  // }

  _x;

  set x(value)
  {
    //positioner.style.position = 'absolute';
    this.positioner.style.left = value.toString() + 'px';
  }

  get x() {
    let strpixels = this.positioner.style.left;
    let pixels = parseFloat(strpixels);
    if (isNaN(pixels))
      pixels = this.positioner.offsetLeft;
    return pixels;
  }

  _y;

  set y(value) {
    //positioner.style.position = 'absolute';
    this.positioner.style.top = value.toString() + 'px';
  }

  get y() {
    let strpixels = this.positioner.style.top;
    let pixels = parseFloat(strpixels);
    if (isNaN(pixels))
      pixels = this.positioner.offsetTop;
    return pixels;
  }


  displayStyleForLayout;

  get visible() {
    return this.positioner.style.display !== 'none';
  }

  set visible(value) {
    let oldValue = this.positioner.style.display !== 'none';
    if (value !== oldValue) {
      if (!value) {
        this.displayStyleForLayout = this.positioner.style.display;
        this.positioner.style.display = 'none';
      } else {
        if (this.displayStyleForLayout != null)
          this.positioner.style.display = this.displayStyleForLayout;
      }
      this.dispatchEvent('visibleChanged');
    }
  }

  internalChildren() {
    return this.element.childNodes;
  }

  _name;

  get name() {
    return this._name;
  }

  set name(value) {
    if (this._name != value) {
      this._name = value;
      this.dispatchEvent("nameChanged");
    }
  }
  getElementByName(name){
    let children = this.internalChildren();
    let n = children.length;
    for (let i = 0; i < n; i++) {
      let element = children[i].lomo_wrapper;
      if(element){
        if (element.name == name)
          return element;
        else{
          let deepElement = element.getElementByName(name);
          if(deepElement){
            return deepElement;
          }
        }
      }
    }
  }

  _style;

  get style() {
    return this._style;
  }

  set style(value) {
    if (this._style != value) {
      if (typeof value == 'string') {
        this._style = parseStyles(value);
      }
      else
        this._style = value;
      if (!isNaN(this._y))
        this._style.top = this._y;
      if (!isNaN(this._x))
        this._style.left = this._x;

      if (this.parent)
        this.applyStyles(this._style);

      this.dispatchEvent("styleChanged");
    }
  }

  _className;

  get className() {
    return this._className;
  }

  set className(value) {
    if (this._className != value) {
      this._className = value;
      this.positioner.className = value;
      this.dispatchEvent("classNameChanged");
    }
  }

  addElement(c, dispatchEvent = true) {
    this.element.appendChild(c.positioner);
    c.addedToParent();
  }

  addElementAt(c, index, dispatchEvent = true) {
    let children = this.internalChildren();
    if (index >= children.length)
      this.addElement(c);
    else {
      this.element.insertBefore(c.positioner, children[index]);
      c.addedToParent();
    }
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
    let n = children.length;
    for (let i = 0; i < n; i++) {
      if (children[i] == c.element)
        return i;
    }
    return -1;

  }

  removeElement(c, dispatchEvent = true) {
    this.element.removeChild(c.positioner);
  }

  get numElements() {
    let children = this.internalChildren();
    return children.length;
  }

  addedToParent() {
    if (this.style)
      this.applyStyles(this.style);

    if (isNaN(this._explicitWidth) && isNaN(this._percentWidth)) {
      let value = this.getValue("width");
      if (value !== undefined) {
        if (typeof value == 'string') {
          let s = String(value);
          if (s.indexOf("%") != -1)
            this._percentWidth = Number(s.substring(0, s.length - 1));
          else {
            if (s.indexOf("px") != -1)
              s = s.substring(0, s.length - 2);
            this._width = this._explicitWidth = Number(s);
          }
        }
        else
          this._width = this._explicitWidth = value;
      }
    }

    if (isNaN(this._explicitHeight) && isNaN(this._percentHeight)) {
      let value = this.getValue("height");
      if (value !== undefined) {
        if (typeof value == 'string') {
          let s = String(value);
          if (s.indexOf("%") != -1)
            this._percentHeight = Number(s.substring(0, s.length - 1));
          else {
            if (s.indexOf("px") != -1)
              s = s.substring(0, s.length - 2);
            this._height = this._explicitHeight = Number(s);
          }
        }
        else
          this._height = this._explicitHeight = value;
      }
    }
  }

  _positioner;

  get positioner() {
    return this._positioner;
  }

  set positioner(value) {
    this._positioner = value;
  }

  createElement(){
    if (this.element == null)
      this.element = document.createElement('div');
    if (this.positioner == null)
      this.positioner = this.element;
    this.positioner.style.display = 'block';
    //positioner.style.position = 'relative';
  }
  get alpha(){
    let stralpha = this.positioner.style.opacity;
    let alpha = parseFloat(stralpha);
    return alpha;
  }

  set alpha(value) {
    this.positioner.style.opacity = value;
  }

  get parent() {
    let positioner = this.positioner;
    while(positioner = positioner.parentNode, positioner){
      if(positioner.lomo_wrapper)
        return positioner.lomo_wrapper;
    }
    return null;
  }

  applyStyles(styles) {
    // let styleList = perInstanceStyles;
    // let colorStyles = colorStyles;
    // let skipStyles = skipStyles;
    // let numericStyles = numericStyles;
    let listObj = styles;
    if (styles.styleList)
      listObj = styles.styleList;
    for (let p in listObj) {
      //if (styleList[p])
      if (skipStyles[p])
        continue;
      let value = styles[p];
      if (value === undefined)
        continue;
      if (typeof(value) == 'number') {
        if (colorStyles[p])
          value = attributeFromColor(value);
        else if (numericStyles[p])
          value = value.toString();
        else
          value = value.toString() + 'px';
      } else if (p == 'backgroundImage') {
        if (p.indexOf('url') !== 0)
          value = 'url(' + value + ')';
      }
      this.element.style[p] = value;
    }
  }
}
module.exports = DisplayObject;
