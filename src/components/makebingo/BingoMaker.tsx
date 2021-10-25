import React from 'react';

const BingoMaker = (): JSX.Element => {
  const nineBingo = [[0,0,0],[0,0,0],[0,0,0]];
  
  return (
    <div className='bingo'>
      {/* {nineBingo.map((l,idx)=>{
        return(

        );
      })} */}
      <div className='bingo-row'>
        <div className='bingo-not-completed'>
          <input></input>
        </div>
        <div className='bingo-not-completed'>
          <input></input>
        </div>
        <div className='bingo-not-completed'>
        <input></input>
        </div>
      </div>
      <div className='bingo-row'>
        <div className='bingo-not-completed'>
        <input></input>
        </div>
        <div className='bingo-not-completed'>
        <input></input>
        </div>
        <div className='bingo-not-completed'>
        <input></input>
        </div>
      </div>
      <div className='bingo-row'>
        <div className='bingo-not-completed'>
        <input></input>
        </div>
        <div className='bingo-not-completed'>
        <input></input>
        </div>
        <div className='bingo-not-completed'>
        <input></input>
        </div>
      </div>
    </div>
  );
};

export default BingoMaker;