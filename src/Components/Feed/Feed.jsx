//import React from 'react'
import './Feed.css'
import thumbnail1 from '../../assets/thumbnail1.jpg'
import thumbnail2 from '../../assets/thumbnail2.jpg'
import thumbnail3 from '../../assets/thumbnail3.jpg'
import thumbnail4 from '../../assets/thumbnail4.jpg'
import thumbnail5 from '../../assets/thumbnail5.jpg'
import thumbnail6 from '../../assets/thumbnail6.jpg'
import thumbnail7 from '../../assets/thumbnail7.jpg'
import thumbnail8 from '../../assets/thumbnail8.jpg'
import { Link } from 'react-router-dom'


const Feed = () => {
  return (
    <div className="feed">
      <Link to={`video/20/4521`} className='card'>
        <img src={thumbnail1} alt="" />
        <h2>Best channel to learn to code </h2>
        <h3>channel name</h3>
        <p>15k views - 2 days ago</p>
    </Link>
    <Link to={`video2/20/4522`} className='card'>
        <img src={thumbnail2} alt="" />
        <h2>Best channel to learn to code </h2>
        <h3>MrBeast</h3>
        <p>15k views - 2 days ago</p>
    </Link>
    <Link to={`video3/20/4523`} className='card'>
        <img src={thumbnail3} alt="" />
        <h2>Best channel to learn to code </h2>
        <h3>channel name</h3>
        <p>15k views - 2 days ago</p>
    </Link>
    <Link to={`video4/20/4524`} className='card'>
        <img src={thumbnail4} alt="" />
        <h2>Best channel to learn to code </h2>
        <h3>channel name</h3>
        <p>15k views - 2 days ago</p>
    </Link>
    <Link to={`video5/20/4525`}  className='card'>
        <img src={thumbnail5} alt="" />
        <h2>Best channel to learn to code </h2>
        <h3>channel name</h3>
        <p>15k views - 2 days ago</p>
    </Link>
    <Link to={`video6/20/4526`}  className='card'>
        <img src={thumbnail6} alt="" />
        <h2>Best channel to learn to code </h2>
        <h3>channel name</h3>
        <p>15k views - 2 days ago</p>
    </Link>
    <Link to={`video7/20/4527`}  className='card'>
        <img src={thumbnail7} alt="" />
        <h2>Best channel to learn to code </h2>
        <h3>channel name</h3>
        <p>15k views - 2 days ago</p>
    </Link>
    <Link to={`video8/20/4528`}  className='card'>
        <img src={thumbnail8} alt="" />
        <h2>Best channel to learn to code </h2>
        <h3>channel name</h3>
        <p>15k views - 2 days ago</p>
    </Link>
    <div className='card'>
        <img src={thumbnail1} alt="" />
        <h2>Best channel to learn to code </h2>
        <h3>channel name</h3>
        <p>15k views - 2 days ago</p>
    </div>
    <div className='card'>
        <img src={thumbnail2} alt="" />
        <h2>Best channel to learn to code </h2>
        <h3>channel name</h3>
        <p>15k views - 2 days ago</p>
    </div>
    <div className='card'>
        <img src={thumbnail3} alt="" />
        <h2>Best channel to learn to code </h2>
        <h3>Greatstack</h3>
        <p>15k views - 2 days ago</p>
    </div>
    <div className='card'>
        <img src={thumbnail4} alt="" />
        <h2>Best channel to learn to code </h2>
        <h3>Greatstack</h3>
        <p>15k views - 2 days ago</p>
    </div>
    <div className='card'>
        <img src={thumbnail5} alt="" />
        <h2>Best channel to learn to code </h2>
        <h3>channel name</h3>
        <p>15k views - 2 days ago</p>
    </div>
    <div className='card'>
        <img src={thumbnail6} alt="" />
        <h2>Best channel to learn to code </h2>
        <h3>channel name</h3>
        <p>15k views - 2 days ago</p>
    </div>
    <div className='card'>
        <img src={thumbnail7} alt="" />
        <h2>Best channel to learn to code </h2>
        <h3>channel name</h3>
        <p>15k views - 2 days ago</p>
    </div>
    <div className='card'>
        <img src={thumbnail8} alt="" />
        <h2>Best channel to learn to code </h2>
        <h3>channel name</h3>
        <p>15k views - 2 days ago</p>
    </div>
    


    </div>
  )
}

export default Feed