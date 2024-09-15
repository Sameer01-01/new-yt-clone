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
import thumbnail9 from '../../assets/thumbnail9.jpg'
import thumbnail10 from '../../assets/thumbnail10.jpg'
import thumbnail11 from '../../assets/thumbnail11.jpg'
import thumbnail12 from '../../assets/thumbnail12.jpg'
import thumbnail13 from '../../assets/thumbnail13.jpg'
import thumbnail14 from '../../assets/thumbnail14.jpg'
import thumbnail15 from '../../assets/thumbnail15.jpg'
import thumbnail16 from '../../assets/thumbnail16.jpg'
import { Link } from 'react-router-dom'


const Feed = () => {
  return (
    <div className="feed">
      <Link to={`video/20/4521`} className='card'>
        <img src={thumbnail1} alt="" />
        <h2>Valorant Gameplay Edit </h2>
        <h3>Valorant</h3>
        <p>152k views - 5 days ago</p>
    </Link>
    <Link to={`video2/20/4522`} className='card'>
        <img src={thumbnail2} alt="" />
        <h2>Weekend and iPhone 16 </h2>
        <h3>Apple</h3>
        <p>12M views - 2 days ago</p>
    </Link>
    <Link to={`video3/20/4523`} className='card'>
        <img src={thumbnail3} alt="" />
        <h2>I Quit </h2>
        <h3>Mr Beast</h3>
        <p>5M views - 3 days ago</p>
    </Link>
    <Link to={`video4/20/4524`} className='card'>
        <img src={thumbnail4} alt="" />
        <h2> Diamonds - Rihanna</h2>
        <h3>Rihanna</h3>
        <p>896M views - 1 month ago</p>
    </Link>
    <Link to={`video5/20/4525`}  className='card'>
        <img src={thumbnail5} alt="" />
        <h2>STAY - Justin Bieber</h2>
        <h3>Justin Bieber</h3>
        <p>1.1B views - 1 year ago</p>
    </Link>
    <Link to={`video6/20/4526`}  className='card'>
        <img src={thumbnail6} alt="" />
        <h2>Best stun grenade </h2>
        <h3>DrDisrespect</h3>
        <p>2.3M views - 1 week ago</p>
    </Link>
    <Link to={`video7/20/4527`}  className='card'>
        <img src={thumbnail7} alt="" />
        <h2>Daily Hacks </h2>
        <h3>5 Minute Crafts</h3>
        <p>30M Views - 1 Month ago</p>
    </Link>
    <Link to={`video8/20/4528`}  className='card'>
        <img src={thumbnail8} alt="" />
        <h2> Tesla Chargers</h2>
        <h3>Mkbhd</h3>
        <p>900K views - 1 day ago</p>
    </Link>
    <div className='card'>
        <img src={thumbnail9} alt="" />
        <h2>Easy French Toast </h2>
        <h3>Cooking with Sameer</h3>
        <p>3M views - 1 year ago</p>
    </div>
    <div className='card'>
        <img src={thumbnail10} alt="" />
        <h2>Pasta and Pizza Easy recepie</h2>
        <h3>Cooking with Sameer</h3>
        <p>1M views - 1 Month ago</p>
    </div>
    <div className='card'>
        <img src={thumbnail11} alt="" />
        <h2>My news channel - pewdiepie</h2>
        <h3>Pewdiepie</h3>
        <p>658K views - 2 years ago</p>
    </div>
    <div className='card'>
        <img src={thumbnail12} alt="" />
        <h2>Top 10 UFC moments </h2>
        <h3>UFC</h3>
        <p>1M views - 1 week ago</p>
    </div>
    <div className='card'>
        <img src={thumbnail13} alt="" />
        <h2>Nature 4K </h2>
        <h3>Wildlife videos</h3>
        <p>45K views - 1 Month ago</p>
    </div>
    <div className='card'>
        <img src={thumbnail14} alt="" />
        <h2>Best ufc moments </h2>
        <h3>Ralph</h3>
        <p>2.3M views - 1 Week ago</p>
    </div>
    <div className='card'>
        <img src={thumbnail15} alt="" />
        <h2>MrBeast Donated to speed </h2>
        <h3>Goofy</h3>
        <p>1.2M views - 2 weeks ago</p>
    </div>
    <div className='card'>
        <img src={thumbnail16} alt="" />
        <h2>Logan Paul WWE best moments </h2>
        <h3>WWE</h3>
        <p>1.5M views - 5 days ago</p>
    </div>
    


    </div>
  )
}

export default Feed