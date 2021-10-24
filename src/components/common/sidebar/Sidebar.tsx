import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchive, faLayerGroup, faSignOutAlt, faTh, faUserCircle, faUsers } from '@fortawesome/free-solid-svg-icons';

const Sidebar = (): JSX.Element => {
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
					</div>
				</div>
				<Link to='/home' className='nav-link'>
					<FontAwesomeIcon icon={faSignOutAlt} className='nav-icon' />
					<span>로그아웃</span>
				</Link>
			</nav>

		</>
	);
};

export default Sidebar;