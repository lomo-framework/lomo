import DisplayObject from './DisplayObject';

class Image extends DisplayObject {
  createElement() {
    this.element = document.createElement('img');
  }

  get width() {
    return this.element.width;
  }

  set width(value) {
    if (this.element.width !== value) {
      this.element.width = value;
    }
  }

  get height() {
    return this.element.height;
  }

  set height(value) {
    if (this.element.height !== value) {
      this.element.height = value;
    }
  }

  get source() {
    return this.element.src;
  }
  set source(value) {
    if (this.element.src !== value) {
      this.element.src = value;
    }
  }
}
module.exports = Image;
