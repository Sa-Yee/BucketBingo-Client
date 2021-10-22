import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DeleteAccount from '../components/mypage/DeleteAccount';
import FAQ from '../components/mypage/FAQ';
import ModifyUserInfo from '../components/mypage/ModifyUserInfo';
import MybingoInMypage from '../components/mypage/MybingoInMypage';
import PersonalQnA from '../components/mypage/PersonalQnA';

import Sidebar from '../components/mypage/Sidebar';

const MyPage = (): JSX.Element => {
	return (
		<>
			<Sidebar/>
			<Switch>
				<Route exact path='/'>
					<MybingoInMypage />
				</Route>
				<Route exact path='/'>
					<ModifyUserInfo />
				</Route>
				<Route exact path='/'>
					<DeleteAccount />
				</Route>
				<Route exact path='/'>
					<PersonalQnA />
				</Route>
				<Route exact path='/'>
					<FAQ />
				</Route>
			</Switch>
		</>
	);
};

export default MyPage;