import React, { useRef} from 'react';

import kakao from '../../../images/login/kakao.png';
import google from '../../../images/login/google.png';
import naver from '../../../images/login/naver.png'

const Login = ({...props}): JSX.Element => {
  const loginBackgroundEl = useRef(null);

	const loginBackgroundClick = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === loginBackgroundEl.current) {
      props.togglePopUp();
    }
  };

	const kakaoLoginHandler = () => {
    const client_id = process.env.REACT_APP_KAKAO_CLIENT_ID;
    const redirect_uri = 'http://localhost:3000/home?login=kakao';
    const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`;
    window.location.assign(kakaoLoginUrl);
  };

  const GoogleLoginHandler = () => {
    const client_id = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    const redirect_uri = 'http://localhost:3000/home?login=google';
    const response_type = 'code';
    const scope = 'https://www.googleapis.com/auth/userinfo.profile';
    const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}&access_type=offline`;
    window.location.assign(googleLoginUrl);
  };

  const NaverLoginHandler = () => {
    const client_id = process.env.REACT_APP_NAVER_CLIENT_ID;
    const redirect_uri = 'http://localhost:3000/home?login=naver';
    const state = process.env.NAVER_STATE;
    const NaverLoginUrl = `https://nid.naver.com/oauth2.0/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&state=${state}`;
    window.location.assign(NaverLoginUrl);
  };

	return (
		<div className='login'>
      <div
        className='login-modal-overlay'
        onClick={(e) => loginBackgroundClick(e)}
        ref={loginBackgroundEl}
      />
			<div className='login-container'>
				<h1>간편 로그인</h1>
				<div>
				<div className='login-oauth login-kakao'>
					<img src={kakao} alt='kakao' onClick={kakaoLoginHandler}/>
				</div>
				<div className='login-oauth login-naver'>
					<img src={google} alt='google' onClick={GoogleLoginHandler}/>
				</div>
				<div className='login-oauth login-google'>
					<img src={naver} alt='naver' onClick={NaverLoginHandler}/>
				</div>
				</div>
				<div className='signin-close' onClick={props.togglePopUp}>
            <span>&times;</span>
        </div>
			</div>
		</div>
	);
};

export default Login;