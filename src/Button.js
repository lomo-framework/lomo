/**
 * Created by vincent on 17/3/11.
 */
import DisplayObject from './DisplayObject';
export default class Button extends DisplayObject{
    _label;
    get label(){
        return this._label;
    }
    set label(value){
        this._label = value;
        this.element.querySelector('.button-text').textContent = value;
    }
    render(){
        return (
            <div className="button-test">
                <div className="button-text">Button</div>
                {this.elementChildren}
            </div>
        );
    }
}