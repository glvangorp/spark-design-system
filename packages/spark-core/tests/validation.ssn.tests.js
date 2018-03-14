/* global describe it*/
import {isValidSSN} from '../utilities/validation/isValidSSN';

const expect = require('chai').expect;

describe('isValidSSN tests', () => {
  it('should pass on a valid ssn', () => {
    expect(isValidSSN('123456789')).eql(true);
  });

  it('should fail on empty', () => {
    expect(isValidSSN('')).eql(false);
  });

  it('should fail on undefined', () => {
    expect(isValidSSN(undefined)).eql(false);
  });

  it('should fail on null', () => {
    expect(isValidSSN(null)).eql(false);
  });

  it('should fail on NaN', () => {
    expect(isValidSSN('Hello')).eql(false);
  });

  it('should fail on too short', () => {
    expect(isValidSSN('123')).eql(false);
  });

  it('should fail on too long', () => {
    expect(isValidSSN('12345678901234')).eql(false);
  });

  it('should fail on hexidecimal notation', () => {
    expect(isValidSSN('0xff')).eql(false);
  });

  it('should fail on scientific notation', () => {
    expect(isValidSSN('1.23e10')).eql(false);
  });
});

