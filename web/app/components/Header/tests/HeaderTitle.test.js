import React from 'react';
import { shallow } from 'enzyme';

import Image from 'components/Image';
import HeaderTitle from '../HeaderTitle';
import Logo from 'components/Headers/Logos/sf-logo-orange-eyes.svg';

describe('<HeaderTitle />', () => {

  it('should render an Image tag', () => {
    const renderedComponent = shallow(
      <HeaderTitle src={Logo} alt="Test"/>
    );
    expect(renderedComponent.find(Image).length).toBe(1);
  });
})
