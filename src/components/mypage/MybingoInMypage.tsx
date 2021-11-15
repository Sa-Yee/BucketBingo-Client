import React from 'react';

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Bingo from '../bingo/Bingo';

const MybingoInMypage = (): JSX.Element => {
	type User = {
		id:number;
		title:string;
		score:number;
	}
	type Bingo = {
		year:number;
		userId:number;
		bucketList:Array<User>
	}

	const bingoState:Bingo = {
    year: 2021,
    userId: 1,
    bucketList: [
      {
        id: 1,
        title: '제주 한달 살기',
        score: 100,
      },
      {
        id: 2,
        title: '운동 3개월 이상 등록하기',
        score: 100,
      },
      {
        id: 3,
        title: '모던 자바스크립트 책 읽기',
        score: 100,
      },
      {
        id: 4,
        title: '부모님과 맛있는거 먹기',
        score: 50,
      },
      {
        id: 5,
        title: '비타민 구매하기',
        score: 70,
      },
      {
        id: 6,
        title: '취직하기',
        score: 0,
      },
      {
        id: 7,
        title: '이사가기',
        score: 100,
      },
      {
        id: 8,
        title: '친구들한테 편지쓰기',
        score: 60,
      },
      {
        id: 9,
        title: 'C50 완강',
        score: 30,
      },
    ],
  }

	const handleClickPreSlider = ():void => {
		const firstSlider = document.querySelector('.first');
		const currentSlide = document.querySelector('.move');

		if (currentSlide) {
			currentSlide.classList.remove('move');
			const nextSlider = currentSlide.previousElementSibling;
			if (nextSlider) {
				nextSlider.classList.add('move');
			} else {
				firstSlider?.classList.add('move');
			}
		}
	};

	const handleClickNextSlider = () => {
		const firstSlider = document.querySelector('.first');
		const currentSlide = document.querySelector('.move');

		if (currentSlide) {
			currentSlide.classList.remove('move');
			const nextSlider = currentSlide.nextElementSibling;
			if (nextSlider) {
				nextSlider.classList.add('move');
			} else {
				firstSlider?.classList.add('move');
			}
		}
	};

	return (
		<div className='mybingoinmypage'>
			<span className='preBtn'>
				<FontAwesomeIcon icon={faChevronLeft} className='chevron mybingoinmypage-left' onClick={handleClickPreSlider} />
			</span>
			<div className='mybingoinmypage-container'>
				<div className='mybingoinmypage-bingo-slider'>
					<div className='first mybingoinmypage-bingo move'>
						<h1>2021</h1>
						<Bingo MockBingo={bingoState} />
					</div>

					<div className='mybingoinmypage-bingo'>
						<h1>2020</h1>
						<Bingo MockBingo={bingoState} />
					</div>

					<div className='mybingoinmypage-bingo'>
						<h1>2019</h1>
						<Bingo MockBingo={bingoState} />
					</div>
				</div>
			</div>
			<span className='nextBtn'>
				<FontAwesomeIcon icon={faChevronRight} className='chevron mybingoinmypage-right' onClick={handleClickNextSlider} />
			</span>
		</div>
	);
};

export default MybingoInMypage;