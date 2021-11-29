import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Landing from './pages/Landing';
import MyPage from './pages/MyPage';
import MakeBingo from './pages/MakeBingo';
import Ranking from './pages/Ranking';
import WatchBingo from './pages/WatchBingo';
import Home from './pages/Home';
import Header from './components/common/header/Header';
import AboutUs from './pages/AboutUs';

import { userActions } from './features/user/action';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const url = new URL(window.location.href);
    const loginType = url.searchParams.get('login');
    const authorizationCode = url.searchParams.get('code');
    console.log(loginType, authorizationCode);
    
    if (loginType && authorizationCode) {
      dispatch(userActions.loginUser({ loginType, authorizationCode }));
    }
  }, []);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/mypage'>
          <MyPage />
        </Route>
        <Route path='/makebingo'>
          <MakeBingo />
        </Route>
        <Route path='/watchbingo'>
          <WatchBingo/>
        </Route>
        <Route path='/ranking'>
          <Ranking />
        </Route>
        <Route path='/aboutus'>
          <AboutUs />
        </Route>
      </Switch>
    </>
  );
}

export default App;