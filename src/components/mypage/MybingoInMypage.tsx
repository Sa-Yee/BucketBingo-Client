import React from 'react';
import { useSelector } from 'react-redux';

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Bingo from '../bingo/Bingo';

const MybingoInMypage = (): JSX.Element => {
	const bingoState = useSelector((state: RootState) => state.bingo);

	const handleBtnLeft = () => {
		const preBtn = document.querySelector('.preBtn');
		preBtn.className = 'move';
		console.log('pre');
	};

	const handleBtnRight = () => {
		const nextBtn = document.querySelector('.mybingoinmypage-bingo-slider');
		console.log(nextBtn);
		nextBtn.className = 'move';
		console.log('next')
	};


	return (
		<div className='mybingoinmypage'>
			<span className='preBtn'>
				<FontAwesomeIcon icon={faChevronLeft} className='chevron mybingoinmypage-left' onClick={handleBtnLeft} />
			</span>
			<div className='mybingoinmypage-container'>
				<h1>2021</h1>
				<div className='mybingoinmypage-bingo-slider'>
					<div className='mybingoinmypage-bingo1'>
						11
						<Bingo MockBingo={bingoState} />
					</div>

					<div className='mybingoinmypage-bingo2 '>
						22
						<Bingo MockBingo={bingoState} />
					</div>

					<div className='mybingoinmypage-bingo3'>
						33
						<Bingo MockBingo={bingoState} />
					</div>
				</div>
			</div>
			<span className='nextBtn'>
				<FontAwesomeIcon icon={faChevronRight} className='chevron mybingoinmypage-right' onClick={handleBtnRight} />
			</span>
		</div>
	);
};

export default MybingoInMypage;