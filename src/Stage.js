var Element = require('./Element');

class Stage extends Element {
  get parent() {
    return this;
  }
  get stage() {
    return this;
  }
  startup(container) {
    let parentNode = container || document.body;
    if (this.element.parentNode != parentNode) {
      parentNode.appendChild(this.element);
    }
  }
  shutdown() {
    let parentNode = this.element.parentNode;
    if (parentNode) {
      parentNode.removeChild(this.element);
    }
  }
}
module.exports = Stage;
