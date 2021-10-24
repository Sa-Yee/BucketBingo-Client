import React from 'react';

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Bingo from '../bingo/Bingo';

const MybingoInMypage = (): JSX.Element => {
	const MockBingo = {
		1:['제주 한달 살기', 100],
		2:['운동 3개월 이상 등록하기', 100],
		3:['모던 자바스크립트 책 읽기', 100],
		4:['부모님과 맛있는거 먹기', 50],
		5:['비타민 구매하기', 70],
		6:['취직하기', 0],
		7:['이사가기', 100],
		8:['친구들한테 편지쓰기', 60],
		9:['C50 완강', 30]
	};

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
				<div className='mybingoinmypage-bingo'>
					<Bingo MockBingo={MockBingo}/>
				</div>
			</div>
			<FontAwesomeIcon icon={faChevronRight} className='chevron mybingoinmypage-right'onClick={handleBtnRight}/>
		</div>
	);
};

export default MybingoInMypage;