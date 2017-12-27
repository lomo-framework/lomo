
import createElement from 'createElement.js';
describe("parse", ()=>{
  it("createElement childNodes.length", ()=>{
    expect(createElement('div', {}, "Hello World").childNodes.length).toEqual(1);
  });
  it("createElement innerText", ()=>{
    expect(createElement('div', {}, "Hello World").innerText).toEqual("Hello World");
  });
});
