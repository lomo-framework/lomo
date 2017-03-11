/**
 * Created by vincent on 17/3/11.
 */
import DisplayObject from './DisplayObject';

export default function (element, RootClass) {
    let stage = new DisplayObject();
    stage._parent = stage;
    element.appendChild(stage.element);

    let rootInstance = new RootClass();
    stage.addChild(rootInstance);
}