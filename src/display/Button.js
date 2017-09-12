import DisplayObject from "./DisplayObject";

class Button extends DisplayObject {
  get text() {
    return this.element.value;
  }
  set text(value) {
    this.element.value = value;
    this.dispatchEvent('textChanged');
  }

  createElement() {
    this.element = document.createElement('button');
    this.element.setAttribute('type', 'button');

    this.positioner = this.element;
    this.className = "Button";
  }
}
module.exports = Button;
