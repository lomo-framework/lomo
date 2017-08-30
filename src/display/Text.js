/**
 * Created by vincent on 17/3/11.
 */
import DisplayObject from "./DisplayObject";
export default class Text extends DisplayObject{
  get nodeType(){
    return 'p';
  }
  get text(){
    return this.element.textContent;
  }
  set text(value){
    if(value !== void 0) {
      this.element.textContent = value;
    }
  }
  render(props){
    let {text, ...others} = props || {};

    super.render(others);

    this.text = text;
  }
}
