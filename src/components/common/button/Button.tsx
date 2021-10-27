import React from 'react';

const Button = ({...props}): JSX.Element => {
	const { content, onClickHandle, backgroundColor, color } = props;
  // backgroundColor: `#191A20` -> 형식
  // props 넘겨줄 때는 content={'확인'}
	//<Button content={'빙고 만들기'} onClickHandle={handleClikeShareLink} backgroundColor={'#004AB9'} color={'white'}/>

	return (
		<span
		className='components-button'
		style={{
			backgroundColor,
			color,
		}}
		onClick={onClickHandle}
	>
		{content}
	</span>
	);
};

export default Button;