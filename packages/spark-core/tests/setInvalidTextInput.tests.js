/* global document describe before it */
import setInvalidTextInput from '../utilities/validation/setInvalidTextInput';

const jsdom = require('jsdom');
const { expect } = require('chai');

const { JSDOM } = jsdom;
const dom = new JSDOM('<!DOCTYPE html><p>Hello world</p>');
global.document = dom.window.document;

describe('setInvalidTextInput tests', () => {
  let inputContainer;
  let input;
  let errorContainer;

  before(() => {
    inputContainer = document.createElement('div');
    errorContainer = document.createElement('span');
    errorContainer.classList.add('sprk-b-ErrorText');
    input = document.createElement('input');
    inputContainer.appendChild(input);
    inputContainer.appendChild(errorContainer);
  });

  it('should add the error class to the input element', () => {
    setInvalidTextInput(inputContainer, 'This is an error message.');
    expect(input.classList.contains('sprk-b-TextInput--error')).eql(true);
  });
  it('should add the correct aria classes to the input', () => {
    setInvalidTextInput(inputContainer, 'This is an error message.');
    expect(input.getAttribute('aria-invalid')).eql('true');
  });
  it('should set the errorContainer text', () => {
    const error = 'This is an error message';
    setInvalidTextInput(inputContainer, error);
    expect(errorContainer.textContent).eql(error);
  });
  it('should support overriding the error message', () => {
    const defaultError = 'This is an error message';
    const newError = 'This is my custom error.';
    inputContainer.setAttribute('data-sprk-input-invalid-content', newError);
    setInvalidTextInput(inputContainer, defaultError);
    expect(errorContainer.textContent).eql(newError);
  });
});
