import React from 'react';
import styled from 'styled-components';
import theme from 'utils/theme';

import { media } from 'utils/media';

const NavBarExternalLinkItem = styled.a`
  width: calc(100% - 2em);

  font-size: 0.8em;
  padding: 1em;
  margin: 0;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  border-top: ${props => props.data ? `${theme.mediumGrey} solid 1px` : 'None'};

  font-family: ${theme.font};
  color: white;

  &:hover {
    background: ${theme.dashMenuSelectedBgSettings};
    border-radius: ${props => {
      if (props.top && props.bottom){
        return '5px';
      } else if (props.top) {
        return '5px 5px 0 0';
      } else if (props.bottom) {
        return '0 0 5px 5px';
      } else {
        return '0';
      }
    }};
    z-index: 2002;
  }

  &:active {
    background: ${theme.offWhite};
  }
`;

export default NavBarExternalLinkItem;
