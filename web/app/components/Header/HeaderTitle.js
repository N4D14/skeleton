import React from 'react';
import styled from 'styled-components';
import theme from 'utils/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { media } from 'utils/media';

import Image from 'components/Image';

const HeaderTitleWrapper = styled.div`
  display: block;
  max-width: 200px;
  height: auto;
  font-size: 2em;
  padding-left: 1em;
  color: ${theme.orange};

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    /* IE10+ CSS styles go here */
    width: 200px;
  }

  ${media.tablet`
    padding-left: 1em;
    max-width: 200px;
  `};
  ${media.phone`
    padding-left: 0.4em;
  `};
`;

const HeaderTitle = ({src, alt}) => {
  return (
    <HeaderTitleWrapper ><FontAwesomeIcon icon={src}/></HeaderTitleWrapper>
  );
};

export default HeaderTitle;
