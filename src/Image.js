import DisplayObject from "./DisplayObject";
class Image extends DisplayObject {
  createElement() {
    this.positioner = this.element = document.createElement('img');
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
