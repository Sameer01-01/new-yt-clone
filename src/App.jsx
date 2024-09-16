//import React, { useState } from 'react';
//import usestate
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
import Video9 from './Pages/Video/Video9.jsx';
import Video10 from './Pages/Video/Video10.jsx';
import Video11 from './Pages/Video/Video11.jsx';
import Video12 from './Pages/Video/Video12.jsx';
import Video13 from './Pages/Video/Video13.jsx';
import Video14 from './Pages/Video/Video14.jsx';
import Video15 from './Pages/Video/Video15.jsx';
import Video16 from './Pages/Video/Video16.jsx';

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
        <Route path='/video9/:categoryId/:videoId' element={<Video9 />} />
        <Route path='/video10/:categoryId/:videoId' element={<Video10 />} />   
        <Route path='/video11/:categoryId/:videoId' element={<Video11 />} />   
        <Route path='/video12/:categoryId/:videoId' element={<Video12 />} />   
        <Route path='/video13/:categoryId/:videoId' element={<Video13 />} />   
        <Route path='/video14/:categoryId/:videoId' element={<Video14 />} />   
        <Route path='/video15/:categoryId/:videoId' element={<Video15 />} />   
        <Route path='/video16/:categoryId/:videoId' element={<Video16 />} />   
      </Routes>
    </div>
  );
};

export default App;
