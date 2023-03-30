import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media} from 'utils/media';

import SocialMediaLink from './SocialMediaLink';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0;

  ${media.phone`
    display: none;
  `};
`;

/**
 * SocialMediaBar component
 * @param {array} items each social media item has a link and icon name
 */
const SocialMediaBar = ({items, light}) => {
  if (items && items.length > 0) {
    const content = items.map((item, index) => {
        return (
          <SocialMediaLink
            key={`item-${index}`}
            to={item.link}
            icon={item.iconClass}
            light={light}/>
        );
    });
    return (
      <Wrapper>
        {content}
      </Wrapper>
    );
  }
  return null;
}

SocialMediaBar.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
};

export default SocialMediaBar;
