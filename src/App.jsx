//import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import Video from './Pages/Video/Video.jsx';
import { useState } from 'react';
import Video2 from './Pages/Video/Video2.jsx';
import Video3 from './Pages/Video/Video3.jsx';
import Video4 from './Pages/Video/Video4.jsx';
import Video5 from './Pages/Video/Video5.jsx';
import Video6 from './Pages/Video/Video6.jsx';
import Video7 from './Pages/Video/Video7.jsx';
import Video8 from './Pages/Video/Video8.jsx';

const App = () => {
  const [sidebar, setSidebar] = useState(true); // Define state for sidebar

  return (
    <div>
      <Navbar setSidebar={setSidebar} /> {/* Correct prop name */}
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} />} />
        <Route path='/video/:categoryId/:videoId' element={<Video />} /> {/* Correct route path */}
        <Route path='/video2/:categoryId/:videoId' element={<Video2 />} /> 
        <Route path='/video3/:categoryId/:videoId' element={<Video3 />} />
        <Route path='/video4/:categoryId/:videoId' element={<Video4 />} />
        <Route path='/video5/:categoryId/:videoId' element={<Video5 />} /> 
        <Route path='/video6/:categoryId/:videoId' element={<Video6 />} /> 
        <Route path='/video7/:categoryId/:videoId' element={<Video7 />} /> 
        <Route path='/video8/:categoryId/:videoId' element={<Video8 />} />   
      </Routes>
    </div>
  );
};

export default App;
