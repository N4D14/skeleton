import React from 'react';
import { render, shallow } from 'enzyme';

import NavBar from '../index';

const renderItemsComponent = (items) => render(
  <NavBar items={items}/>
);

const renderNullComponent = () => shallow(
  <NavBar items={false}/>
);

describe('<NavBar />', () => {
  it('should render null if no items are passed', () => {
    const renderedComponent = renderNullComponent();
    expect(renderedComponent.getElement()).toEqual(null);
  });

  it('should render the items', () => {
    const items = [
      {link: '/', text: 'Home'},
      {link: '/about', text: 'About'}
    ];
    const renderedComponent = renderItemsComponent(items);
    expect(renderedComponent.find(items)).toBeDefined();
  });
});
