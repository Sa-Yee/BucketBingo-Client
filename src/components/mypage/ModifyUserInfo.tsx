import React, { useRef, useState } from 'react';
import { RootState } from '../../app/store';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../../features/user/action';

import profile from '../../images/profile/profile-img.jpg';
import loading from '../../images/etc/ball.gif';
import { useEffect } from 'react';

const ModifyUserInfo = (): JSX.Element => {
	const userState = useSelector((state: RootState) => state.user);
	const dispatch = useDispatch();
	
	const [logoLoading, setLogoLoading] = useState(false);
	const [modifyUserInfo, setModifyUserInfo] = useState({
		name: '',
		phone: '',
	});
	const logoImgInput: any = useRef(null);
	
	const onImgInputBtn = (e: any) => {
		e.preventDefault();
		logoImgInput?.current.click();
	};
	console.log(userState.loading);
	
	const onImgChange = async (e: any) => {
		setLogoLoading(!logoLoading);
		const formData = new FormData();
		formData.append('file', e.target.files[0]);
		// const response = await apiClient.post('',formData) 보내주기!
		console.log(formData);
		setLogoLoading(!logoLoading);
	};
	
	const handleInputValue = (key) => (e) => {
		setModifyUserInfo({ ...modifyUserInfo, [key]: e.target.value });
	};
	
	const handleModifyUserInfo = () => {
		const data = {
			id : userState.user.id,
			authorizationCode: userState.token,
			name : modifyUserInfo.name,
			phone : modifyUserInfo.phone,
		}
		dispatch(userActions.modifyUserInfo(data));
		window.location.reload();
	}
	
	useEffect(() => {
		dispatch(userActions.getUserInfo(userState.token));
	}, []);
	
	if(userState.loading) return <h1>loading</h1>
	
	return (
		<div className='modifyuserinfo'>
			<div className='modifyuserinfo-container'>
				<div className='modifyuserinfo-profile'>
					<img src={!logoLoading ? `${profile}` : `${loading}`} alt='profileimg' />
					<div className='modifyuserinfo-detaile'>
						<input ref={logoImgInput} type='file' className='imginput' accept='image/*' onChange={onImgChange}></input>
						<button onClick={onImgInputBtn}>프로필 사진 변경</button>
					</div>
				</div>
				<div className='modifyuserinfo-info'>

					<div className='modifyuserinfo-detaile'>
						<span>이메일</span>
						<input placeholder={userState.loading ? null : userState.user.email} disabled></input>

					</div>

					<div className='modifyuserinfo-detaile'>
						<span>닉네임</span>
						<input placeholder={userState.loading ? null : userState.user.name} onChange={handleInputValue('name')}></input>

					</div>

					<div className='modifyuserinfo-detaile'>
						<span>휴대폰 번호</span>
						<input placeholder={userState.loading ? null : userState.user.phone} onChange={handleInputValue('phone')}></input>

					</div>
				</div>
				<div className='modifyuserinfo-btn'>
					<button onClick={handleModifyUserInfo}>수정하기</button>
				</div>
			</div>
		</div>
	);
};

export default ModifyUserInfo;