import React from 'react';
import BingoMaker from '../components/makebingo/BingoMaker';
import BingoNotice from '../components/makebingo/BingoNotice';

const MakeBingo = (): JSX.Element => {
	return (
		<>
			<BingoNotice />
			<BingoMaker />
		</>
	);
};

export default MakeBingo;