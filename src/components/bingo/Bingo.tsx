import React from 'react';

const Bingo = ({ ...props }): JSX.Element => {

  return (
    <div className='bingo'>
      <div className='bingo-row'>
        <div className={props.MockBingo[1][1] === 100 ? 'bingo-completed' : 'bingo-not-completed'}>
          <div>{props.MockBingo[1][0]}</div>
          <div>
            <span className={props.MockBingo[1][1] >= 10 ? 'achieve' : 'not-achieve'}></span>
            <span className={props.MockBingo[1][1] >= 20 ? 'achieve' : 'not-achieve'}></span>
            <span className={props.MockBingo[1][1] >= 30 ? 'achieve' : 'not-achieve'}></span>
            <span className={props.MockBingo[1][1] >= 40 ? 'achieve' : 'not-achieve'}></span>
            <span className={props.MockBingo[1][1] >= 50 ? 'achieve' : 'not-achieve'}></span>
            <span className={props.MockBingo[1][1] >= 60 ? 'achieve' : 'not-achieve'}></span>
            <span className={props.MockBingo[1][1] >= 70 ? 'achieve' : 'not-achieve'}></span>
            <span className={props.MockBingo[1][1] >= 80 ? 'achieve' : 'not-achieve'}></span>
            <span className={props.MockBingo[1][1] >= 90 ? 'achieve' : 'not-achieve'}></span>
            <span className={props.MockBingo[1][1] >= 100 ? 'achieve' : 'not-achieve'}></span>
          </div>
        </div>
        <div className={props.MockBingo[2][1] === 100 ? 'bingo-completed' : 'bingo-not-completed'}>
          <div>{props.MockBingo[2][0]}</div>
            <div>
              <span className={props.MockBingo[2][1] >= 10 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[2][1] >= 20 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[2][1] >= 30 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[2][1] >= 40 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[2][1] >= 50 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[2][1] >= 60 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[2][1] >= 70 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[2][1] >= 80 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[2][1] >= 90 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[2][1] >= 100 ? 'achieve' : 'not-achieve'}></span>
            </div>
          </div>
        <div className={props.MockBingo[3][1] === 100 ? 'bingo-completed' : 'bingo-not-completed'}>
          <div>{props.MockBingo[3][0]}</div>
            <div>
              <span className={props.MockBingo[3][1] >= 10 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[3][1] >= 20 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[3][1] >= 30 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[3][1] >= 40 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[3][1] >= 50 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[3][1] >= 60 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[3][1] >= 70 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[3][1] >= 80 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[3][1] >= 90 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[3][1] >= 100 ? 'achieve' : 'not-achieve'}></span>
            </div>
          </div>
      </div>
      <div className='bingo-row'>
        <div className={props.MockBingo[4][1] === 100 ? 'bingo-completed' : 'bingo-not-completed'}>
          <div>{props.MockBingo[4][0]}</div>
            <div>
              <span className={props.MockBingo[4][1] >= 10 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[4][1] >= 20 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[4][1] >= 30 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[4][1] >= 40 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[4][1] >= 50 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[4][1] >= 60 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[4][1] >= 70 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[4][1] >= 80 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[4][1] >= 90 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[4][1] >= 100 ? 'achieve' : 'not-achieve'}></span>
            </div>
          </div>
        <div className={props.MockBingo[5][1] === 100 ? 'bingo-completed' : 'bingo-not-completed'}>
          <div>{props.MockBingo[5][0]}</div>
            <div>
              <span className={props.MockBingo[5][1] >= 10 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[5][1] >= 20 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[5][1] >= 30 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[5][1] >= 40 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[5][1] >= 50 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[5][1] >= 60 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[5][1] >= 70 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[5][1] >= 80 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[5][1] >= 90 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[5][1] >= 100 ? 'achieve' : 'not-achieve'}></span>
            </div>
          </div>
        <div className={props.MockBingo[6][1] === 100 ? 'bingo-completed' : 'bingo-not-completed'}>
          <div>{props.MockBingo[6][0]}</div>
            <div>
              <span className={props.MockBingo[6][1] >= 10 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[6][1] >= 20 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[6][1] >= 30 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[6][1] >= 40 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[6][1] >= 50 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[6][1] >= 60 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[6][1] >= 70 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[6][1] >= 80 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[6][1] >= 90 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[6][1] >= 100 ? 'achieve' : 'not-achieve'}></span>
            </div>
          </div>
      </div>
      <div className='bingo-row'>
        <div className={props.MockBingo[7][1] === 100 ? 'bingo-completed' : 'bingo-not-completed'}>
          <div>{props.MockBingo[7][0]}</div>
            <div>
              <span className={props.MockBingo[7][1] >= 10 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[7][1] >= 20 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[7][1] >= 30 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[7][1] >= 40 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[7][1] >= 50 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[7][1] >= 60 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[7][1] >= 70 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[7][1] >= 80 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[7][1] >= 90 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[7][1] >= 100 ? 'achieve' : 'not-achieve'}></span>
            </div>
          </div>
        <div className={props.MockBingo[8][1] === 100 ? 'bingo-completed' : 'bingo-not-completed'}>
          <div>{props.MockBingo[8][0]}</div>
            <div>
              <span className={props.MockBingo[8][1] >= 10 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[8][1] >= 20 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[8][1] >= 30 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[8][1] >= 40 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[8][1] >= 50 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[8][1] >= 60 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[8][1] >= 70 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[8][1] >= 80 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[8][1] >= 90 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[8][1] >= 100 ? 'achieve' : 'not-achieve'}></span>
            </div>
          </div>
        <div className={props.MockBingo[9][1] === 100 ? 'bingo-completed' : 'bingo-not-completed'}>
          <div>{props.MockBingo[9][0]}</div>
          <div>
              <span className={props.MockBingo[9][1] >= 10 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[9][1] >= 20 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[9][1] >= 30 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[9][1] >= 40 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[9][1] >= 50 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[9][1] >= 60 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[9][1] >= 70 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[9][1] >= 80 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[9][1] >= 90 ? 'achieve' : 'not-achieve'}></span>
              <span className={props.MockBingo[9][1] >= 100 ? 'achieve' : 'not-achieve'}></span>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Bingo;