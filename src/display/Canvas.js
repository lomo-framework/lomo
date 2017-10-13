/**
 * canvas 元素
 */
import DisplayObject from "./DisplayObject";

class Canvas extends DisplayObject {
  createElement() {
    this.positioner = this.element = document.createElement('canvas');
  }

  get width() {
    return this.positioner.width;
  }

  set width(value) {
    if (this.positioner.width != value) {
      this.positioner.width = value;
      this.dispatchEvent("widthChanged");
    }
  }

  get height() {
    return this.positioner.height;
  }

  set height(value) {
    if (this.positioner.height != value) {
      this.positioner.height = value;
      this.dispatchEvent("heightChanged");
    }
  }
}
module.exports = Canvas;
