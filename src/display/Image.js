import DisplayObject from "./DisplayObject";
class Image extends DisplayObject {
  createElement() {
    this.element = document.createElement('img');
    //positioner.style.position = 'relative';
    this.positioner = this.element;
    this.className = 'Image';
  }
  get source() {
    return this.element.src;
  }
  set source(value) {
    let oldValue = this.element.src;
    if (value != oldValue) {
      this.element.src = value;
      this.dispatchEvent( new Event("sourceChanged") );
    }
  }
}
module.exports = Image;
