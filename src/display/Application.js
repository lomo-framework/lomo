import DisplayObject from "./DisplayObject";

class Application extends DisplayObject {
  createElement() {
    super.createElement();
    this.className = "Button";
  }
  start(container) {
    container = container || document.getElementsByTagName('body')[0];
    container.appendChild(this.element);

    this.dispatchEvent('initialized');
  }
}
module.exports = Application;
