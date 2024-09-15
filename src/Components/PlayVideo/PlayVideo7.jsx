//import React from 'react'
import './PlayVideo.css'
import video2 from '../../assets/video17.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/megan.jpg'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo7 = () => {
  return (
    <div className='play-video'>
        <video src={video2} controls autoPlay muted ></video>
        <h3>Daily Hacks</h3>
        <div className="play-video-info">
            <p>
                30M Views &bull; 1 Month ago 
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
                <p>5 Minute Crafts</p>
                <span>40M Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>Channel for life Hacks!!</p>
            <p>This channel makes your life easy</p>
            <hr />
            <h4>244K Comments</h4>
            <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack Randwa <span>1 day ago</span></h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, mollitia?</p>
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
                    <h3>Jack Randwa <span>1 day ago</span></h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, mollitia?</p>
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
                    <h3>Jack Randwa <span>1 day ago</span></h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, mollitia?</p>
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
                    <h3>Jack Randwa <span>1 day ago</span></h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, mollitia?</p>
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
                    <h3>Jack Randwa <span>1 day ago</span></h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, mollitia?</p>
                    <div className='comment-action'>
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                        

                    </div>
                </div>

            </div>


        </div>
    </div>
  )
}

export default PlayVideo7