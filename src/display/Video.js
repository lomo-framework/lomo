/**
 * Created by vincent on 17/3/11.
 */
import DisplayObject from "./DisplayObject";
export default class Video extends DisplayObject{
  get nodeType(){
    return 'video';
  }
  // src
  get src(){
    return this.element.src;
  }
  set src(value){
    if(value !== void 0) {
      this.element.src = value;
    }
  }
  // controls
  get controls(){
    return this.element.controls;
  }
  set controls(value){
    if(value !== void 0) {
      this.element.controls = true;
    }
  }
  // autoplay
  get autoplay(){
    return this.element.autoplay;
  }
  set autoplay(value){
    if(value !== void 0) {
      this.element.autoplay = value;
    }
  }
  // width
  get width(){
    return this.element.width;
  }
  set width(value){
    if(typeof value == 'number') {
      this.element.width = value;
    }
  }
  // height
  get height(){
    return this.element.height;
  }
  set height(value){
    if(typeof value == 'number') {
      this.element.height = value;
    }
  }
  // loop
  get loop(){
    return this.element.loop;
  }
  set loop(value){
    if(value !== void 0) {
      this.element.loop = value;
    }
  }
  // muted
  get muted(){
    return this.element.muted;
  }
  set muted(value){
    if(value !== void 0) {
      this.element.muted = value;
    }
  }
  // poster
  get poster(){
    return this.element.poster;
  }
  set poster(value){
    if(value !== void 0) {
      this.element.poster = value;
    }
  }
  // preload
  get preload(){
    return this.element.preload;
  }
  set preload(value){
    if(value !== void 0) {
      this.element.preload = value;
    }
  }

  render(props){
    let {src, controls, autoplay, width, height, loop, muted, poster, preload, ...others} = props;

    super.render(others);

    this.src = src;

    this.controls = controls;

    this.autoplay = autoplay;

    this.width = width;

    this.height = height;

    this.loop = loop;

    this.muted = muted;

    this.poster = poster;

    this.preload = preload;
  }
}
