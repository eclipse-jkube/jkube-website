import React from 'react';
import PropTypes from 'prop-types';
import {Footer, Header} from './';

import '../styles/main.scss';

export const MainLayout = ({
  locale,
  children,
}) => (
  <div className='eclipse-jkube'>
    <Header locale={locale}/>
    <div className='eclipse-jkube__main'>
      {children}
    </div>
    <Footer locale={locale}/>
  </div>
);


MainLayout.propTypes = {
  locale: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
