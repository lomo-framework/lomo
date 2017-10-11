/**
 * Created by vincent on 17/3/11.
 */
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
const defaultNodeType = 'div';

export default function (type) {
  let element;
  type = type || defaultNodeType;
  let namespaceURI = namespaceURIMap[type];
  if(namespaceURI){
    element = document.createElementNS(namespaceURI, type);
  }else{
    element = document.createElement(type);
  }
  return element;
}
