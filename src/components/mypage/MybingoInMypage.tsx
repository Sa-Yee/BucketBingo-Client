import React from 'react';
import { useSelector } from 'react-redux';

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Bingo from '../bingo/Bingo';

const MybingoInMypage = (): JSX.Element => {
	const bingoState = useSelector((state:RootState) => state.bingo);

	const handleBtnLeft =() => {
		console.log('left')
	}

	const handleBtnRight =() => {
		console.log('right')
	}


	return (
		<div className='mybingoinmypage'>
			<FontAwesomeIcon icon={faChevronLeft} className='chevron mybingoinmypage-left'onClick={handleBtnLeft}/>
			<div className='mybingoinmypage-container'>
				<h1>2021</h1>
				<div className='mybingoinmypage-bingo-slider'>
					<div className='mybingoinmypage-bingo'>
						<Bingo MockBingo={bingoState}/>
					</div>
{/* 
					<div className='mybingoinmypage-bingo'>
						<Bingo MockBingo={MockBingo}/>
					</div>

					<div className='mybingoinmypage-bingo'>
						<Bingo MockBingo={MockBingo}/>
					</div> */}
				</div>
			</div>
			<FontAwesomeIcon icon={faChevronRight} className='chevron mybingoinmypage-right'onClick={handleBtnRight}/>
		</div>
	);
};

export default MybingoInMypage;