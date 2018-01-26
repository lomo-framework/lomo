
import createElement from 'createElement.js';
describe("createElement", ()=>{
  it("childNodes.length", ()=>{
    console.log(createElement('div', {}, "Hello World"));
    expect(createElement('div', {}, "Hello World").element.childNodes.length).toEqual(1);
  });
  it("innerText", ()=>{
    expect(createElement('div', {}, "Hello World").element.innerHTML).toEqual("Hello World");
  });
});
