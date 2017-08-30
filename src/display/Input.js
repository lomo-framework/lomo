/**
 * Created by vincent on 17/3/11.
 */
import DisplayObject from "./DisplayObject";
export default class Input extends DisplayObject{
  get nodeType(){
    return 'input';
  }
  get text(){
    return this.element.value;
  }
  set text(value){
    this.element.value = value;
  }
  render(props){
    let {text, ...others} = props;

    super.render(others);
    
    this.text = text;
  }
}
