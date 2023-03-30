import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'utils/theme';
import { media } from 'utils/media';

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5em 0 2em 0;
  margin-top: 4em;
  background: Transparent;

  ${media.tablet`
    padding: 3em 0;
  `};
  ${media.phone`
    flex-direction: column;
    padding: 2em 0 3em;
  `};
`;

const TitleBlurbWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: ${props => props.image ? '40%' : (props.long ? '80%': '60%')};

  ${media.phone`
    width: 95%;
  `};
`;

export const MainTitle = styled.div`
  line-height: 1em;
  font-size: 2em;
  color: ${theme.landingTitleText};
  font-family: ${theme.landingTitleFont};
  font-weight: 700;
  width: 100%;
  text-align: center;

  ${media.desktop`
    font-size: 1.8em;
    line-height: 1em;
  `};
  ${media.tablet`
    font-size: 1.5em;
    line-height: 1em;
  `};
  ${media.phone`
    font-size: 1.5em;
    line-height: 1.1em;
  `};
`;

export const SubTitle = styled.div`
  font-size: 1em;
  line-height: 1.6em;
  margin: 2em 0;
  color: ${theme.landingSubtitleText};
  font-family: ${theme.font};
  text-align: center;
  width: 60%;

  ${media.desktop`
    font-size: 1em;
    width: 80%;
  `};
  ${media.tablet`
    font-size: 0.9em;
    width: 80%;
  `};
  ${media.phone`
    font-size: 0.9em;
    width: 90%;
  `};
`;

const HeroImage = styled.img`
  width: 40%;

  ${media.phone`
    width: 95%;
  `};
`;

/**
 * Page Base Title
 * @param {string} title    Title string
 * @param {string} subtitle Subtitle string
**/
const Title = ({title, subtitle, image}) => {
  const hasImage = image !== null && image !== undefined;
  const imageContent = hasImage ? <HeroImage src={image} /> : null;
  const longTitle = title.split(' ').length > 6;
  return (
    <TitleWrapper>
      <TitleBlurbWrapper image={hasImage} long={longTitle}>
        <MainTitle>{title}</MainTitle>
        <SubTitle>{subtitle}</SubTitle>
      </TitleBlurbWrapper>
      {imageContent}
    </TitleWrapper>
  );
}

Title.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  subtitle: PropTypes.string,
  image: PropTypes.string
};

Title.defaultProps = {
  image: null
};

export default Title;
