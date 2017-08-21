/**
 * Created by vincent on 17/3/11.
 */
import DisplayObject from './DisplayObject';
export default class Input extends DisplayObject{
  constructor(props){
    super('input', props);
  }
  get text(){
    return this._element.value;
  }
  set text(value){
    this._element.value = value;
  }
}
