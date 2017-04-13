/**
 * Created by vincent on 17/3/11.
 */
import {createElement} from '../src/index';
import {DisplayContainer, Image, TextField, Button} from '../src/index';
import gsap, {TweenLite, Power2, TweenPlugin} from "gsap";
import TextPlugin from 'gsap/TextPlugin';
import TestSVG from './TestSVG';

console.log(gsap);
TweenPlugin.activate([TextPlugin]);
export default class TestMain extends DisplayContainer{
    constructor(){
        super();

        this.init();
    }
    init(){
        var ui2 = new DisplayContainer();
        this.addChild(ui2);

        var img1 = new Image();
        img1.src = 'https://3.bp.blogspot.com/-f7KZFUN5NNE/Vi2iJ1wBmtI/AAAAAAAGqow/tdtOUNLIyTc/s1600/%25E6%259D%25BE%25E6%259C%25AC%2B%25E6%25BD%25AE%25E9%2587%258C%2528Shiori%2BMatsumoto%2529-www.kaifineart.com-11.jpg';
        ui2.addChild(img1);

        var tf1 = new TextField();
        ui2.addChild(tf1);

        tf1.element.style.fontSize = '30px';
        tf1.element.classList.add('tf1_test');
        tf1.text = "这两个 WeakMap 都分别指向各自的私有数据。由于 WeakMap 的设计目的在于键名是对象的弱引用，其所对应的对象可能会被自动回收，只要不暴露 WeakMap ，私有数据就是安全的。如果想要更加保险一点，可以将WeakMap.prototype.get 和 WeakMap.prototype.set 存储起来再调用（动态地代替方法）。这样即使有恶意代码篡改了可以窥探到私有数据的方法，我们的代码也不会受到影响。但是，我们只保护我们的代码不受在其之后执行的代码的干扰，并不能防御先于我们代码执行的代码。";

        var img2 = new Image();
        img2.src = 'https://4.bp.blogspot.com/-QxIjKSiGWZU/Vi2iKa-D15I/AAAAAAAGqoo/D-0_NT3zkGo/s1600/%25E6%259D%25BE%25E6%259C%25AC%2B%25E6%25BD%25AE%25E9%2587%258C%2528Shiori%2BMatsumoto%2529-www.kaifineart.com-12.jpg';
        ui2.addChild(img2);

        var btn = new Button();
        btn.label = '测试按钮';
        this.addChild(btn);
        
        let svg = new TestSVG();
        this.addChild(svg);
        
        btn.on('click', (event)=>{
            console.log(123, event);
            // ui2.removeChildAt(-1);
            TweenLite.to(ui2.element, 2, {backgroundColor:"#"+Math.random().toString(16).substr(2, 6), width:"500px", ease:Power2.easeInOut});
            TweenLite.to(tf1.element, 1, {text:"This is the new text"});
        });
        
    }
}