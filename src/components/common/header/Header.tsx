import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../images/logo/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import Sidebar from '../sidebar/Sidebar';

const Header = (): JSX.Element => {

  const showNavbar = (toggleOpenId: string, toggleCloseId: string, navId: string, headerId: string) => {
    const toggleOpen = document.querySelector(`.${toggleOpenId}`);
    const toggleClose = document.querySelector(`.${toggleCloseId}`);
    const nav = document.querySelector(`.${navId}`);
    const headerpd = document.querySelector(`.${headerId}`);

    if (toggleOpen && toggleClose && nav && headerpd) {
      toggleOpen.addEventListener('click', () => {
        nav.classList.toggle('show');
        toggleOpen.classList.toggle('open');
        toggleClose.classList.toggle('close');
        headerpd.classList.toggle('header-pd');
      });
      toggleClose.addEventListener('click', () => {
        nav.classList.toggle('show');
        toggleOpen.classList.toggle('open');
        toggleClose.classList.toggle('close');
        headerpd.classList.toggle('header-pd');
      });
    }
  };

  useEffect(() => {
    showNavbar('header-hambuger', 'header-times', 'nav-bar', 'header');
  });

  return (
    <header className='header'>
      <div className='header-logo'>
        <Link to='/home'><img src={logo} alt='logo' /></Link>
      </div>
      <div className='header-toggle'>
        <FontAwesomeIcon icon={faBars} className='header-hambuger' />
        <FontAwesomeIcon icon={faTimes} className='header-times' />
      </div>

      <div className='sidebar nav-bar'>
        <Sidebar />
      </div>

    </header>
  );
};

export default Header;