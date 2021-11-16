const appendChild = (element, children) => {
  if (
    !children ||
    typeof children === 'function' ||
    typeof children === 'number'
  ) {
    return;
  }

  if (typeof children === 'string') {
    element.innerHTML = children;
    return;
  }

  if (Array.isArray(children)) {
    children.forEach(el => appendChild(element, el));
    return;
  }

  element.appendChild(children);
};

const appendProps = (element, props) => {
  if (!element || !props) {
    return;
  }

  for (const [key, value] of Object.entries(props)) {
    element[key] = value;
  }
};

export const createElement = (name, children, props) => {
  const element = document.createElement(name);
  appendChild(element, children);
  appendProps(element, props);
  return element;
};
