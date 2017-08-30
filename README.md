# LOMO
用 OOP 的方式开发 HTML5

## Install 安装

`npm install lomo` or `yarn add lomo`

## Usage 使用方法

```js
import {Stage, Image, Text} from "lomo";
let stage = new Stage();
stage.addChild(<img class="image123" src="https://4.bp.blogspot.com/-QxIjKSiGWZU/Vi2iKa-D15I/AAAAAAAGqoo/D-0_NT3zkGo/s1600/%25E6%259D%25BE%25E6%259C%25AC%2B%25E6%25BD%25AE%25E9%2587%258C%2528Shiori%2BMatsumoto%2529-www.kaifineart.com-12.jpg"/>);
// create with new
var label = new Text();
label.setStyle({fontSize: '30px', color: 'red'});
label.setClassName('tf1_test');
label.label = "但是，我们只保护我们的代码不受在其之后执行的代码的干扰，并不能防御先于我们代码执行的代码。";
stage.addChild(label);
// create with jsx
stage.addChild(<text text="但是，我们只保护我们的代码不受在其之后执行的代码的干扰，并不能防御先于我们代码执行的代码。" style={{fontSize: '30px', color: 'red'}} className="tf1_test"/>);
// mount stage to document.body
stage.startup(document.body);

```
## .babelrc

```json
{
  "presets": [
    "lomo"
  ]
}
```
