import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from 'utils/media';

import { social, nav, filterForFooter } from './nav';
import Title from './Title';
import Footer from 'components/Footer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;

  background: Transparent;
`;

/**
 * Generic page (base template)
 * @param {string} title    Title string
 * @param {string} subtitle Subtitle string
 * @param {node} content  page content
 */
const Page = ({title, subtitle, image, content}) => {
  const navItems = filterForFooter(nav);
  return (
    <Wrapper>
      <Title title={title} subtitle={subtitle} image={image}/>
      {content}
    </Wrapper>
  );
}

Page.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  subtitle: PropTypes.string,
  content: PropTypes.node
}

export default Page;
