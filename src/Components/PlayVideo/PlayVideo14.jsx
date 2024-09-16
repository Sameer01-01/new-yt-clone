//import React from 'react'
import './PlayVideo.css'
import video2 from '../../assets/video24.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/ufc.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo14 = () => {
  return (
    <div className='play-video'>
        <video src={video2} controls autoPlay muted ></video>
        <h3>Best ufc moments edit</h3>
        <div className="play-video-info">
            <p>
                2.3M Views &bull; 1 week ago 
            </p>

            <div>
                <span><img src={like} alt="" />74K</span>
                <span><img src={dislike} alt="" />1K</span>
                <span><img src={share} alt="" />Share</span>
                <span><img src={save} alt="" />Save</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={jack} alt="" />
            <div>
                <p>Ralph</p>
                <span>4.5k Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>I post ufc clips</p>
            <p>best ufc moments</p>
            <hr />
            <h4>13K Comments</h4>
            <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Harry <span>1 hour ago</span></h3>
                    <p>Connor eats everyone!!!!</p>
                    <div className='comment-action'>
                        <img src={like} alt="" />
                        <span>23</span>
                        <img src={dislike} alt="" />


                    </div>
                </div>

            </div>

            <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Goggie<span>1 day ago</span></h3>
                    <p>ayooo</p>
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
                    <h3>Adrian <span>2 days ago</span></h3>
                    <p>Hehe</p>
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
                    <h3>Moe Lester <span>3 hours ago</span></h3>
                    <p>Missed me??</p>
                    <div className='comment-action'>
                        <img src={like} alt="" />
                        <span>2K</span>
                        <img src={dislike} alt="" />
                        

                    </div>
                </div>

            </div>

            <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Madara uchiha <span>3 hours ago</span></h3>
                    <p>Hey fella!! </p>
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

export default PlayVideo14