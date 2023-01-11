import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';
import {resolveI18nPath} from '../i18n';
import jkubeLogo from '../assets/jkube-logo-horizontal-white.svg';

const ExternalLink = ({href, title}) => (
  <a href={href} target='_blank' rel='noopener'>{title}</a>
);

export const Footer = ({lang}) => {
  const resolvePath = resolveI18nPath(lang);
  return (
    <div className='eclipse-jkube-footer'>
      <div className='eclipse-jkube-footer__logo-jkube'>
        <Link to={resolvePath('/')}>
          <img className='eclipse-jkube-footer__logo-jkube-image' src={jkubeLogo} alt='JKube' />
        </Link>
        <span className='eclipse-jkube-footer__logo-jkube-tagline'>
          Cloud-Native Java Applications without a hassle
        </span>
      </div>
      <div className='eclipse-jkube-footer__links'>
        <ul className='eclipse-jkube-footer__links-list'>
          <li><Link to={resolvePath('/docs#getting-started')}>Get Started</Link></li>
          <li><Link to={resolvePath('/docs')}>Docs</Link></li>
          <li><Link to={resolvePath('/quickstarts')}>Quickstarts</Link></li>
          <li><Link to={resolvePath('/demos')}>Demos</Link></li>
        </ul>
        <ul className='eclipse-jkube-footer__links-list'>
          <li><Link to={resolvePath('/community')}>Community</Link></li>
          <li><Link to={resolvePath('/community#planning-and-meetings')}>Get Involved</Link></li>
          <li><Link to={resolvePath('/contributing')}>Contributing</Link></li>
        </ul>
        <ul className='eclipse-jkube-footer__links-list'>
          <li><ExternalLink href='https://www.eclipse.org' title='Eclipse Foundation'/></li>
          <li><ExternalLink href='https://www.eclipse.org/legal/privacy.php' title='Privacy Policy'/></li>
          <li><ExternalLink href='https://www.eclipse.org/legal/termsofuse.php' title='Terms of Use'/></li>
          <li><ExternalLink href='https://www.eclipse.org/legal/copyright.php' title='Copyright Agent'/></li>
          <li><ExternalLink href='https://www.eclipse.org/legal' title='Legal Resources'/></li>
        </ul>
      </div>
      <div className='eclipse-jkube-footer__copyright'>Copyright © Eclipse Foundation</div>
    </div>
  );
};

Footer.propTypes = {
  lang: PropTypes.string.isRequired,
};
