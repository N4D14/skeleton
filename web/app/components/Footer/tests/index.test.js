import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../index';
import Wrapper from '../Wrapper';
import FooterLogo from '../FooterLogo';

import { FooterLinksWrapper } from '../index';

describe('<Footer />', () => {
  it('should render a Wrapper', () => {
    const renderedComponent = shallow(<Footer />);
    expect(renderedComponent.find(Wrapper).length).toEqual(1);
  });

  it('should render a FooterLogo', () => {
    const renderedComponent = shallow(<Footer />);
    expect(renderedComponent.find(FooterLogo).length).toEqual(1);
  });

  it('should render a FooterLinksWrapper', () => {
    const renderedComponent = shallow(<Footer />);
    expect(renderedComponent.find(FooterLinksWrapper).length).toEqual(1);
  });
});
