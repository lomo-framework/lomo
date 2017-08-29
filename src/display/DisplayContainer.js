/**
 * Created by vincent on 17/3/11.
 */
import warning from "warning";
import DisplayObject from "./DisplayObject";
export default class DisplayContainer extends DisplayObject{
  _children;
  get children(){
    return this._children;
  }
  $create(){
    this._children = [];
    super.$create();
  }

  getChildIndex(child){
    return this.children.indexOf(child);
  }
  getChildAt(index){
    if(index <= -1){
      index = this.children.length + index;
    }
    if(index >= 0 && index <= this.children.length - 1) {
      return this.children[index];
    }
  }
  addChild(child){
    return this.addChildAt(child, -1);
  }
  addChildAt(child, index){
    if(index <= -1){
      index = this.children.length + index + 1;
    }
    if(index >= 0 || index <= this.children.length){
      if(index == this.children.length){
        this.element.appendChild(child.element);
      }else{
        this.element.insertBefore(child.element, this.element.childNodes[index]);
      }
      child._parent = this;
      this.children.splice(index, 0, child);
      child.onAdded();
      return child;
    }else{
      warning(false, `参数非法(index:${index})`);
    }
  }
  removeChild(child){
    let index = this.getChildIndex(child);
    if(index != -1)
      return this.removeChildAt(index);
  }
  removeChildAt(index){
    if(index <= -1){
      index = this.children.length + index;
    }
    if(index >= 0 && index <= this.children.length - 1){
      let child = this.children[index];
      this.element.removeChild(child.element);
      child._parent = null;
      this.children.splice(index, 1);
      child.onRemoved();
      return child;
    }else{
      warning(false, `参数非法(index:${index})`);
    }
  }
  removeChildren(startIndex=0, endIndex=-1){
    if(startIndex <= -1){
      startIndex = this.children.length + startIndex;
    }
    if(endIndex <= -1){
      endIndex = this.children.length + endIndex;
    }
    for (let i = startIndex; i <= endIndex; i++) {
      this.removeChildAt(i);
    }
  }
  dangerouslySetInnerHTML(innerHTML){
    let children = this.children.concat();
    this.children.length = 0;
    children.forEach((child)=>child.onRemoved());
    this.element.innerHTML = innerHTML;
  }
  contains(child){
    return child == this || child.parent == this || this.children.some((item)=>item instanceof Container && item.contains(child));
  }
}
