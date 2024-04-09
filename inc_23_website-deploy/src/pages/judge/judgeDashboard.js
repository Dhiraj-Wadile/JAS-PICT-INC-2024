import React, { useContext, useEffect } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import Welcome from './components/Welcome';



function JudgeDashboard() {
  return (
    <div className='bg-faint_blue/10'>
      <div className="">
        <Routes>
          <Route path="/" exact element={<Welcome />} />

        </Routes>
      </div>
    </div>
  );
}

export default JudgeDashboard;
