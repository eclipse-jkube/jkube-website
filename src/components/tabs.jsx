import React, {useState} from 'react';
import PropTypes from 'prop-types';

import '../styles/components/tabs.scss';

const baseClass = 'eclipse-jkube-tabs';

export const TabContainer = ({children = []}) => {
  const tabs = Array.isArray(children) ? children : [children];
  const [activeTab, activateTab] = useState(tabs[0].props.id);
  return (
    <div className={baseClass}>
      <div className={`${baseClass}__tablist`} role='tablist'>
        {tabs.map((tab, idx) => {
          const selected = tab.props.id === activeTab;
          return (
            <button
              key={tab.props.id}
              id={`tab-${tab.props.id}`}
              className={`${baseClass}__tab ${selected ? `${baseClass}__tab--selected` : ''}`}
              onClick={() => activateTab(tab.props.id)}
              aria-selected={selected}
              aria-controls={`tabpanel-${tab.props.id}`}
              role='tab'
            >
              <span className={`${baseClass}__tab-title ${baseClass}__tab-title--lg`}>{tab.props.title}</span>
              <span className={`${baseClass}__tab-title ${baseClass}__tab-title--sm`}>{tab.props.titleCompact ?? tab.props.title}</span>
            </button>
          );
        })}
      </div>
      {tabs.map(tab => {
        const hidden = tab.props.id !== activeTab;
        const stateClass = hidden ? `${baseClass}__tabpanel--hidden` : `${baseClass}__tabpanel--active`;
        return (
          <div
            key={tab.props.id}
            id={`tabpanel-${tab.props.id}`}
            aria-labelledby={`tab-${tab.props.id}`}
            className={`${baseClass}__tabpanel ${stateClass}`}
            hidden={hidden}
            role='tabpanel'
          >
            {tab}
          </div>
        );
      })}
    </div>
  );
};

export const Tab =({children}) => {
  return (
    <div className={`${baseClass}__tabpanel-content`}>
      {children}
    </div>
  );
}

TabContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.oneOf([Tab])
    }),
    PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.oneOf([Tab])
    })),
    PropTypes.shape({
      props: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.oneOfType([
          PropTypes.string, PropTypes.node
        ]).isRequired,
        titleCompact: PropTypes.oneOfType([
          PropTypes.string, PropTypes.node
        ])
      })
    }),
    PropTypes.arrayOf(PropTypes.shape({
      props: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.oneOfType([
          PropTypes.string, PropTypes.node
        ]).isRequired,
        titleCompact: PropTypes.oneOfType([
          PropTypes.string, PropTypes.node
        ])
      })
    }))
  ]).isRequired
};

Tab.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.oneOfType([
    PropTypes.string, PropTypes.node
  ]).isRequired
};
