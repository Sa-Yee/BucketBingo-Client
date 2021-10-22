import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import MyPage from './pages/MyPage';
import MakeBingo from './pages/MakeBingo';
import Ranking from './pages/Ranking';
import WatchBingo from './pages/WatchBingo';
import Home from './pages/Home';
import Header from './components/common/header/Header';

function App() {
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
      </Switch>
    </>
  );
}

export default App;