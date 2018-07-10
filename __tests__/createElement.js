import createElement from '../lib/createElement.js';
import Button from '../lib/Button';

test('createElement', () => {
  const tree = createElement('div', {}, "createElement").element.outerHTML;
  expect(tree).toMatchSnapshot();
});
test('Button', () => {
  const tree = createElement(Button, {text: "Button"}).element.outerHTML;
  expect(tree).toMatchSnapshot();
});
