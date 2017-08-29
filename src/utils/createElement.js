/**
 * Created by vincent on 17/3/11.
 */
import eachChildren from "./eachChildren";
import DisplayContainer from "../display/DisplayContainer";
import Text from "../display/Text";
import Image from "../display/Image";
import Button from "../display/Button";
import Animation from "../display/Animation";
import Sprite from "../display/Sprite";
import Input from "../display/Input";
const DOMNamespaces = {
  html: 'http://www.w3.org/1999/xhtml',
  mathml: 'http://www.w3.org/1998/Math/MathML',
  svg: 'http://www.w3.org/2000/svg'
};

const namespaceURIMap = {
  // SVG
  circle: DOMNamespaces.svg,
  clipPath: DOMNamespaces.svg,
  defs: DOMNamespaces.svg,
  ellipse: DOMNamespaces.svg,
  g: DOMNamespaces.svg,
  image: DOMNamespaces.svg,
  line: DOMNamespaces.svg,
  linearGradient: DOMNamespaces.svg,
  mask: DOMNamespaces.svg,
  path: DOMNamespaces.svg,
  pattern: DOMNamespaces.svg,
  polygon: DOMNamespaces.svg,
  polyline: DOMNamespaces.svg,
  radialGradient: DOMNamespaces.svg,
  rect: DOMNamespaces.svg,
  stop: DOMNamespaces.svg,
  svg: DOMNamespaces.svg,
  text: DOMNamespaces.svg,
  tspan: DOMNamespaces.svg,
  // MATH
  math: DOMNamespaces.mathml
};
const DefaultDOMCreator = DisplayContainer;
const DOMCreators = {
  div: DisplayContainer,
  container: DisplayContainer,

  text: Text,

  input: Input,

  img: Image,

  button: Button,

  animation: Animation,

  sprite: Sprite,

  canvas: Sprite
};

export default function (type, props, ...children) {
  let element;
  if(typeof type == 'string'){
    let DOMCreator = DOMCreators[type];
    if(DOMCreator){
      element = new DOMCreator(props);
    }else{
      element = new DefaultDOMCreator(type, props);
    }
  }else{
    element = new type();
  }
  children = children || props.children;
  eachChildren(children, (child)=>element.addChild(child));
  return element;
}
