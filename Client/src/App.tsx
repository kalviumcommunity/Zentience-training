import React from 'react';
import { Route,Routes } from 'react-router-dom';
import ManageStudent from './component/Managestudent/ManageStudent';


function App() {
  return (
    <div>
      <ManageStudent/>
      <Routes>
          <Route element={<></>} />
          <Route element={<></>} />
          <Route element={<></>} />
      </Routes>
    </div>
  );
}

export default App;
