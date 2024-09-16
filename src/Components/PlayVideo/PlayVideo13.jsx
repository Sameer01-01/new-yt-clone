//import React from 'react'
import './PlayVideo.css'
import video2 from '../../assets/video23.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'

import user_profile from '../../assets/user_profile.jpg'

const PlayVideo13 = () => {
  return (
    <div className='play-video'>
        <video src={video2} controls autoPlay muted ></video>
        <h3>Tesla Chargers</h3>
        <div className="play-video-info">
            <p>
                45K Views &bull; 1 Month ago 
            </p>

            <div>
                <span><img src={like} alt="" />8K</span>
                <span><img src={dislike} alt="" />1K</span>
                <span><img src={share} alt="" />Share</span>
                <span><img src={save} alt="" />Save</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={user_profile} alt="" />
            <div>
                <p>Nature Videos</p>
                <span>28K Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>Enjoy the nature</p>
            <p>Beauty of nature</p>
            <hr />
            <h4>190 Comments</h4>
            <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Bob <span>3 days ago</span></h3>
                    <p>I came here to test my Display</p>
                    <div className='comment-action'>
                        <img src={like} alt="" />
                        <span>4</span>
                        <img src={dislike} alt="" />


                    </div>
                </div>

            </div>

            <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>David Goggins<span>3 day ago</span></h3>
                    <p>Stay Hard</p>
                    <div className='comment-action'>
                        <img src={like} alt="" />
                        <span>24</span>
                        <img src={dislike} alt="" />
                        

                    </div>
                </div>

            </div>

            <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Adrian <span>1 day ago</span></h3>
                    <p>Im back here</p>
                    <div className='comment-action'>
                        <img src={like} alt="" />
                        <span>45</span>
                        <img src={dislike} alt="" />
                        

                    </div>
                </div>

            </div>

            <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Moe Lester <span>5 days ago</span></h3>
                    <p>Missed me??</p>
                    <div className='comment-action'>
                        <img src={like} alt="" />
                        <span>8K</span>
                        <img src={dislike} alt="" />
                        

                    </div>
                </div>

            </div>

            <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Madara uchiha <span>3 day ago</span></h3>
                    <p>Love from uchiha clan!! </p>
                    <div className='comment-action'>
                        <img src={like} alt="" />
                        <span>69</span>
                        <img src={dislike} alt="" />
                        

                    </div>
                </div>

            </div>


        </div>
    </div>
  )
}

export default PlayVideo13