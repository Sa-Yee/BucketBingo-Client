import React from 'react';

const Bingo = ({ ...props }): JSX.Element => {
  return (
    <div className='bingo'>
      {props.MockBingo.map((group: any) => {
        return (
          <div className='bingo-row'>
            {group.map((ele: any) => {
              return (
                <div className={ele[1] === 100 ? 'bingo-completed' : 'bingo-not-completed'}>
                  <div className='bingo-name'>{ele[0]}</div>
                  <div className='progress-container'>
                    <div className='progress-div' style={{ width: '120px' }}>
                      <div className='progress' style={{ width: `${ele[1] / 100 * 120}px` }}>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
            }
          </div>
        );
      })}
    </div>
  );
};

export default Bingo;