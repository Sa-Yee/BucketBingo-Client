import React from 'react';
import Bingo from '../bingo/Bingo';

const MybingoInMypage = (): JSX.Element => {
	return (
		<div className='mybingoinmypage'>
			<div className='mybingoinmypage-container'>
				<h1>2021</h1>
				<div className='mybingoinmypage-bingo'>
					<Bingo/>
				</div>
			</div>
		</div>
	);
};

export default MybingoInMypage;