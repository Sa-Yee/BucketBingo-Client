import { RootState } from '../../../app/store';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../../features/user/action';

import Login from '../login/Login';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchive, faBuilding, faLayerGroup, faSignOutAlt, faTh, faUserCircle, faUsers } from '@fortawesome/free-solid-svg-icons';


const Sidebar = (): JSX.Element => {
	const dispatch = useDispatch();
	const userState = useSelector((state: RootState) => state.user);
	const [showLoginModal, setShowLoginModal] = useState(false);

  const togglePopUp = () => {
    setShowLoginModal(!showLoginModal);
  };

	const handleClickLogout = () => {
		dispatch(userActions.logoutUser())
	}

	return (
		<>
			<nav className='nav'>
				<div>
					<Link to='/home' className='nav-logo'>
						<FontAwesomeIcon icon={faLayerGroup} className='nav-icon' />
						<span>Bucket Bingo</span>
					</Link>

					<div className='nav-list'>
						{userState.token !== '' ? <Link to='/mypage' className='nav-link active'>
							<FontAwesomeIcon icon={faUserCircle} className='nav-icon' />
							<span>마이페이지</span>
						</Link> : null}

						<Link to='/makebingo' className='nav-link'>
							<FontAwesomeIcon icon={faTh} className='nav-icon' />
							<span>빙고만들기</span>
						</Link>

						{userState.token !== '' ? <Link to='/watchbingo' className='nav-link'>
							<FontAwesomeIcon icon={faArchive} className='nav-icon' />
							<span>나의 빙고보기</span>
						</Link> : null}

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
				{userState.token !== ''
				? <div className='nav-link' onClick={handleClickLogout}>
				<FontAwesomeIcon icon={faSignOutAlt} className='nav-icon' />
				<span>로그아웃</span>
			</div>
				: <div className='nav-link' onClick={togglePopUp}>
					<FontAwesomeIcon icon={faSignOutAlt} className='nav-icon' />
					<span>로그인</span>
				</div>}
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