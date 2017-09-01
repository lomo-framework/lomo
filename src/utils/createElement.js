/**
 * Created by vincent on 17/3/11.
 */
import eachChildren from "./eachChildren";
import DisplayContainer from "../display/DisplayContainer";
import Node from "../display/Node";
import Text from "../display/Text";
import Image from "../display/Image";
import Button from "../display/Button";
import Animation from "../display/Animation";
import Sprite from "../display/Sprite";
import Input from "../display/Input";
import Video from "../display/Video";
import Stage from "../display/Stage";

const DefaultDOMCreator = Node;

const DOMCreators = {
  text: Text,
  input: Input,
  image: Image,
  button: Button,
  animation: Animation,
  sprite: Sprite,
  video: Video,
  stage: Stage
};

export default function (nodeType, props, ...children) {
  let element;
  props = {...props, children: children.length>0?children:props.children};
  if(typeof nodeType == 'string'){
    let DOMCreator = DOMCreators[nodeType];
    if(DOMCreator){
      element = new DOMCreator(props);
    }else{
      element = new DefaultDOMCreator({...props, nodeType});
    }
  }else{
    element = new nodeType(props);
  }
  // eachChildren(children || props.children, (child)=>{
  //   if(typeof child == 'string'){
  //     var textNode = document.createTextNode(child);
  //     element.element.appendChild(textNode);
  //   }else if(element instanceof DisplayContainer){
  //     element.addChild(child);
  //   }else{
  //     console.warn(`只有容器才能添加子元素，${nodeType} 不是容器`);
  //   }
  // });
  return element;
}
