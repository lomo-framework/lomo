/**
 * Created by vincent on 17/3/11.
 */
import DisplayObject from "./DisplayObject";
export default class Text extends DisplayObject{
  get nodeType(){
    return 'p';
  }
  get text(){
    return this.getProperty('text');
  }
  set text(value){
    this.setProperty('text', value);
  }
  render(props){
    let {text, children, ...others} = props || {};

    super.render(others);

    this.element.textContent = text || children;
    // this.text = text;
  }
}
