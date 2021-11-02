import React,{ useState, useRef } from 'react';
import { useSelector } from 'react-redux';
//useDispatch   const dispatch = useDispatch();

const RankingList = (): JSX.Element => {
  const rankingState = useSelector((state:RootState) => state.community);
  const rankingBackgroundEl = useRef(null);
  const [popup, setPopUp] = useState(false);

  interface person {
    userId:string;
    time:string;
  }

  const handleProfileModal = () => {
    setPopUp(!popup);
  };

	const rankingBackgroundClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (e.target === rankingBackgroundEl.current) {
			handleProfileModal();
		}
	};

  return (
    <div className='rankinglist'>
      <h1>랭킹보기</h1>
      <div className='rankinglist-container'>
        <div className='rankinglist-notice'>
          <span>Tip</span>
          <p>
            <strong>&nbsp;&nbsp;·&nbsp;&nbsp;</strong> 달성 기간을 기준으로 1위부터 10위까지 공개합니다.<br />
            <strong>&nbsp;&nbsp;·&nbsp;&nbsp;</strong> 닉네임을 클릭하면 프로필을 확인할 수 있습니다.<br />
          </p>
        </div>
        <div className='rankinglist-list'>
          {rankingState.map((person:Object, idx:number) => {
            return (
              <div key={idx}>
                <div className='ranking-number'>{idx + 1}</div>
                <div onClick={handleProfileModal}>{person.userId}</div>
                <div>{person.time}</div>
              </div>
            );
          })}
        </div>
      </div>
      {popup
				? <div className='ranking-modal'>
					<div
						className='ranking-modal-overlay'
						onClick={(e) => rankingBackgroundClick(e)}
						ref={rankingBackgroundEl}
					/>
					<div className='ranking-container'>
						<div className='ranking-box'>
							<article>
                <div>kimcoding</div>
                <div>7D 3H 20S</div>
                <div>빙고</div>
							</article>
							<div className='ranking-button-container'>
								<button onClick={handleProfileModal}>닫기</button>
							</div>
						</div>
					</div>
				</div>
				: null}
    </div>
  );
};

export default RankingList;