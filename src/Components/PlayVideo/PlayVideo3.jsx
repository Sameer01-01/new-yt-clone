//import React from 'react'
import './PlayVideo.css'
import video2 from '../../assets/video13.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/simon.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo3 = () => {
  return (
    <div className='play-video'>
        <video src={video2} controls autoPlay muted ></video>
        <h3>I Quit</h3>
        <div className="play-video-info">
            <p>
                5M &bull; 3 days ago 
            </p>

            <div>
                <span><img src={like} alt="" />125K</span>
                <span><img src={dislike} alt="" />10K</span>
                <span><img src={share} alt="" />Share</span>
                <span><img src={save} alt="" />Save</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={jack} alt="" />
            <div>
                <p>MrBeast Hindi</p>
                <span>12M Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>We do crazy stuff here</p>
            <p>This is the official hindi channel of MrBeast</p>
            <hr />
            <h4>20K Comments</h4>
            <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack Harris <span>2 hours ago</span></h3>
                    <p>I was worried that u were leaving!!</p>
                    <div className='comment-action'>
                        <img src={like} alt="" />
                        <span>3K</span>
                        <img src={dislike} alt="" />


                    </div>
                </div>

            </div>

            <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Nick goldman <span>4 hours ago</span></h3>
                    <p>Next level promotion!!</p>
                    <div className='comment-action'>
                        <img src={like} alt="" />
                        <span>300</span>
                        <img src={dislike} alt="" />
                        

                    </div>
                </div>

            </div>

            <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Angelina <span>12 hours ago</span></h3>
                    <p>I was sad for a second!!</p>
                    <div className='comment-action'>
                        <img src={like} alt="" />
                        <span>232</span>
                        <img src={dislike} alt="" />
                        

                    </div>
                </div>

            </div>

            <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Moe Lester <span>1 day ago</span></h3>
                    <p>Read my name</p>
                    <div className='comment-action'>
                        <img src={like} alt="" />
                        <span>5K</span>
                        <img src={dislike} alt="" />
                        

                    </div>
                </div>

            </div>

            <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Its vini <span>1 day ago</span></h3>
                    <p>I knew this!!</p>
                    <div className='comment-action'>
                        <img src={like} alt="" />
                        <span>132</span>
                        <img src={dislike} alt="" />
                        

                    </div>
                </div>

            </div>


        </div>
    </div>
  )
}

export default PlayVideo3