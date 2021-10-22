import React from 'react';

import logo from '../../../images/logo/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = (): JSX.Element => {
  return (
    <div className='header'>
      <nav>
        <div>
          <img src={logo} alt='logo' />
        </div>
        <div>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </nav>
    </div>
  );
};

export default Header;