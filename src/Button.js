/**
 * Created by vincent on 17/3/11.
 */
import createElement from './createElement';
import DisplayContainer from './DisplayContainer';
export default class Button extends DisplayContainer{
    _label;
    get label(){
        return this._label;
    }
    set label(value){
        this._label = value;
        this.element.textContent = value;
    }
    // render(){
    //     return (
    //         <div className="button-test">
    //             <div className="button-text">Button</div>
    //             {this.elementChildren}
    //         </div>
    //     );
    // }
    render(){
        return <button/>;
    }
}