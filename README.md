# LOMO
用 OOP 的方式开发 HTML5

## Install 安装

`npm install lomo`

`yarn add lomo`

## Usage 使用方法

* .babelrc

```json
{
  "presets": [
    "es2015",
    "stage-0",
    "lomo"
  ]
}

```
* ES5

```html
<script type="text/javascript" src="path/to/lomo.js"></script>
```

```js
  var app = new lomo.Application();
  app.startup();

  var img1 = new lomo.Image();
  img1.source = "https://4.bp.blogspot.com/-QxIjKSiGWZU/Vi2iKa-D15I/AAAAAAAGqoo/D-0_NT3zkGo/s1600/%25E6%259D%25BE%25E6%259C%25AC%2B%25E6%25BD%25AE%25E9%2587%258C%2528Shiori%2BMatsumoto%2529-www.kaifineart.com-12.jpg";
  app.addElement(img1);

  var container = new lomo.DisplayObject();
  container.setStyle({backgroundColor: 0xffee99});
  app.addElement(container);

  var input1 = new lomo.Input();
  input1.setStyle({fontSize: '30px', color: 'red'});
  input1.text = "但是，";
  input1.name = 'input1';
  input1.props.set('value', '______________________423er32');
  console.log(input1.props.get('value'));
  container.addElement(input1);

  input1.addEventListener('textChanged', function (event) {
    console.log('input', event.target.text);
  });

  var label1 = new lomo.Label();
  label1.style = {fontSize: '30px', color: 'red'};
  label1.className = 'tf1_test';
  label1.text = "但是，我们只保护我们的代码不受在其之后执行的代码的干扰，并不能防御先于我们代码执行的代码。";
  label1.name = 'label1';
  container.addElement(label1);

  var video1 = new lomo.Video();
  video1.addEventListener('sourceChanged', function (event) {
    console.log('video1', event.target.source);
  });
  video1.source = 'http://www.w3school.com.cn/i/movie.ogg';
  video1.controls = false;
  video1.autoplay = false;
  video1.loop = true;
  video1.width = 600;
  video1.setAttribute('height', 600);
  video1.name = 'video1';
  container.addElement(video1);
```
* ES6

```js
  import {Application, Image, Label, Video} from "lomo";
  var app = new Application();
  app.startup();

  var img1 = new Image();
  img1.source = "https://4.bp.blogspot.com/-QxIjKSiGWZU/Vi2iKa-D15I/AAAAAAAGqoo/D-0_NT3zkGo/s1600/%25E6%259D%25BE%25E6%259C%25AC%2B%25E6%25BD%25AE%25E9%2587%258C%2528Shiori%2BMatsumoto%2529-www.kaifineart.com-12.jpg";
  app.addElement(img1);

  var label1 = new Label();
  label1.setStyle({fontSize: '30px', color: 'red'});
  label1.className = 'tf1_test';
  label1.text = "但是，我们只保护我们的代码不受在其之后执行的代码的干扰，并不能防御先于我们代码执行的代码。";
  app.addElement(label1);

  var video1 = new Video();
  video1.addEventListener('sourceChanged', function (event) {
    console.log('video1', event.target.source);
  });
  video1.source = 'http://www.w3school.com.cn/i/movie.ogg';
  video1.controls = false;
  video1.autoplay = true;
  video1.loop = true;
  video1.width = 600;
  app.addElement(video1);
```

# Event
```js
let event = {type:'myEvent', bubbles: true};
this.dispatchEvent(event);

event.stopsImmediatePropagation = true;
event.stopsPropagation = true;
```

# Shape
```js
import {Shape} from "lomo/lib/addons";
```
