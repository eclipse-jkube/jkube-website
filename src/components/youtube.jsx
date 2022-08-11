import React from 'react';
import PropTypes from 'prop-types';

export const YouTube = ({
  videoId,
  start,
  className,
  width = 560,
  height = 315
}) => {
  let src = `https://www.youtube.com/embed/${videoId}`;
  if (start) {
    src += `?start=${start}`;
  }
  return (
    <div>
      <iframe
        src={src}
        className={`youtube-video ${className ?? ''}`} width={width} height={height} frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="allowfullscreen"
      />
    </div>
  );
};

YouTube.propTypes = {
  videoId: PropTypes.string.isRequired,
  start: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};
