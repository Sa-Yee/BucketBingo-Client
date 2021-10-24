import React from 'react';

const DeleteAccount = (): JSX.Element => {
	return (
		<div className='deleteaccount'>
			<div className='deleteaccount-container'>
				<div>
					회원 탈퇴 시, 고객님의 빙고 포함 모든 정보가 사라지며 <br />
					<strong>재가입 시에도 정보가 복귀되지 않습니다.</strong><br />
					탈퇴하시겠습니까?<br />
				</div>
				<div>
					<button>탈퇴하기</button>
				</div>
			</div>
		</div>
	);
};

export default DeleteAccount;