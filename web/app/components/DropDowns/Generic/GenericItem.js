import React from 'react';
import styled from 'styled-components';
import theme from 'utils/theme';

import { media } from 'utils/media';

const borderRadius = (props) => {
  if (props.top && props.bottom){
    return '5px';
  } else if (props.top){
    return '5px 5px 0 0'
  } else if (props.bottom) {
    return '0 0 5px 5px'
  } else {
    return '0';
  }
};

const GenericItem = styled.div`
  width: calc(100% - 2em);

  font-size: 0.6em;
  padding: 0.5em 1em;
  margin: 0;
  cursor: pointer;
  ${'' /* border-top: ${props => props.border ? `${theme.mediumGrey} solid 1px` : 'None'}; */}
  overflow-wrap: break-word;
  word-wrap: break-word;

  -ms-word-break: break-all;
  /* This is the dangerous one in WebKit, as it breaks things wherever */
  word-break: break-all;
  /* Instead use this non-standard one: */
  word-break: break-word;

  font-family: ${theme.font};
  font-weight: ${props => props.selected ? '700' : 400};
  color: ${theme.filterMenuColor};

  &:hover {
    background: ${theme.offWhite};
    border-radius:  ${props => borderRadius(props)};
    z-index: 2010;
  }
`;

export default GenericItem;
