/**
 * Created by vincent on 17/3/11.
 */
import DisplayObject from "./DisplayObject";
import Image from "./Image";
import Video from "./Video";
import Text from "./Text";
import DiaplayContainer from "./DiaplayContainer";
import Button from "./Button";
import Sprite from "./Sprite";
import Stage from "./Stage";
import Animation from "./Animation";
import Input from "./Input";
import createElement from "./createElement";

global.createElement = createElement;
module.exports = {
  Stage,
  Animation,
  DisplayObject,
  DiaplayContainer,
  Image,
  Video,
  Text,
  Input,
  Button,
  Sprite,
  createElement
};
