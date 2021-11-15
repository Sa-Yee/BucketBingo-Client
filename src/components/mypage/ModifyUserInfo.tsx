import React, { useRef,useState } from 'react';

import profile from '../../images/profile/profile-img.jpg';
import loading from '../../images/etc/ball.gif';

const ModifyUserInfo = (): JSX.Element => {
	const [logoLoading, setLogoLoading] = useState(false);
	const logoImgInput :any= useRef(null);

	const onImgInputBtn = (e:any) => {
		e.preventDefault();
		logoImgInput?.current.click();
	}

	const onImgChange = async(e:any) => {
		setLogoLoading(!logoLoading);
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
		// const response = await apiClient.post('',formData) 보내주기!
		console.log(formData)
		setLogoLoading(!logoLoading);
	}

	return (
		<div className='modifyuserinfo'>
			<div className='modifyuserinfo-container'>
				<div className='modifyuserinfo-profile'>
					<img src={!logoLoading ? `${profile}` : `${loading}`} alt='profileimg'/> 
					<div className='modifyuserinfo-detaile'>
						<input ref={logoImgInput} type='file' className='imginput' accept='image/*' onChange={onImgChange}></input>
						<button onClick={onImgInputBtn}>프로필 사진 변경</button>
					</div>
				</div>
				<div className='modifyuserinfo-info'>

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