import React from 'react';
import { Route,Routes } from 'react-router-dom';
import LandingPage from './component/LandingPage/LandingPage';


function App() {
  return (
    <div>
      <Routes>
          <Route path='/'  element={<LandingPage />}/>
          <Route element={<></>} />
          <Route element={<></>} />
      </Routes>
    </div>
  );
}


export default App;
