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
    this.positioner = this.element = document.createElement('button');
    this.element.setAttribute('type', 'button');

    this.clickHandler = this::this.clickHandler;
    this.element.addEventListener('click', this.clickHandler, false);
  }
  clickHandler(event){
    this.dispatchEvent('click');
  }
}
module.exports = Button;
