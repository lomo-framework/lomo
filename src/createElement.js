/**
 * Created by vincent on 17/3/11.
 */
import assign from 'object-assign';
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
module.exports = function (type, props, children, ...othersChildren) {
    if(typeof type == 'string'){
        let element;
        let namespaceURI = namespaceURIMap[type];
        if(namespaceURI){
            element = document.createElementNS(namespaceURI, type);
        }else{
            element = document.createElement(type);
        }
        if(props){
            let {style, className, ...others} = props;
            style && assign(element.style, style);
            className && (element.className = className);
            for (var name in others) {
                if(others.hasOwnProperty(name)) {
                    element.setAttribute(name, others[name]);
                }
            }
        }
        if(children){
            if(Array.isArray(children)){
                children = children.concat(othersChildren);
            }else{
                children = [children].concat(othersChildren);
            }
        }
        if(children){
            if(Array.isArray(children)){
                children.forEach((child)=>{
                    element.appendChild(child);
                });
            }else{
                element.appendChild(children);
            }
        }
        return element;
    }else{
        let instance = new type();
        return instance.element;
    }
};