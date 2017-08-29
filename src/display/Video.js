/**
 * Created by vincent on 17/3/11.
 */
import DisplayObject from "./DisplayObject";
import hoisting from "../utils/hoisting";
export default class Video extends DisplayObject{
  constructor(props){
    super('video', props);

    hoisting(this, this.element, ['src', 'controls', 'autoplay', 'width', 'height', 'loop', 'muted', 'poster', 'preload']);
  }
}
