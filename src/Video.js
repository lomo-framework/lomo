import DisplayObject from "./DisplayObject";

class Video extends DisplayObject {
  get width() {
    return this.element.width;
  }

  set width(value) {
    if (this.element.width != value) {
      this.element.width = value;
      this.dispatchEvent("widthChanged");
    }
  }

  get height() {
    return this.element.height;
  }

  set height(value) {
    if (this.element.height != value) {
      this.element.height = value;
      this.dispatchEvent("heightChanged");
    }
  }
  
  get source() {
    return this.element.src;
  }
  set source(value) {
    if (this.element.src != value) {
      this.element.src = value;
      this.dispatchEvent('sourceChanged');
    }
  }
  get autoplay() {
    return this.element.autoplay;
  }
  set autoplay(value) {
    this.element.autoplay = value;
    this.dispatchEvent('autoplayChanged');
  }
  get controls() {
    return this.element.controls;
  }
  set controls(value) {
    this.element.controls = value;
    this.dispatchEvent('controlsChanged');
  }
  get loop() {
    return this.element.loop;
  }
  set loop(value) {
    this.element.loop = value;
    this.dispatchEvent('loopChanged');
  }
  get preload() {
    return this.element.preload;
  }
  set preload(value) {
    this.element.preload = value;
    this.dispatchEvent('preloadChanged');
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
      this.dispatchEvent('pausedChanged');
    }
  }

  createElement() {
    this.element = document.createElement('video');
  }
}
module.exports = Video;