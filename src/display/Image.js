/**
 * Created by vincent on 17/3/11.
 */
import DisplayObject from "./DisplayObject";
export default class Image extends DisplayObject{
  get nodeType(){
    return 'img';
  }
  get src(){
    return this.element.src;
  }
  set src(value){
    if(value !== void 0) {
      this.element.src = value;
    }
  }
  render(props){
    let {src, ...others} = props;

    super.render(others);

    this.src = src;
  }
}