import React from 'react';
import styled from 'styled-components';
import theme from 'utils/theme';

export const CloseButton = styled.button`
  margin: 0;
  padding: 0 1em 0 0;
  font-size: 1em;
  background-color: Transparent;
  background-repeat:no-repeat;
  cursor: pointer;
  outline: 0;
  color: rgba(74, 74, 74, 1);
  border: none;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  font-family: ${theme.font};
  font-weight: bold;
  text-align: left;

  &:hover {
    color: rgba(74, 74, 74, 1);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  width: 90%;
  padding: 2em 5%;
`;

const CloseIcon = styled.div`
  position: relative;
  font-size: 1em;
  width: 1em;
  height: 1em;
  cursor: pointer;

  &:before,&:after{
    content:'';
    position: absolute;
    top: 0;
    background-color: rgba(265, 105, 60, 1);
    width: 2px;
    height: 1em;
  }

  &:before {
    -webkit-transform:rotate(45deg);
    -moz-transform:rotate(45deg);
    transform:rotate(45deg);
  }
  &:after {
    -webkit-transform:rotate(-45deg);
    -moz-transform:rotate(-45deg);
    transform:rotate(-45deg);
  }
`;

const CloseNavMenu = ({children, onClick}) => {
  return (
    <Wrapper>
      <CloseButton onClick={onClick}>
        {React.Children.toArray(children)}
      </CloseButton>
      <CloseIcon onClick={onClick}/>
    </Wrapper>
  );
}

export default CloseNavMenu;
