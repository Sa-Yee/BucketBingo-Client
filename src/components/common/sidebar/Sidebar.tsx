import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Sidebar = (props: { setOpenSidebar: Function; }): JSX.Element => {

	const SideBarBackgroundEl = useRef(null);

	const handleCloseAuto = () => {
		props.setOpenSidebar(false);
	};

	const SideBarBackgroundClick = (e: React.MouseEvent<Element, MouseEvent>): void => {
		if (e.target === SideBarBackgroundEl.current) {
			props.setOpenSidebar(false);
		}
	};

	return (
		<>
			<div
				className='sidebar'
				onClick={(e) => SideBarBackgroundClick(e)}
				ref={SideBarBackgroundEl}
			>
				<div className='sidebar-container'>
					<div className='sidebar-main'>
						<ul className='sidebar-menutab-container'>
							<li onClick={handleCloseAuto}>
								<Link to='/mypage'><FontAwesomeIcon icon={faUserCircle} className='profile'/></Link>
							</li>
							<li onClick={handleCloseAuto}>
								<Link to='/mypage'>마이페이지</Link>
							</li>
							<li onClick={handleCloseAuto}>
								<Link to='/makebingo'>빙고 만들기</Link>
							</li>
							<li onClick={handleCloseAuto}>
								<Link to='/watchbingo'>나의 빙고보기</Link>
							</li>
							<li onClick={handleCloseAuto}>
								<Link to='/ranking'>Community</Link>
							</li>
							<li onClick={handleCloseAuto}>
								<Link to=''>About us</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Sidebar;