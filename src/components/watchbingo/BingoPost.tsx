import React from 'react';

import Bingo from '../bingo/Bingo';
import Button from '../common/button/Button';

const BingoPost = (): JSX.Element => {
  const MockBingo = [
		[
			['제주 한달 살기', 100],
			['운동 3개월 이상 등록하기', 100],
			['모던 자바스크립트 책 읽기', 100]
		],
		[
		 ['부모님과 맛있는거 먹기', 50],
		 ['비타민 구매하기', 70],
		 ['취직하기', 0]
		],
		[
			['이사가기', 100],
			['친구들한테 편지쓰기', 60],
			['C50 완강', 30]
		]
	];

	const handleShareLink = () => {

	};

	return (
    <div className='bingopost'>
      <Bingo MockBingo={MockBingo}/>
      <Button content={'링크 공유'} onClickHandle={handleShareLink} backgroundColor={'white'} color={'#004AB9'}/>
    </div>
	);
};

export default BingoPost;