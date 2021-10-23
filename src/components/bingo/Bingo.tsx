import React from 'react';

const Bingo = (): JSX.Element => {
	return (
		<div className='bingo'>
      <div className='bingo-row'>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </div>
      <div className='bingo-row'>
        <div>2</div>
        <div>2</div>
        <div>2</div>
      </div>
      <div className='bingo-row'>
        <div>3</div>
        <div>3</div>
        <div>3</div>
      </div>
		</div>
	);
};

export default Bingo;