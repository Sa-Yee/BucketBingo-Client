import React from 'react';

const RankingList = (): JSX.Element => {
  const list = [
    ['kimcoding', '7D 3H 20S'],
    ['hello', '7D 3H 20S'],
    ['kimcoding', '7D 3H 20S'],
    ['kimcoding', '7D 3H 20S'],
    ['kimcoding', '7D 3H 20S'],
    ['kimcoding', '7D 3H 20S'],
    ['kimcoding', '7D 3H 20S'],
    ['kimcoding', '7D 3H 20S'],
    ['kimcoding', '7D 3H 20S'],
    ['kimcoding', '7D 3H 20S']
  ];

  return (
    <div className='rankinglist'>
      <h1>랭킹보기</h1>
      <div className='rankinglist-container'>
      <div className='rankinglist-notice'>
        <p>
          TIP !<br/>
          달성 기간을 기준으로 1위부터 10위까지 공개합니다.<br/>
          닉네임을 클릭하면 프로필을 확인할 수 있습니다.
        </p>
      </div>
      <div className='rankinglist-list'>
      {list.map((person, idx) => {
        return (
          <div>
            <div>{idx+1}</div>
            <div>{person[0]}</div>
            <div>{person[1]}</div>
          </div>
        );
      })}
      </div>
      </div>
    </div>
  );
};

export default RankingList;