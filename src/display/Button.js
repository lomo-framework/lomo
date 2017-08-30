/**
 * Created by vincent on 17/3/11.
 */
import DisplayObject from "./DisplayObject";
export default class Button extends DisplayObject{
  get nodeType(){
    return 'button';
  }
  get label(){
    return this.element.textContent;
  }
  set label(value){
    if(value !== void 0) {
      this.element.textContent = value;
    }
  }
  render(props){
    let {label, ...others} = props;

    super.render(others);
    
    this.label = label;
  }
}
