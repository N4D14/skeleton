import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: -100%;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: white;
  border-top: solid 1px rgba(203, 204, 208, 1);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  -webkit-transition: ease 250ms;
  -moz-transition: ease 250ms;
  -ms-transition: ease 250ms;
  -o-transition: ease 250ms;
  transition: ease 250ms;

  -webkit-transform: ${props => props.open ? 'translate3d(100%,0,0)' : 'none'};
  -moz-transform: ${props => props.open ? 'translate3d(100%,0,0)' : 'none'};
  -ms-transform: ${props => props.open ? 'translate3d(100%,0,0)' : 'none'};
  -o-transform: ${props => props.open ? 'translate3d(100%,0,0)' : 'none'};
  transform: ${props => props.open ? 'translate3d(100%,0,0)' : 'none'};

  visibility: ${props => props.open ? 'visible' : 'hidden'};
`;

export default Wrapper;
