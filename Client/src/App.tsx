import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Dasboard from './component/Dashboard/Dasboard';
import SimpleSidebar from './component/SideBar/LeftBar';
import LandingPage from './component/LandingPage/LandingPage';



function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Dasboard />} />

          <Route element={<></>} />
          <Route element={<></>} />

      </Routes>
    </div>
  );
}


export default App;
