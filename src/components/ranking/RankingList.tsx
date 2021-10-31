import React from 'react';

const RankingList = (): JSX.Element => {
  const list = [
    ['kimcoding', '7D 3H 20S'],
    ['soyou', '10D 2H 18S'],
    ['canI', '11D 6H 10S'],
    ['seeyou', '18D 2H 20S'],
    ['skytothemoon', '18D 3H 21S'],
    ['thelove', '21D 9H 28S'],
    ['icandoit', '22D 7H 6S'],
    ['younyaho', '25D 1H 21S'],
    ['hellobingo', '40D 2H 1S'],
    ['notebook', '46D 19H 36S']
  ];

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
          {list.map((person, idx) => {
            return (
              <div key={idx}>
                <div className='ranking-number'>{idx + 1}</div>
                <div onClick={handleProfileModal}>{person[0]}</div>
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