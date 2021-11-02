import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';

import Bingo from '../bingo/Bingo';
import Button from '../common/button/Button';

const BingoPost = (): JSX.Element => {
	const bingoState = useSelector((state: RootState) => state.bingo);
	const bingopostBackgroundEl = useRef(null);
	const [popup, setPopUp] = useState(false);
	const [selectOption, setSelectOption] = useState('달성도를 선택해주세요.');
	const [showMenu, setShowMenu] =useState(false);
	const copyLink = React.useRef<HTMLInputElement>(null);
	const score = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

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

	const handleClickScore = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		setSelectOption(e.target.innerText)
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