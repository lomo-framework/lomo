/**
 * Created by vincent on 17/3/11.
 */
import DisplayObject from "./lib/DisplayObject";
import Application from "./lib/Application";
import Canvas from "./lib/Canvas";
import Shape from "./lib/Shape";
import Image from "./lib/Image";
import Input from "./lib/Input";
import Label from "./lib/Label";
import Button from "./lib/Button";
import Video from "./lib/Video";
import createElement from "./lib/createElement";

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
