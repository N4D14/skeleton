import React from 'react';
import styled from 'styled-components';
import theme from 'utils/theme';

import { media } from 'utils/media';

const NavBarButtonItem = styled.div`
  width: calc(100% - 2em);

  font-size: 0.8em;
  padding: 1em;
  margin: 0;
  cursor: pointer;
  border-top: ${props => props.data ? `${theme.mediumGrey} solid 1px` : 'None'};

  font-family: ${theme.font};
  font-weight: 700;
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
  }
`;

export default NavBarButtonItem;
