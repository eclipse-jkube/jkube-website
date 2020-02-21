import React from 'react';
import {Link} from 'gatsby'
import logo from '../assets/EF_WHT-OR_png.png';
import PropTypes from 'prop-types';
import {resolveI18nPath} from "../i18n";

const Header = ({lang}) => {
  const resolvePath = resolveI18nPath(lang);
  return (
    <header className='eclipse-jkube__header'>
      <div className='eclipse-jkube__header-container'>
        <Link to={resolvePath('/')} className='eclipse-jkube__header-logo'>
          <div className='eclipse-jkube__header-logo-image'><img src={logo} alt='Eclipse Foundation' /></div>
          <div>JKube</div>
        </Link>
        <div className='eclipse-jkube__header-content'>
          <ul>
            <li><Link to={resolvePath('/demos')}>Demos</Link></li>
            <li><Link to={resolvePath('/docs')}>Docs</Link></li>
          </ul>
          <a
            className='eclipse-jkube__header-stars'
            href='https://github.com/eclipse/jkube' title='eclipse/jkube'
            target='_blank' rel='nofollow noopener noreferrer'
          >
            <img src='https://img.shields.io/github/stars/eclipse/jkube?style=social' alt='eclipse/jkube stargazers' />
          </a>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  lang: PropTypes.string.isRequired,
};

export default Header;
