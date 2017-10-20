import DisplayObject from "./DisplayObject";

class Input extends DisplayObject {
  get text() {
    return this.element.value;
  }
  set text(value) {
    if(this.element.value != value) {
      this.element.value = value;
      this.dispatchEvent('textChanged');
    }
  }

  createElement() {
    this.positioner = this.element = document.createElement('input');
    this.element.setAttribute('type', 'text');

    this.textChangeHandler = this::this.textChangeHandler;
    this.element.addEventListener('input', this.textChangeHandler, false);
  }
  textChangeHandler(event){
    this.dispatchEvent('textChanged');
  }
}
module.exports = Input;