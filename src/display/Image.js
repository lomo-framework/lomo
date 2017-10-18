import DisplayObject from "./DisplayObject";
class Image extends DisplayObject {
  createElement() {
    this.positioner = this.element = document.createElement('img');
  }
  get source() {
    return this.element.src;
  }
  set source(value) {
    let oldValue = this.element.src;
    if (value != oldValue) {
      this.element.src = value;
      this.dispatchEvent("sourceChanged");
    }
  }
}
module.exports = Image;
