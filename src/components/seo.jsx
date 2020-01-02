import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const Seo = ({lang, title, description}) => {
  return (
    <Helmet>
      <meta charSet="UTF-8" />
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

Seo.propTypes = {
  lang: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Seo;
