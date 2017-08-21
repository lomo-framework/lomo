/**
 * Created by vincent on 17/3/11.
 */
import DisplayObject from './DisplayObject';
export default class Button extends DisplayObject{
  constructor(props){
    super('button', props);
  }
  _label;
  get label(){
    return this._label;
  }
  set label(value){
    this._label = value;
    this.element.textContent = value;
  }
}
