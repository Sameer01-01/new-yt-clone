//import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video11.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/valo.png'
import user_profile from '../../assets/user_profile.jpg'


const PlayVideo = () => {
  return (
    <div className='play-video'>
        <video src={video1} controls autoPlay muted ></video>
        <h3>Valorant Gameplay Edit</h3>
        <div className="play-video-info">
            <p>
                568K Views &bull; 5 days ago 
            </p>

            <div>
                <span><img src={like} alt="" />12K</span>
                <span><img src={dislike} alt="" />532</span>
                <span><img src={share} alt="" />Share</span>
                <span><img src={save} alt="" />Save</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={jack} alt="" />
            <div>
                <p>Valorant</p>
                <span>1M Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>This is the official channel of Valorant.</p>
            <p>Stay tuned for the next update which will be out soon!!</p>
            <hr />
            <h4>508 Comments</h4>
            <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Karuana <span>12 hours ago</span></h3>
                    <p>We need  a Jett buff</p>
                    <div className='comment-action'>
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />


                    </div>
                </div>

            </div>

            <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Brimstone<span>1 day ago</span></h3>
                    <p>Clove is a girl not a transgender</p>
                    <div className='comment-action'>
                        <img src={like} alt="" />
                        <span>192</span>
                        <img src={dislike} alt="" />
                        

                    </div>
                </div>

            </div>

            <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>ValoSucks <span>1 day ago</span></h3>
                    <p>Cant wait for the new update!!</p>
                    <div className='comment-action'>
                        <img src={like} alt="" />
                        <span>130</span>
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
                        <span>1K</span>
                        <img src={dislike} alt="" />
                        

                    </div>
                </div>

            </div>

            <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack Papa<span>1 day ago</span></h3>
                    <p>Delete Breeze</p>
                    <div className='comment-action'>
                        <img src={like} alt="" />
                        <span>40</span>
                        <img src={dislike} alt="" />
                        

                    </div>
                </div>

            </div>


        </div>
    </div>
  )
}

export default PlayVideo
