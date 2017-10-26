var DisplayObject = require("./DisplayObject");

class Application extends DisplayObject {
  get parent() {
    return this;
  }
  get root() {
    return this;
  }
  startup(container) {
    container = container || document.getElementsByTagName('body')[0];
    container.appendChild(this.element);

    this.dispatchEvent('startup');
  }
}
module.exports = Application;
