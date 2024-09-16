//import React from 'react'
import './PlayVideo.css'
import video2 from '../../assets/video19.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/me2.jpg'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo9 = () => {
  return (
    <div className='play-video'>
        <video src={video2} controls autoPlay muted ></video>
        <h3>Easy French Toast</h3>
        <div className="play-video-info">
            <p>
                3M Views &bull; 1 year ago 
            </p>

            <div>
                <span><img src={like} alt="" />120K</span>
                <span><img src={dislike} alt="" />1K</span>
                <span><img src={share} alt="" />Share</span>
                <span><img src={save} alt="" />Save</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={jack} alt="" />
            <div>
                <p>Cooking With Sam</p>
                <span>1M Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>cooking with me </p>
            <p>making a french toast</p>
            <hr />
            <h4>23K Comments</h4>
            <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Bob <span>1 day ago</span></h3>
                    <p>i want that</p>
                    <div className='comment-action'>
                        <img src={like} alt="" />
                        <span>26</span>
                        <img src={dislike} alt="" />


                    </div>
                </div>

            </div>

            <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Goggie<span>4 days ago</span></h3>
                    <p>Tastyyyyyyy</p>
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
                    <h3>Adrian <span>3 day ago</span></h3>
                    <p>Hehehehehehehehehehe</p>
                    <div className='comment-action'>
                        <img src={like} alt="" />
                        <span>245</span>
                        <img src={dislike} alt="" />
                        

                    </div>
                </div>

            </div>

            <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Moe Lester <span>1 day ago</span></h3>
                    <p>Missed me??</p>
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
                    <h3>Madara uchiha <span>1 day ago</span></h3>
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

export default PlayVideo9