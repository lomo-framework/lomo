/**
 * Created by vincent on 17/3/11.
 */
import DisplayObject from './DisplayObject';
export default class Image extends DisplayObject{
    get tagName(){
        return 'img';
    }
    _src;
    get src(){
        return this._src;
    }
    set src(value){
        this._src = value;
        this._element.src = value;
    }
}