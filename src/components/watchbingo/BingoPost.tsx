import React, { useState, useRef } from 'react';

import Bingo from '../bingo/Bingo';
import Button from '../common/button/Button';

const BingoPost = (): JSX.Element => {
	const bingopostBackgroundEl = useRef(null);
	const [popup, setPopUp] = useState(false);
	const [selectOption, setSelectOption] = useState('달성도를 선택해주세요.');
	const [showMenu, setShowMenu] =useState(false);
	const copyLink = React.useRef<HTMLInputElement>(null);
	const score = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
	const bingoState = {
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

	const handleShareLink = () => {
		copyLink.current?.select();
		document.execCommand('copy');
	};

	const handlePopUpClick = () => {
		setPopUp(!popup);
	};

	const bingopostBackgroundClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (e.target === bingopostBackgroundEl.current) {
			handlePopUpClick();
		}
	};

	const handleClickSave = () => {
		//selectOption 수정
		setPopUp(!popup);
	};

	const handleShowMenu = () => {
		setShowMenu(!showMenu)
	}

	const handleClickScore = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
		const eventTarget = e.target as HTMLElement;
		setSelectOption(eventTarget.innerText)
		setShowMenu(!showMenu)
	}
	
	return (
		<div className='bingopost'>
			<Bingo MockBingo={bingoState} onClick={handlePopUpClick} />
			<input ref={copyLink} value={window.location.href} className='bingopost-input' readOnly />
			<Button content={'링크 공유'} onClickHandle={handleShareLink} backgroundColor={'white'} color={'#004AB9'} />
			{popup
				? <div className='bingopost-modal'>
					<div
						className='bingopost-modal-overlay'
						onClick={(e) => bingopostBackgroundClick(e)}
						ref={bingopostBackgroundEl}
					/>
					<div className='bingopost-container'>
						<div className='bingopost-box'>
							<form>
								<div className='dropdown'>
									<button type='button' className='dropdown-toggle' onClick={handleShowMenu}>
										{selectOption}
									</button>

									<ul className={!showMenu ? 'dropdown-menu' : 'dropdown-menu show'}>
										{score.map((ele, idx) => <li className='dropdown-item' key={idx}>
											<button type='button' className='dropdown-option' onClick={(e) => handleClickScore(e)}>
												{ele}
											</button>
										</li>)}
									</ul>
								</div>
							</form>
							<div className='bingopost-button-container'>
								<button onClick={handleClickSave}>수정</button>
								<button onClick={handlePopUpClick}>취소</button>
							</div>
						</div>
					</div>
				</div>
				: null}
		</div>
	);
};

export default BingoPost;