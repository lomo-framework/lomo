import DisplayObject from "./DisplayObject";

export default class Button extends DisplayObject {
  get text() {
    return this.element.value;
  }
  set text(value) {
    this.element.value = value;
    this.dispatchEvent('textChanged');
  }

  createElement() {
    this.element = document.createElement('button') as WrappedHTMLElement;
    this.element.setAttribute('type', 'button');

    this.positioner = this.element;
    return this.element;
  }
}
