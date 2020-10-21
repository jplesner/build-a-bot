/* eslint-disable no-param-reassign */
export default {
  // update: inserted: componentUpdated: unbind:
  // just export function for bind and update.
  bind: (element, binding) => {
    if (binding.arg !== 'position') return;

    // If we were using an object as value of directive params
    // we would loop binding.value
    // and use binding.value[key] on the right side.
    Object.keys(binding.modifiers).forEach((key) => {
      element.style[key] = '5px';
    });
    element.style.position = 'absolute';
  },
};
