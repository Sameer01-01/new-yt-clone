//import React from 'react'
import './PlayVideo.css'
import video2 from '../../assets/video256.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/simon.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo15 = () => {
  return (
    <div className='play-video'>
        <video src={video2} controls autoPlay muted ></video>
        <h3>MrBeast Donated to speed</h3>
        <div className="play-video-info">
            <p>
                1.2M Views &bull; 2 weeks ago 
            </p>

            <div>
                <span><img src={like} alt="" />78K</span>
                <span><img src={dislike} alt="" />1K</span>
                <span><img src={share} alt="" />Share</span>
                <span><img src={save} alt="" />Save</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={jack} alt="" />
            <div>
                <p>Mr Beast Clips</p>
                <span>12.5K Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>I post Mr Beast clips</p>
            <p>when mrbeast donated to ishowspeed</p>
            <hr />
            <h4>1K Comments</h4>
            <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Bob Marley<span>1 day ago</span></h3>
                    <p>i see 4 speeds sitting there</p>
                    <div className='comment-action'>
                        <img src={like} alt="" />
                        <span>40</span>
                        <img src={dislike} alt="" />


                    </div>
                </div>

            </div>

            <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>George<span>2 day ago</span></h3>
                    <p>MrBeast give me a waifu!!</p>
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
                    <h3>Adrian <span>1 day ago</span></h3>
                    <p>Hello whoever is reading this comment!!</p>
                    <div className='comment-action'>
                        <img src={like} alt="" />
                        <span>54</span>
                        <img src={dislike} alt="" />
                        

                    </div>
                </div>

            </div>

            <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Moe Lester <span>3 day ago</span></h3>
                    <p>Hey there</p>
                    <div className='comment-action'>
                        <img src={like} alt="" />
                        <span>4K</span>
                        <img src={dislike} alt="" />
                        

                    </div>
                </div>

            </div>

            <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Madara uchiha <span>5 hours ago</span></h3>
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

export default PlayVideo15