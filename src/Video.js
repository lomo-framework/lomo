/**
 * Created by vincent on 17/3/11.
 */
import DisplayObject from "./DisplayObject";
import hoisting from "./hoisting";
export default class Video extends DisplayObject{
  constructor(props){
    super('video', props);

    hoisting(this, this.element, ['src', 'controls', 'autoplay', 'width', 'height', 'loop', 'muted', 'poster', 'preload']);
  }
  // _src;
  // get src(){
  //   return this._src;
  // }
  // set src(value){
  //   this._src = value;
  //   this._element.src = value;
  // }
  //
  // get controls(){
  //   return this._element.controls;
  // }
  // set controls(value){
  //   this._element.controls = value;
  // }
  // get autoplay(){
  //   return this._element.autoplay;
  // }
  // set autoplay(value){
  //   this._element.autoplay = value;
  // }
}
