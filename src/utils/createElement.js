/**
 * Created by vincent on 17/3/11.
 */
import createDOMNode from "./createDOMNode";
import forEach from "./forEach";
import DisplayObject from "../display/DisplayObject";

export default function (nodeType, Props, ...children) {
  let element;
  let component;

  let {style, className, ...props} = Props || {};
  if(typeof nodeType == 'string'){
    element = createDOMNode(nodeType);
    component = new DisplayObject();
    component.positioner = component.element = element;

    for (let name in props) {
      if(props.hasOwnProperty(name)) {
        element.setAttribute(name, props[name]);
      }
    }
  }else{
    component = new nodeType();
    for (let name in props) {
      if(props.hasOwnProperty(name)) {
        Object.assign(component, props[name]);
      }
    }
  }
  if(className){
    component.className = className;
  }
  if(style){
    Object.assign(component, style);
  }

  forEach(children, (child)=>{
    if(typeof child == 'string'){
      var textNode = document.createTextNode(child);
      element.appendChild(textNode);
    }else if(child instanceof DisplayObject){
      component.addElement(child);
    }
  });
  return component;
}
