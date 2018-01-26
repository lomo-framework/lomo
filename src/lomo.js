/**
 * Created by vincent on 17/3/11.
 */
import DisplayObject from "./DisplayObject";
import Stage from "./Stage";
import Canvas from "./Canvas";
import Image from "./Image";
import Input from "./Input";
import Label from "./Label";
import Button from "./Button";
import Video from "./Video";
import EventDispatcher from "./EventDispatcher";
import createElement from "./createElement";
import Timer from "./Timer";

module.exports = global.lomo = {
  // display
  DisplayObject,
  Stage,
  Canvas,
  Image,
  Input,
  Label,
  Button,
  Video,
  // event
  EventDispatcher,
  // utils
  createElement,
  Timer
};
