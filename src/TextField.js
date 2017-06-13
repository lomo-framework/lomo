/**
 * Created by vincent on 17/3/11.
 */
import createElement from './createElement';
import DisplayObject from './DisplayObject';
export default class TextField extends DisplayObject{
    _text;
    get text(){
        return this._text;
    }
    set text(value){
        this._text = value;
        this._element.textContent = value;
    }
    render(){
        return <p/>;
    }
}