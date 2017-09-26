/**
 * canvas 元素
 */
import DisplayObject from "./DisplayObject";

class Canvas extends DisplayObject {
  createElement() {
    this.positioner = this.element = document.createElement('canvas');
  }
}
module.exports = Canvas;
