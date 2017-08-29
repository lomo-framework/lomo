/**
 * 动画
 */
import DisplayObject from './DisplayObject';
export default class Animation extends DisplayObject{
  constructor(){
    super('canvas');
  }
  _src = 'src123456';
  get src(){
    return this._src;
  }
  set src(value){
    this._src = value;
    this._element.src = value;
  }
}
