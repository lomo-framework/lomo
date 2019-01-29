import DisplayObject from './DisplayObject';

class Button extends DisplayObject {
  get text() {
    return this.element.innerText;
  }
  set text(value) {
    if (this.element.innerText !== value) {
      this.element.innerText = value;
    }
  }

  createElement() {
    this.element = document.createElement('button');
    this.element.setAttribute('type', 'button');
  }
}
module.exports = Button;
