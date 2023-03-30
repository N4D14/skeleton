import styled from 'styled-components';

import {media} from 'utils/media';

const Wrapper = styled.div`
  width: 100%;
  display: ${props => props.show === false ? 'none' : 'flex'};
  flex-direction: column;
  align-items: flex-start;
  /* background-color: #19171d; */
  background-color: Transparent;
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 2em 0 1em;

  width: 100%;


  ${media.phone`
    display: none;
  `};
`;

const Divider = styled.div`
  display: block;
	height: 1px;
  width: 90%;
  opacity: 0.5;
  background: linear-gradient(90deg, #000000 0%, #FFFFFF 54.33%, #000000 100%);

  ${media.phone`
    display: none;
  `};
`;

const CopyrightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  padding: 1em 0;

  ${media.phone`
    justify-content: center;
  `};
`;

export {
  Wrapper,
  TopWrapper,
  Divider,
  CopyrightWrapper
};
