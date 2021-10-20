import React from 'react';
import {Link} from 'gatsby'
import logo from '../assets/EF_WHT-OR_png.png';
import jkubeLogo from '../assets/jkube-logo-horizontal-white.svg';
import PropTypes from 'prop-types';
import {resolveI18nPath} from "../i18n";

const cClass = 'eclipse-jkube__header';

const TM = () => (
  <span className={`${cClass}-trade-mark`}>&trade;</span>
);

const Header = ({lang}) => {
  const resolvePath = resolveI18nPath(lang);
  return (
    <header className={cClass}>
      <div className={`${cClass}-container`}>
        <Link to={resolvePath('/')} className={`${cClass}-logo`}>
          <div className={`${cClass}-logo-eclipse-image`}><img src={logo} alt='Eclipse Foundation' /></div>
          <div className={`${cClass}-logo-jkube`}>
            <img className={`${cClass}-logo-jkube-image`} src={jkubeLogo} alt='JKube' /><TM/>
          </div>
        </Link>
        <div className={`${cClass}-content`}>
          <ul>
            <li><Link to={resolvePath('/docs')}>Docs</Link></li>
            <li><Link to={resolvePath('/demos')}>Demos</Link></li>
            <li><Link to={resolvePath('/community')}>Community</Link></li>
            <li><Link to={resolvePath('/contributing')}>Contributing</Link></li>
            <li>
              <a
                className={`${cClass}-stars`}
                href='https://github.com/eclipse/jkube' title='eclipse/jkube'
                target='_blank' rel='noopener'
              >
                <img src='https://img.shields.io/github/stars/eclipse/jkube?style=social' alt='eclipse/jkube stargazers' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Header;
