import React from 'react';
import { useSelector } from 'react-redux';
//useDispatch   const dispatch = useDispatch();

const RankingList = (): JSX.Element => {
  const rankingState = useSelector((state:RootState) => state.community);

  interface person {
    userId:string;
    time:string;
  }

  const handleProfileModal = () => {

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
    </div>
  );
};

export default RankingList;