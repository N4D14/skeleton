import React from 'react';
import styled from 'styled-components';
import theme from 'utils/theme';
import CheckToggle from 'components/BasicForm/CheckToggle';

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

const MultiSelectMenuItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex: 0 0 auto;
  min-height: 0;

  &:hover {
    background: ${theme.offWhite};
    border-radius:  ${props => borderRadius(props)};
    z-index: 2010;
  }
`;

const MultiSelectMenuItemLabel = styled.div`
  width: 95%;
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

`;

const MultiSelectMenuItem = ({selected, onClick, children, top, bottom}) => {
  return (
    <MultiSelectMenuItemWrapper top={top} bottom={bottom} onClick={onClick}>
      <MultiSelectMenuItemLabel selected={selected}>
        {React.Children.toArray(children)}
      </MultiSelectMenuItemLabel>
      <CheckToggle value={selected} toggle={onClick} onChange={(evt) => {}} width={'5%'} margin={'0 0.5em 0 0'}/>
    </MultiSelectMenuItemWrapper>
  );
};

export default MultiSelectMenuItem;
