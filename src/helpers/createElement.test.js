import {createElement} from './createElement';

describe('createElement', () => {
  it('creates an element with a text child', () => {
    const el = createElement('div', 'test');
    expect(el.innerHTML).toBe('test');
  });

  it('creates an element with an object child', () => {
    const child = createElement('div');
    const el = createElement('div', child);
    expect(el.childNodes[0].nodeName).toBe('DIV');
  });

  it('creates an element with a children list', () => {
    const el = createElement('div', [
      createElement('div'),
      createElement('div'),
    ]);
    expect(el.childNodes.length).toBe(2);
  });

  it('creates an element with an empty list', () => {
    const el = createElement('div', []);
    expect(el.childNodes.length).toBe(0);
  });

  it('creates an element with a CSS class attached to it', () => {
    const el = createElement('div', null, {className: 'test'});
    expect(el.classList.length).toBe(1);
    expect(el.className).toBe('test');
  });
});
