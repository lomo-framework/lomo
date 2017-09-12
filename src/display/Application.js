import DisplayObject from "./DisplayObject";

export default class Application extends DisplayObject {
  start(container) {
    container = container || document.getElementsByTagName('body')[0];
    container.appendChild(this.element);

    this.dispatchEvent('initialized');
  }
}
