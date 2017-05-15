/**
 * Created by vincent on 17/3/11.
 */
import createElement from './createElement';
import DisplayContainer from './DisplayContainer';
export default class Application extends DisplayContainer{
    root;
    startup(root) {
        if(!this.parent) {
            this.root = root;

            this._parent = this;
            this.root.appendChild(this.element);
            this.onAdded();
        }
    }
    shutdown() {
        if(this.parent) {
            rootInstance._parent = null;
            this.root.removeChild(rootInstance.element);
            rootInstance.onRemoved();
        }
    }
    removeFromContainer(){
        throw new Error('移除 Application 请使用 shutdown() 方法');
    }
}