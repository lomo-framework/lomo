import DisplayObject from "./DisplayObject";
export default class Image extends DisplayObject {

  createElement() {
    this.element = document.createElement('img');
    this.element.className = 'Image';
    //positioner.style.position = 'relative';

    this.positioner = this.element;
    return this.element;
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
