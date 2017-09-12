import DisplayObject from "./DisplayObject";

export default class Input extends DisplayObject {
  get text() {
    return this.element.value;
  }
  set text(value) {
    this.element.value = value;
    this.dispatchEvent('textChanged');
  }

  createElement() {
    this.element = document.createElement('input');
    this.element.setAttribute('type', 'text');
    this.className = "Input";

    this.element.addEventListener('input', this.textChangeHandler);

    this.positioner = this.element;
    return this.element;
  }
}
