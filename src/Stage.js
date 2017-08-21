/**
 * Created by vincent on 17/3/11.
 */
import DiaplayContainer from "./DiaplayContainer";
export default class Stage extends DiaplayContainer{
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
      this.onAdded();
    }
  }
  shutdown() {
    if(this.stage) {
      this._root.removeChild(this.element);
      this.onRemoved();
    }
  }
  removeFromContainer(){
    throw new Error('移除 Stage 请使用 shutdown() 方法');
  }

  static run(rootNode, StageClass){
    let stage = new StageClass();
    stage.startup(rootNode);
    return stage;
  }
}
