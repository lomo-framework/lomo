/**
 * Created by vincent on 17/3/11.
 */
import DisplayObject from './DisplayObject';
import hoisting from '../utils/hoisting';
export default class Text extends DisplayObject{
  constructor(props){
    super('p', props);

    hoisting(this, this.element, [['label', 'textContent']]);
  }
}
