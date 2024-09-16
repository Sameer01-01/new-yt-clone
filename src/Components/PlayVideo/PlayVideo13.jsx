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
                <span><img src={like} alt="" />78K</span>
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
            <p>Channel for tech</p>
            <p>We reviewed tesla chargers</p>
            <hr />
            <h4>13K Comments</h4>
            <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Bob <span>1 day ago</span></h3>
                    <p>Teslas are overhyped</p>
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
                    <h3>Goggie<span>1 day ago</span></h3>
                    <p>Big Fan Mark!!!!</p>
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
                    <h3>Adrian <span>1 day ago</span></h3>
                    <p>This happened with my car!!!!</p>
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

export default PlayVideo13