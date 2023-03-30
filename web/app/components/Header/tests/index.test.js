import React from 'react';
import { shallow } from 'enzyme';

import Header from '../index';
import Wrapper from '../Wrapper';

describe('<Header />', () => {
  it('should render a styled div', () => {
    const renderedComponent = shallow(<Header />);
    expect(renderedComponent.find(Wrapper).length).toEqual(1);
  });
});
