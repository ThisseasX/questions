/**
 * Clamp a number between a min and a max value.
 *
 * @param {number} min
 * @param {number} max
 * @param {number} number
 */
const clamp = (min, max, number) => Math.min(max, Math.max(min, number));

/**
 * Recursively add key/value pairs to a specified object.
 * Used to add attributes to HTMLElements.
 *
 * @example
 * const input = document.createElement('input');
 * const attributes = {
 *   id: 'input',
 *   style: {
 *     color: 'red',
 *   },
 * };
 *
 * set(input, attributes);
 *
 * // equivalent to:
 * input.id = 'input';
 * input.style.color = 'red';
 *
 * @param {Object} object
 * @param {Object} values
 */
const set = (object, values) => {
  Object.entries(values).forEach(([key, value]) => {
    if (typeof value === 'object') {
      set(object[key], value);
    } else {
      object[key] = value;
    }
  });
};

/**
 * Select a single HTMLElement from the DOM.
 *
 * @param {string} selector
 */
const $ = selector => document.querySelector(selector);

/**
 * Create an HTML element in a declarative way, using
 * the specified tag name, the attributes to set recursively,
 * and the child nodes to append to it.
 *
 * The children can be an array of Nodes or a single Node.
 *
 * @param {string} tag
 * @param {Object} attributes
 * @param {Node[] | Node} children
 */
const e = (tag, attributes, children) => {
  const element = document.createElement(tag);

  set(element, attributes);

  children &&
    (Array.isArray(children)
      ? children.forEach(child => element.appendChild(child))
      : element.appendChild(children));

  return element;
};

/**
 * Create a single text Node with the specified text.
 *
 * @param {string} text
 */
const t = text => document.createTextNode(text);

/**
 * Renders given Node element inside a target element.
 * 
 * If element is an HTML string, it is set as the innerHTML of the target.
 * 
 * @param {Node} element
 * @param {Node} target
 */
const render = (element, target) => {
  if (typeof element === 'string') {
    target.innerHTML = element;
  } else {
    target.innerHTML = '';
    target.appendChild(element);
  }
};
