import DisplayObject from "./DisplayObject";

class Application extends DisplayObject {
  startup(container) {
    container = container || document.getElementsByTagName('body')[0];
    container.appendChild(this.element);

    this.dispatchEvent('startup');
  }
}
module.exports = Application;
