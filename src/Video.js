import DisplayObject from "./DisplayObject";

class Video extends DisplayObject {
  get width() {
    return this.element.width;
  }

  set width(value) {
    if (this.element.width != value) {
      this.element.width = value;
    }
  }

  get height() {
    return this.element.height;
  }

  set height(value) {
    if (this.element.height != value) {
      this.element.height = value;
    }
  }
  
  get source() {
    return this.element.src;
  }
  set source(value) {
    if (this.element.src != value) {
      this.element.src = value;
    }
  }
  get autoplay() {
    return this.element.autoplay;
  }
  set autoplay(value) {
    this.element.autoplay = value;
  }
  get controls() {
    return this.element.controls;
  }
  set controls(value) {
    this.element.controls = value;
  }
  get loop() {
    return this.element.loop;
  }
  set loop(value) {
    this.element.loop = value;
  }
  get preload() {
    return this.element.preload;
  }
  set preload(value) {
    this.element.preload = value;
  }
  get paused() {
    return this.element.paused;
  }
  set paused(value) {
    if (this.element.paused != value) {
      if(value){
        this.element.pause();
      }else{
        this.element.play();
      }
    }
  }

  createElement() {
    this.element = document.createElement('video');
  }
}
module.exports = Video;
