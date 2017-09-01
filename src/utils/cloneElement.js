/**
 * Created by vincent on 17/3/11.
 */
import createElement from "./createElement";
import assign from "object-assign";
import eachChildren from "./eachChildren";

export default function cloneElement(targetElement, props, ...children) {
  let childrenNeedClone;
  if(children.length > 0){
    childrenNeedClone = children;
  }else if(props && props.children){
    childrenNeedClone = props.children;
  }else{
    childrenNeedClone = targetElement.children || targetElement.props.children;
  }
  // children = children.length > 0?children: props?props.children || targetElement.props.children:targetElement.props.children;
  let clonedChildren = [];
  eachChildren(childrenNeedClone, (child)=>{
    if(typeof child == 'string'){
      clonedChildren.push(child);
    }else {
      clonedChildren.push(cloneElement(child));
    }
  });
  let newProps = assign({}, targetElement.props, props, {children: clonedChildren});
  let element = createElement(targetElement.constructor, newProps);
  // if(targetElement instanceof Text){
  console.log('cloneElement', element, newProps)
  // }
  return element;
}
