import React from 'react';
import { useHistory } from 'react-router-dom';

const Landing = (): JSX.Element => {
	const history = useHistory();

	const handleClickToHome = () => {
		history.push('/home');
	};

	return (
		<div className='landing'>
			<div className='wave'></div>
			<div className='landing-logo'>
				<h1 onClick={handleClickToHome}>Bucket Bingo</h1>
				<h6 onClick={handleClickToHome}>Click Me !</h6>
			</div>
		</div>
	);
};

export default Landing;