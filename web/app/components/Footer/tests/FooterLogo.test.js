import React from 'react';
import { shallow } from 'enzyme';

import Image from 'components/Image';
import FooterLogo from '../FooterLogo';
import Logo from 'components/Footers/Logos/sf-logo-symbol-updated-white.png';

describe('<FooterLogo />', () => {

  it('should render an Image tag', () => {
    const renderedComponent = shallow(
      <FooterLogo src={Logo} alt="Test"/>
    );
    expect(renderedComponent.find(Image).length).toBe(1);
  });
})
