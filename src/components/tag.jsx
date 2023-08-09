import React, {useState} from 'react';
import PropTypes from 'prop-types';

import '../styles/components/tag.scss';

const baseClass = 'eclipse-jkube-tag';

export const Tag =({
  color,
  backgroundColor,
  children
}) => {
  const props = {
    className: baseClass
  };
  props.style = {};
  if (color) {
    props.style.color = color;
  }
  if (backgroundColor) {
    props.style.backgroundColor = backgroundColor;
  }
  return (
    <span {...props}>{children}</span>
  );
};
