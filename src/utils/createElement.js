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

    for (let key in props) {
      if(props.hasOwnProperty(key)) {
        element.setAttribute(key, props[key]);
      }
    }
    // 如果有 name 属性，就指定给 组件，父节点可以通过 getElementByName 查找
    if(props.hasOwnProperty('name')){
      component.name = props.name;
    }
  }else{
    component = new nodeType();
    for (let key in props) {
      if(props.hasOwnProperty(key)) {
        Object.assign(component, props[key]);
      }
    }
  }
  if(className){
    component.className = className;
  }
  if(style){
    component.setStyle(style);
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
