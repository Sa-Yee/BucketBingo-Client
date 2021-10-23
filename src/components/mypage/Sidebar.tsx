import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = (): JSX.Element => {
	return (
		<div className='sidebar-mypage'>
					<div className='sidebar-mypage-main'>
						<h1>마이페이지</h1>
						<ul>
							<li><h3>빙고보기</h3></li>
							<Link to='/mypage/'><li>나의 빙고 보기</li></Link>
						</ul>
						<ul>
							<li><h3>회원정보</h3></li>
							<Link to='/mypage/modifyuserinfo'><li>회원정보수정</li></Link>
							<Link to='/mypage/deleteaccout'><li>회원탈퇴</li></Link>
						</ul>
						<ul>
							<li><h3>고객센터</h3></li>
							<Link to='personal'><li>1:1 문의</li></Link>
							<Link to='faq'><li>FAQ</li></Link>
						</ul>
					</div>
		</div>
	);
};

export default Sidebar;