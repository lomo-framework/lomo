var DisplayObject = require("./DisplayObject");

class Stage extends DisplayObject {
  get parent() {
    return this;
  }
  get stage() {
    return this;
  }
  startup(container) {
    let parentNode = container || document.body;
    if(this.element.parentNode != parentNode){
      parentNode.appendChild(this.element);
      this.dispatchEvent('startup');
    }
  }
  shutdown() {
    let parentNode = this.element.parentNode;
    if(parentNode){
      parentNode.removeChild(this.element);
      this.dispatchEvent('shutdown');
    }
  }
}
module.exports = Stage;
