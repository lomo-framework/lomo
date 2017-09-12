import DisplayObject from "./DisplayObject";

export default class Label extends DisplayObject {
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
    this.className = "Label";

    this.positioner = this.element;
    return this.element;
  }
}
