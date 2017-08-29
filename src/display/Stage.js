/**
 * Created by vincent on 17/3/11.
 */
import DisplayContainer from "./DisplayContainer";
export default class Stage extends DisplayContainer{
  get parent(){
    return this;
  }
  get stage(){
    return this;
  }
  _rootNode;
  get rootNode() {
    return this._root;
  }
  startup(rootNode) {
    if(this._rootNode != rootNode){
      if(this.element.parentNode == this._root){
        this._root && this._root.removeChild(this.element);
      }

      this._root = rootNode;

      this._root.appendChild(this.element);
      this.$onAdded();
    }
    return this;
  }
  shutdown() {
    if(this.stage) {
      this._root.removeChild(this.element);
      this.onRemoved();
    }
    return this;
  }

  ////////////////////////////////////////////////////////////////////////////////
  // override
  ////////////////////////////////////////////////////////////////////////////////

  $onAdded(){
    super.onAdded();
  }
  $onRemoved(){
    super.onRemoved();
  }

  removeFromContainer(){
    console.warn('移除 Stage 请使用 shutdown() 方法');
  }
  onAdded(){
    console.warn('添加 Stage 请使用 startup(rootNode) 方法');
  }
  onRemoved(){
    console.warn('移除 Stage 请使用 shutdown() 方法');
  }
}
