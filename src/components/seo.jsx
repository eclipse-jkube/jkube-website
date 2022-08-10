import React from 'react';
import PropTypes from 'prop-types';

export const Seo = ({title, description}) =>
  <>
    <meta charSet="UTF-8" />
    <title>{title}</title>
    <meta name="description" content={description} />
  </>;

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
