declare module "lomo" {
  export interface DisplayObject {
    // constructor: Function;
    new (): DisplayObject;
    props: Map;
    contentElement: DisplayObject;
    element: DisplayObject;
    x: number;
    y: number;
    addElement: Function;
    createElement: Function;
  }

  export const DisplayObject: DisplayObject;
  export const Element: DisplayObject;
  export const Button: DisplayObject;
  export const Canvas: DisplayObject;
  export const Stage: DisplayObject;
  export const Image: DisplayObject;
  export const Input: DisplayObject;
  export const Text: DisplayObject;
  export const Video: DisplayObject;

  interface Timer {
    delay: number;
    repeatCount: number;
    immediatelyRunFirst: boolean;
    running: boolean;
    currentCount: number;
    start: Function;
    stop: Function;
  }

  export const Timer: Timer;
}
