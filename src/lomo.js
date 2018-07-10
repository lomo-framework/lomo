/**
 * Created by vincent on 17/3/11.
 */
import DisplayObject from "./DisplayObject";
import Element from "./Element";
import Stage from "./Stage";
import Canvas from "./Canvas";
import Image from "./Image";
import Input from "./Input";
import Text from "./Text";
import Button from "./Button";
import Video from "./Video";
import EventDispatcher from "./EventDispatcher";
import createElement from "./createElement";
import Timer from "./Timer";

module.exports = global.lomo = {
  // display
  DisplayObject,
  Element,
  Stage,
  Canvas,
  Image,
  Input,
  Text,
  Button,
  Video,
  // event
  EventDispatcher,
  // utils
  createElement,
  Timer
};
