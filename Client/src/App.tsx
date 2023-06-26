import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Dasboard from './component/Dashboard/Dasboard';
import LandingPage from './component/LandingPage/LandingPage';
import StudentLogin from './component/StudentLogin/StudentLogin';



function App() {
  return (
    <div>
      <Routes>

          <Route path="/" element={<LandingPage />} />

          <Route path='/student-login' element={<StudentLogin/>} />
          <Route path='/dasbord' element={<Dasboard/>} />

      </Routes>
    </div>
  );
}


export default App;
