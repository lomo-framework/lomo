import DisplayObject from "./DisplayObject";

class Button extends DisplayObject {
  get text() {
    return this.element.innerHTML;
  }
  set text(value) {
    this.element.innerHTML = value;
    this.dispatchEvent('textChanged');
  }

  createElement() {
    this.element = document.createElement('button');
    this.element.setAttribute('type', 'button');
  }
}
module.exports = Button;
