import React from 'react';
import {shallow} from 'enzyme'
import {Counter} from './Counter.js'
describe('Counter', function () {
  beforeEach(function(){
    this.counter = shallow(<Counter />);
  });

  it('is render correctly', function () {
    assert.equal(this.counter.length, 1 , 'to be 1')
  });
});