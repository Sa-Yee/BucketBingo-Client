import React from 'react';

const Bingo = ({ ...props }): JSX.Element => {
  return (
    <div className='bingo'>
      {props.MockBingo.map((group: any, index:number) => {
        return (
          <div className='bingo-row' key={index}>
            {group.map((ele: any, idx:number) => {
              return (
                <div 
                  className={ele[1] === 100 ? 'bingo-completed' : 'bingo-not-completed'} 
                  key={idx}
                  onClick={props.onClick}>
                  <div className='bingo-name'>{ele[0]}</div>
                  <div className='progress-container'>
                    <div className='progress-div' style={{ width: '100px' }}>
                      <div className='progress' style={{ width: `${ele[1] / 100 * 100}px` }}>
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