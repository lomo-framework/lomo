/**
 * Created by vincent on 17/3/11.
 */
import DisplayObject from './DisplayObject';
import hoisting from '../utils/hoisting';
export default class Input extends DisplayObject{
  constructor(props){
    super('input', props);
    hoisting(this, this.element, [['text', 'value']]);
  }
}
