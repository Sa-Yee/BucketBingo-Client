import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Login from '../login/Login';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchive, faBuilding, faLayerGroup, faSignOutAlt, faTh, faUserCircle, faUsers } from '@fortawesome/free-solid-svg-icons';


const Sidebar = (): JSX.Element => {
	const [showLoginModal, setShowLoginModal] = useState(false);

  const togglePopUp = () => {
    setShowLoginModal(!showLoginModal);
  };

	return (
		<>
			<nav className='nav'>
				<div>
					<Link to='/home' className='nav-logo'>
						<FontAwesomeIcon icon={faLayerGroup} className='nav-icon' />
						<span>Bucket Bingo</span>
					</Link>

					<div className='nav-list'>
						<Link to='/mypage' className='nav-link active'>
							<FontAwesomeIcon icon={faUserCircle} className='nav-icon' />
							<span>마이페이지</span>
						</Link>

						<Link to='/makebingo' className='nav-link'>
							<FontAwesomeIcon icon={faTh} className='nav-icon' />
							<span>빙고만들기</span>
						</Link>

						<Link to='/watchbingo' className='nav-link'>
							<FontAwesomeIcon icon={faArchive} className='nav-icon' />
							<span>나의 빙고보기</span>
						</Link>

						<Link to='/ranking' className='nav-link'>
							<FontAwesomeIcon icon={faUsers} className='nav-icon' />
							<span>Community</span>
						</Link>

						<Link to='/aboutus' className='nav-link'>
							<FontAwesomeIcon icon={faBuilding} className='nav-icon' />
							<span>About Us</span>
						</Link>
					</div>
				</div>
				<div className='nav-link' onClick={togglePopUp}>
					<FontAwesomeIcon icon={faSignOutAlt} className='nav-icon' />
					<span>로그인</span>
				</div>
			</nav>
			{showLoginModal ? (
          <Login
						togglePopUp={togglePopUp}
          />
        ) : null}
		</>
	);
};

export default Sidebar;