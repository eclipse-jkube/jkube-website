import React from 'react';
import PropTypes from 'prop-types';
import {Footer, Header} from './';

import '../styles/main.scss';

export const MainLayout = ({
  langKey,
  children,
}) => (
  <div className='eclipse-jkube'>
    <Header lang={langKey}/>
    <div className='eclipse-jkube__main'>
      {children}
    </div>
    <Footer lang={langKey}/>
  </div>
);


MainLayout.propTypes = {
  langKey: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
