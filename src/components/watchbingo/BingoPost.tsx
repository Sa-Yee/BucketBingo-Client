import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';

import Bingo from '../bingo/Bingo';
import Button from '../common/button/Button';

const BingoPost = (): JSX.Element => {
	const bingoState = useSelector((state:RootState) => state.bingo);
	//dropbox
	const bingopostBackgroundEl = useRef(null);
	const [popup, setPopUp] = useState(false);
	const copyLink = React.useRef<HTMLInputElement>(null);

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

	};

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
							<article>
								<div>달성도</div>
								<div className='bingopost-check-container'>
									<div className='bingopost-div' style={{ width: '100px' }}>
										<div className='bingopost-check' style={{ width: '20px' }}>
										</div>
									</div>
								</div>
							</article>
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