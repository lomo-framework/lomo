/**
 * canvas 元素
 */
import DisplayObject from "./DisplayObject";

class Canvas extends DisplayObject {
  createElement() {
    this.element = document.createElement('canvas');
  }

  get width() {
    return this.element.width;
  }

  set width(value) {
    if (this.element.width !== value) {
      this.element.width = value;
      this.dispatchEvent("widthChanged");
    }
  }

  get height() {
    return this.element.height;
  }

  set height(value) {
    if (this.element.height !== value) {
      this.element.height = value;
      this.dispatchEvent("heightChanged");
    }
  }
}
module.exports = Canvas;
