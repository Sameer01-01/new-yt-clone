//import React from 'react'
import './PlayVideo.css'
import video2 from '../../assets/video16.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/drdis.jpg'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo6 = () => {
  return (
    <div className='play-video'>
        <video src={video2} controls autoPlay muted ></video>
        <h3>Best stun grenade</h3>
        <div className="play-video-info">
            <p>
                2.3M Views &bull; 1 week ago 
            </p>

            <div>
                <span><img src={like} alt="" />55K</span>
                <span><img src={dislike} alt="" />3K</span>
                <span><img src={share} alt="" />Share</span>
                <span><img src={save} alt="" />Save</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={jack} alt="" />
            <div>
                <p>DrDisrespect</p>
                <span>5M Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>Channel for gaming</p>
            <p>Lets CSGOooooo</p>
            <hr />
            <h4>130 Comments</h4>
            <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack harris <span>1 day ago</span></h3>
                    <p>wow!!</p>
                    <div className='comment-action'>
                        <img src={like} alt="" />
                        <span>236</span>
                        <img src={dislike} alt="" />


                    </div>
                </div>

            </div>

            <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Csgo noob <span>1 day ago</span></h3>
                    <p>This is cool!!</p>
                    <div className='comment-action'>
                        <img src={like} alt="" />
                        <span>25</span>
                        <img src={dislike} alt="" />
                        

                    </div>
                </div>

            </div>

            <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Howart  <span>1 day ago</span></h3>
                    <p>How did he hit that??!!</p>
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
                    <p>Hello doctor</p>
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
                    <h3>harry<span>1 day ago</span></h3>
                    <p>smooth bruhh!!!</p>
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

export default PlayVideo6