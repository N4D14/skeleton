import React from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';

import Image from 'components/Image';

const FooterLogo = styled(Image)`
  display: block;
  max-width: 150px;
  height: auto;
  font-size: 1em;
  padding-left: 3em;
  color: rgba(203, 204, 208, 1);

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    /* IE10+ CSS styles go here */
    width: 150px;
  }

  ${media.tablet`
    padding-left: 1em;
  `};
  ${media.phone`
    padding-left: 0.4em;
  `};
`;

export default FooterLogo;
