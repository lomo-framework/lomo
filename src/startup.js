/**
 * Created by vincent on 17/3/11.
 */
import DisplayObject from './DisplayObject';

export default function (element, RootClass) {
    let rootInstance = new RootClass();
    rootInstance._parent = rootInstance;
    element.appendChild(rootInstance.element);
}