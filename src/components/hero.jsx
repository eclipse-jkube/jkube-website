import React from 'react';

import '../styles/components/hero.scss';

const baseClass = 'eclipse-jkube__hero';
export const Hero = ({children}) => {
  return (
    <div className={baseClass}>
      <div className={`${baseClass}-content`}>
        {children}
      </div>
    </div>
  );
};
