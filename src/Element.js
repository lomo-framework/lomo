import DisplayObject from './DisplayObject';

class Element extends DisplayObject {
  createElement() {
    this.element = document.createElement('div');
  }
}
module.exports = Element;
