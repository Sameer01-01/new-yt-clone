//import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Video from './Pages/Video/Video.jsx';
import { useState } from 'react';
import Video2 from './Pages/Video/video2.jsx';

const App = () => {
  const [sidebar, setSidebar] = useState(true); // Define state for sidebar

  return (
    <div>
      <Navbar setSidebar={setSidebar} /> {/* Correct prop name */}
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} />} />
        <Route path='/video/:categoryId/:videoId' element={<Video />} /> {/* Correct route path */}
        <Route path='/video2/:categoryId/:videoId' element={<Video2 />} /> 
      </Routes>
    </div>
  );
};

export default App;
