import DisplayObject from "./DisplayObject";

class Label extends DisplayObject {
  get text() {
    return this.element.innerHTML;
  }
  set text(value) {
    this.element.innerHTML = value;
    this.dispatchEvent('textChanged');
  }

  createElement() {
    this.element = document.createElement('span');
    this.element.style.whiteSpace = "nowrap";
    this.positioner = this.element;
    this.className = "Label";
  }
}
module.exports = Label;
