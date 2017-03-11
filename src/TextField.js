/**
 * Created by vincent on 17/3/11.
 */
import DisplayObject from './DisplayObject';
export default class TextField extends DisplayObject{
    get tagName(){
        return 'p';
    }
    _text;
    get text(){
        return this._text;
    }
    set text(value){
        this._text = value;
        this._element.textContent = value;
    }
}