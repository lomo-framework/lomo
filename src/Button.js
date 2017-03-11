/**
 * Created by vincent on 17/3/11.
 */
import DisplayObject from './DisplayObject';
export default class Button extends DisplayObject{
    get tagName(){
        return 'button';
    }
    _label;
    get label(){
        return this._label;
    }
    set label(value){
        this._label = value;
        this._element.textContent = value;
    }
}