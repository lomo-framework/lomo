/**
 * 动画
 */
import createElement from './createElement';
import DisplayObject from './DisplayObject';
export default class Animation extends DisplayObject{
    _src;
    get src(){
        return this._src;
    }
    set src(value){
        this._src = value;
        this._element.src = value;
    }
    render(){
        return <canvas/>;// todo
    }
}