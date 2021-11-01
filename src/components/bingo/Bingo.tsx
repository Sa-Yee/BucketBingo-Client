import React from 'react';

const Bingo = ({ ...props }): JSX.Element => {
  return (
    <div className='bingo'>
      {props.MockBingo.bucketList.map((group: any, index: number) => {
        return (
          <div
            className={group.score === 100 ? 'bingo-row bingo-completed' : 'bingo-row bingo-not-completed'}
            key={index}
            onClick={props.onClick}
          >
            <div className='bingo-name'>{group.title}</div>
            <div className='progress-container'>
              <div className='progress-div' style={{ width: '100px' }}>
                <div className='progress' style={{ width: `${group.score / 100 * 100}px` }}>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Bingo;