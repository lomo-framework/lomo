/**
 * Created by vincent on 17/3/11.
 */
import createElement from './createElement';
import DisplayContainer from './DisplayContainer';
export default class Application extends DisplayContainer{
    startup(element) {
        this._parent = this;
        element.appendChild(this.element);
        this.onAdded();
    }
    shutdown() {
        if(this.parent) {
            rootInstance._parent = null;
            element.removeChild(rootInstance.element);
            rootInstance.onRemoved();
        }
    }
    removeFromContainer(){
        throw new Error('移除 Application 请使用 shutdown() 方法');
    }
}