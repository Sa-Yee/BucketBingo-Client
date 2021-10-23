import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../images/logo/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Sidebar from '../sidebar/Sidebar';

const Header = (): JSX.Element => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const showSidebar = ():void => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div className='header'>
      <nav>
        <div>
          <Link to='/home'><img src={logo} alt='logo' /></Link>
        </div>
        <div onClick={showSidebar}>
          <FontAwesomeIcon icon={faBars} />
          {openSidebar
            ?<Sidebar setOpenSidebar={setOpenSidebar} />
            :null 
          }
        </div>
      </nav>
    </div>
  );
};

export default Header;