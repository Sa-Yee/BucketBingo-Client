import React from 'react';
import profile from '../../images/profile/profile-img.jpg';

const ModifyUserInfo = (): JSX.Element => {
	return (
		<div className='modifyuserinfo'>
			<div className='modifyuserinfo-container'>
				<div className='modifyuserinfo-profile'>
					<img src={profile} alt='profileimg' />
				</div>
				<div className='modifyuserinfo-info'>
					<div className='modifyuserinfo-detaile'>
						<span>프로필 사진</span>
						<input></input>
						<button>파일찾기</button>
					</div>

					<div className='modifyuserinfo-detaile'>
						<span>이메일</span>
						<input></input>

					</div>

					<div className='modifyuserinfo-detaile'>
						<span>닉네임</span>
						<input></input>

					</div>

					<div className='modifyuserinfo-detaile'>
						<span>휴대폰 번호</span>
						<input></input>

					</div>

					<div className='modifyuserinfo-detaile'>
						<span>생년월일</span>
						<input></input>

					</div>
				</div>
				<div className='modifyuserinfo-btn'>
					<button>수정하기</button>
				</div>
			</div>
		</div>
	);
};

export default ModifyUserInfo;