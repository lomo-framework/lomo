/**
 * Created by vincent on 17/3/11.
 */
export default function (element, RootClass) {
    let rootInstance = new RootClass();
    rootInstance._parent = rootInstance;
    element.appendChild(rootInstance.element);
    rootInstance.onAdded();
    return function () {
        element.removeChild(rootInstance.element);
        rootInstance._parent = null;
        rootInstance.onRemoved();
    };
}