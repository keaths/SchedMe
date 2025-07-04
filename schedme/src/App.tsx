import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from './Components/HomePage/HomePage';
import SpecificDay from './Components/SpecificDay/SpecificDay';
import Feed from './Components/Feed/Feed';
import Profile from './Components/Profile/Profile';
import MyGroups from './Components/MyGroups/MyGroups';
import UpcomingEvents from './Components/UpcomingEvents/UpcomingEvents';
import { Test } from './Components/Test';

function App() {
  return (
    <div className="App position-relative">
      <div className='d-flex align-items-center position-absolute bg-success w-100' style={{height:"35px"}}>hi</div>
      <div className='d-inline-flex w-100'>
        <div className='bg-info' style={{width:"10%", height:"100vh"}}></div>
        {/* <Profile/> */}
        <HomePage />
        {/* <Test/> */}
        {/* <MyGroups/> */}
        {/* <UpcomingEvents/> */}
        {/* <Feed/> */}
        {/* <SpecificDay/> */}
      </div>

    </div>
  );
}

export default App;
