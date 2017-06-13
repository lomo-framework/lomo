/**
 * Created by vincent on 17/3/11.
 */
import DisplayContainer from "./DisplayContainer";
export default class Application extends DisplayContainer{
    root;
    startup(root) {
        if(!this.parent) {
            this.root = root || this.root;

            this._parent = this;
            this.root.appendChild(this.element);
            this.onAdded();
        }
    }
    shutdown() {
        if(this.parent) {
            this._parent = null;
            this.root.removeChild(this.element);
            this.onRemoved();
        }
    }
    removeFromContainer(){
        throw new Error('移除 Application 请使用 shutdown() 方法');
    }
    
    static startup(root, ApplicationClass){
        let app = new ApplicationClass();
        app.startup(root);
        return app;
    }
}