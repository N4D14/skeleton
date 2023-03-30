import styled from 'styled-components';
import theme from 'utils/theme';

import {media} from 'utils/media';

const Wrapper = styled.div`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding-top: 0;
  position: fixed;
  top: 0;
  z-index: 2000;

  width: 100%;
  height: 4em;

  background: ${theme.landingHeaderBackground};
  ${'' /* box-shadow: 0 10px 5px rgba(155, 155, 155, 0.4); */}


  ${media.phone`
    align-items: center;
    padding-top: 0;
  `};
`;

export default Wrapper;
