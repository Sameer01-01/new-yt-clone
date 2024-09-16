//import React from 'react'
import './PlayVideo.css'
import video2 from '../../assets/video22.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/ufc.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo12 = () => {
  return (
    <div className='play-video'>
        <video src={video2} controls autoPlay muted ></video>
        <h3>Top 10 UFC moments</h3>
        <div className="play-video-info">
            <p>
                1M Views &bull; 1 week ago 
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
                <p>UFC</p>
                <span>8.3M Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>Channel for tech</p>
            <p>We reviewed tesla chargers</p>
            <hr />
            <h4>131K Comments</h4>
            <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Bob Marley<span>1 day ago</span></h3>
                    <p>Connor the GOAT!!</p>
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
                    <h3>Trevor<span>1 day ago</span></h3>
                    <p>Jon Jones one is best</p>
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
                    <p>Damn</p>
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
                    <h3>Moe Lester <span>1 day ago</span></h3>
                    <p>Hello there!!</p>
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

export default PlayVideo12