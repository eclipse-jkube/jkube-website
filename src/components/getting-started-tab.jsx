import React from 'react';
import PropTypes from 'prop-types';
import {Tab, YouTube} from './';

import '../styles/components/getting-started-tab.scss';

const baseClass = 'eclipse-jkube-getting-started-tab';

export const GettingStartedTab = ({id, title, titleCompact, videoId, children}) => {
  return (
    <Tab id={id} title={title} titleCompact={titleCompact}>
      <div className={baseClass}>
        <div className={`${baseClass}__instructions`}>
          {children}
        </div>
        <YouTube videoId={videoId} />
      </div>
    </Tab>
  );
};

GettingStartedTab.propTypes = {
  videoId: PropTypes.string.isRequired,
}
