import React from 'react';
import Button from '../common/button/Button';

const BingoMaker = (): JSX.Element => {
  const nineBingo = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

  const handleClikeShareLink = () => {
    console.log('aa')   
  };

  return (
    <div className='bingo'>
      <div className='bingo-container'>
      {nineBingo.map((l, idx) => {
        return (
          <div className='bingo-row'>
            {l.map((ele, index) => {
              return (
                <div className='bingo-not-completed'>
                  <input placeholder='빙고를 채워주세요.'></input>
                </div>
              );
            })}
          </div>
        );
      })}
      </div>
      <Button content={'빙고 만들기'} onClickHandle={handleClikeShareLink} backgroundColor={'#004AB9'} color={'white'}/>
    </div>
  );
};

export default BingoMaker;