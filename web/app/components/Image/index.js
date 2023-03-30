/**
 * Renders an image, enforcing the usage of the alt="" tag
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Render an image from a file
 * @param {string} className   css style class
 * @param {image obj} src      image object loaded from file
 * @param {string} alt         alternate text
 */
const Image = ({className, src, alt, width, height, onClick}) => {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      onClick={onClick}/>
  );
}

// We require the use of src and alt,
// only enforced by react in dev mode
Image.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  width: PropTypes.string,
  height: PropTypes.string,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Image;
