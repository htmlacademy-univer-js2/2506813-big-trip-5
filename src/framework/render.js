import AbstractView from './view/abstract-view.js';

/** @enum {string} Enumeration of possible render positions */
const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend',
};

/**
 * Function to create an element from a template
 * @param {string} template Markup as a string
 * @returns {HTMLElement} Created element
 */
function createElement(template) {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstElementChild;
}

/**
 * Function to render a component
 * @param {AbstractView} component Component to be rendered
 * @param {HTMLElement} container Element in which the component will be rendered
 * @param {string} place Position of the component relative to the container. Default is `beforeend`
 */
function render(component, container, place = RenderPosition.BEFOREEND) {
  if (!(component instanceof AbstractView)) {
    throw new Error('Can render only components');
  }

  if (container === null) {
    throw new Error('Container element doesn\'t exist');
  }

  container.insertAdjacentElement(place, component.element);
}

/**
 * Function to replace one component with another
 * @param {AbstractView} newComponent Component to show
 * @param {AbstractView} oldComponent Component to hide
 */
function replace(newComponent, oldComponent) {
  if (!(newComponent instanceof AbstractView && oldComponent instanceof AbstractView)) {
    throw new Error('Can replace only components');
  }

  const newElement = newComponent.element;
  const oldElement = oldComponent.element;

  const parent = oldElement.parentElement;

  if (parent === null) {
    throw new Error('Parent element doesn\'t exist');
  }

  parent.replaceChild(newElement, oldElement);
}

/**
 * Function to remove a component
 * @param {AbstractView} component Component to remove
 */
function remove(component) {
  if (component === null) {
    return;
  }

  if (!(component instanceof AbstractView)) {
    throw new Error('Can remove only components');
  }

  component.element.remove();
  component.removeElement();
}

export { RenderPosition, createElement, render, replace, remove };
