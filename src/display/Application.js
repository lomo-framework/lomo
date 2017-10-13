import Component from "./Component";

class Application extends Component {
  start(container) {
    container = container || document.getElementsByTagName('body')[0];
    container.appendChild(this.element);

    this.dispatchEvent('initialized');
  }
}
module.exports = Application;
