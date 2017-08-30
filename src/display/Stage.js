/**
 * Created by vincent on 17/3/11.
 */
import DisplayContainer from "./DisplayContainer";
let hashCode = 0;
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
  /**
   * 启动 Stage
   * @param props
   */
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

  /**
   * 移除 Stage
   * @returns {Stage}
   */
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
  /**
   * 根节点添加 data-lomo 属性
   * @param props
   */
  render(props){
    super.render({...props, 'data-lomo': hashCode++});
  }

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
