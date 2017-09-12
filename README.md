# LOMO
用 OOP 的方式开发 HTML5

## Install 安装

`npm install lomo` or `yarn add lomo`

## Usage 使用方法

```js
  import {Application, Image, Label, Video} from "lomo";
  var app = new Application();
  app.start();

  var img1 = new Image();
  img1.source = "https://4.bp.blogspot.com/-QxIjKSiGWZU/Vi2iKa-D15I/AAAAAAAGqoo/D-0_NT3zkGo/s1600/%25E6%259D%25BE%25E6%259C%25AC%2B%25E6%25BD%25AE%25E9%2587%258C%2528Shiori%2BMatsumoto%2529-www.kaifineart.com-12.jpg";
  app.addElement(img1);

  var label1 = new Label();
  label1.style = {fontSize: '30px', color: 'red'};
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
