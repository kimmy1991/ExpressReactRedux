import { expect, assert } from 'chai';
import { sinon, spy } from 'sinon';
import { mount, render, shallow } from 'enzyme';


global.expect = expect;
global.assert = assert;
global.sinon = sinon;
global.spy = spy;

global.mount = mount;
global.render = render;
global.shallow = shallow;