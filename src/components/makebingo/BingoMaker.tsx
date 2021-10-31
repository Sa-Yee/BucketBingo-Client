import React, { useState } from 'react';
import Button from '../common/button/Button';

const BingoMaker = (): JSX.Element => {
  const [bingoInput, setBingoInput] = useState({
    '1' :'',
    '2' :'',
    '3' :'',
    '4' :'',
    '5' :'',
    '6' :'',
    '7' :'',
    '8' :'',
    '9' :'',
  });
  const nineBingo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

  const handleClickMakeBingo = () => {
    console.log('aa')   
  };

  const handleInputValue = (key:string) => (e:React.FormEvent<HTMLInputElement>):void => {
    setBingoInput({...bingoInput, [key]: e.currentTarget.value});
  }
console.log(bingoInput)
  return (
    <div className='bingo'>
      <div className='bingo-container'>
      {nineBingo.map((l, idx) => {
        return (
          <div className='bingo-row' key={idx}>
            {l.map((ele, index) => {
              return (
                <div className='bingo-not-completed' key={index}>
                  <input placeholder='빙고를 채워주세요.' onChange={handleInputValue(`${ele}`)}></input>
                </div>
              );
            })}
          </div>
        );
      })}
      </div>
      <Button content={'빙고 만들기'} onClickHandle={handleClickMakeBingo} backgroundColor={'#004AB9'} color={'white'}/>
    </div>
  );
};

export default BingoMaker;