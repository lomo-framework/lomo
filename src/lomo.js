/**
 * Created by vincent on 17/3/11.
 */
import Button from './Button';
import Canvas from './Canvas';
import createElement from './createElement';
import DisplayObject from './DisplayObject';
import Element from './Element';
import EventDispatcher from './EventDispatcher';
import Image from './Image';
import Input from './Input';
import Stage from './Stage';
import Text from './Text';
import Timer from './Timer';
import Video from './Video';

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
