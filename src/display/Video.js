/**
 * Created by vincent on 17/3/11.
 */
import DisplayObject from "./DisplayObject";
export default class Video extends DisplayObject{
  static defaultProps = {
    width: 400,
    height: 400
  };
  get nodeType(){
    return 'video';
  }
  // src
  get src(){
    return this.getProperty('src');
  }
  set src(value){
    if(value !== void 0) {
      this.setProperty('src', value);
    }
  }
  // controls
  get controls(){
    return this.getProperty('controls');
  }
  set controls(value){
    if(value !== void 0) {
      this.setProperty('controls', value);
    }
  }
  // autoplay
  get autoplay(){
    return this.getProperty('autoplay');
  }
  set autoplay(value){
    if(value !== void 0) {
      this.setProperty('autoplay', value);
    }
  }
  // width
  get width(){
    return this.getProperty('width');
  }
  set width(value){
    if(typeof value == 'number') {
      this.setProperty('width', value);
    }
  }
  // height
  get height(){
    return this.getProperty('height');
  }
  set height(value){
    if(typeof value == 'number') {
      this.setProperty('height', value);
    }
  }
  // loop
  get loop(){
    return this.getProperty('loop');
  }
  set loop(value){
    if(value !== void 0) {
      this.setProperty('loop', value);
    }
  }
  // muted
  get muted(){
    return this.getProperty('muted');
  }
  set muted(value){
    if(value !== void 0) {
      this.setProperty('muted', value);
    }
  }
  // poster
  get poster(){
    return this.getProperty('poster');
  }
  set poster(value){
    if(value !== void 0) {
      this.setProperty('poster', value);
    }
  }
  // preload
  get preload(){
    return this.getProperty('preload');
  }
  set preload(value){
    if(value !== void 0) {
      this.setProperty('preload', value);
    }
  }

  render(props){
    let {src, controls, autoplay, width, height, loop, muted, poster, preload, ...others} = props;

    super.render(others);

    if(typeof src == 'string') {
      this.element.src = src;
    }
    this.element.controls = controls;
    this.element.autoplay = autoplay;
    this.element.width = width;
    this.element.height = height;
    this.element.loop = loop;
    this.element.muted = muted;
    if(poster)
      this.element.poster = poster;
    if(preload)
      this.element.preload = preload;
  }
}
