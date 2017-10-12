import DisplayObject from "./DisplayObject";

class Label extends DisplayObject {
  get text() {
    return this.element.innerHTML;
  }
  set text(value) {
    this.element.innerHTML = value;
    this.dispatchEvent('textChanged');
  }
  get wordWrap() {
    return this.props.get('wordWrap');
  }
  set wordWrap(value) {
    this.props.set('wordWrap', value);

    this.element.style.whiteSpace = value?'inherit':"nowrap";
  }
  createElement() {
    this.positioner = this.element = document.createElement('span');
    this.wordWrap = false;
  }
}
module.exports = Label;
