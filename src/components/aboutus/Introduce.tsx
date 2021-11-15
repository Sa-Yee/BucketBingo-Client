import React from 'react';

import siyoon from '../../images/profile/yoon.jpg';
import soyou from '../../images/profile/soyou.png';

const Introduce = (): JSX.Element => {
  return (
    <div className='introduce'>
      <div className='introduce-member'>
        <img src={siyoon} alt='profile' />
        <div>
          <div>Front-end | 전 시 윤</div>
          <div><a href='https://github.com/cue28'>GitHub</a></div>
          <div><a href='https://siyoonjeon.com/'>Portfolio</a></div>
        </div>
      </div>
      <div className='introduce-member'>
        <img src={soyou} alt='profile' />
        <div>
          <div>Back-end | 유 소 연</div>
          <div><a href='https://github.com/loverduck'>GitHub</a></div>
          <div><a href='https://soyou.space/'>Blog</a></div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;