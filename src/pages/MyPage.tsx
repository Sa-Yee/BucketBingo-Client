import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DeleteAccount from '../components/mypage/DeleteAccount';
import FAQ from '../components/mypage/FAQ';
import ModifyUserInfo from '../components/mypage/ModifyUserInfo';
import MybingoInMypage from '../components/mypage/MybingoInMypage';
import PersonalQnA from '../components/mypage/PersonalQnA';
import Sidebar from '../components/mypage/Sidebar';

const MyPage = (): JSX.Element => {
	return (
		<div style={{display:'flex',flexDirection:'row'}}>
			<Sidebar/>
			<Switch>
				<Route exact path='/mypage/'>
					<MybingoInMypage />
				</Route>
				<Route path='/mypage/modifyuserinfo'>
					<ModifyUserInfo />
				</Route>
				<Route path='/mypage/deleteaccout'>
					<DeleteAccount />
				</Route>
				<Route path='/mypage/personal'>
					<PersonalQnA />
				</Route>
				<Route path='/mypage/faq'>
					<FAQ />
				</Route>
			</Switch>
		</div>
	);
};

export default MyPage;