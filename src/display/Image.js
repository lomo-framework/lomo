/**
 * Created by vincent on 17/3/11.
 */
import DisplayObject from "./DisplayObject";
import hoisting from "../utils/hoisting";
export default class Image extends DisplayObject{
  constructor(props){
    super('img', props);

    hoisting(this, this.element, ['src']);
  }
}
