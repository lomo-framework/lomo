/**
 * Created by vincent on 17/3/11.
 */
import createElement from './createElement';
import DisplayObject from './DisplayObject';
export default class Image extends DisplayObject{
    _src;
    get src(){
        return this._src;
    }
    set src(value){
        this._src = value;
        this._element.src = value;
    }
    render(){
        return <img/>;
    }
}