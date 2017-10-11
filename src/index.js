/**
 * Created by vincent on 17/3/11.
 */
import DisplayObject from "./display/DisplayObject";
import Application from "./display/Application";
import Canvas from "./display/Canvas";
import Shape from "./display/Shape";
import Image from "./display/Image";
import Input from "./display/Input";
import Label from "./display/Label";
import Button from "./display/Button";
import Video from "./display/Video";
import createElement from "./utils/createElement";

global.lomo = module.exports = {
  // display
  DisplayObject,
  Application,
  Canvas,
  Shape,
  Image,
  Input,
  Label,
  Button,
  Video,
  // utils
  createElement
};
