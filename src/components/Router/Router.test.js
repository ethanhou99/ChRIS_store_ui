import React from 'react';
import { shallow } from 'enzyme';
import Router from './Router';

describe('Router', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Router />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render div element', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('should render a Navbar component', () => {
    expect(wrapper.find('withStore(Navbar)')).toHaveLength(1);
  });

  it('should render a Switch coponent', () => {
    expect(wrapper.find('Switch')).toHaveLength(1);
  });

  it('should render 7 Routes', () => {
    expect(wrapper.find('Route')).toHaveLength(7);
  });

  it('every route should have a path prop and component prop', () => {
    const routes = wrapper.find('Route');
    routes.forEach((route) => {
      expect(route.prop('component')).toBeDefined();
    });
  });

  it('should render a Footer component', () => {
    expect(wrapper.find('Footer')).toHaveLength(1);
  });
});
