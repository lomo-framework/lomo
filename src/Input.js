import DisplayObject from './DisplayObject';

class Input extends DisplayObject {
  get text() {
    return this.element.value;
  }
  set text(value) {
    if (this.element.value != value) {
      this.element.value = value;
    }
  }

  createElement() {
    this.element = document.createElement('input');
    this.element.setAttribute('type', 'text');
  }
}
module.exports = Input;
