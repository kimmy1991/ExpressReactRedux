import React from 'react';
import {shallow} from 'enzyme'
import {Counter} from './Counter.js'
import sinon from 'sinon';

describe('Counter', function () {
  beforeEach(function () {
    this.sandbox = sinon.sandbox.create();
    this.testClick = this.sandbox.stub();
    this.props = {
      testClick: this.testClick
    };
    this.counter = shallow(<Counter {...this.props}/>);
  });

  it('is render correctly', function () {
    assert.equal(this.counter.length, 1, 'to be 1')
  });

  describe('button', function () {
    beforeEach(function () {
      this.button = this.counter.find('button');
    });
    it('is render correctly', function () {
      assert.equal(this.button.length, 1, 'to be 1')
    });
    it('is render correctly', function () {
      this.button.simulate('click');
      assert.equal(this.testClick.calledOnce, 1, 'to be 1')
    });
  });
});