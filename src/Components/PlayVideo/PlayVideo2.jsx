//import React from 'react'
import './PlayVideo.css'
import video2 from '../../assets/video12.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/apple.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo2 = () => {
  return (
    <div className='play-video'>
        <video src={video2} controls autoPlay muted ></video>
        <h3>Weekend and iPhone 16</h3>
        <div className="play-video-info">
            <p>
                12M Views &bull; 2 days ago 
            </p>

            <div>
                <span><img src={like} alt="" />450K</span>
                <span><img src={dislike} alt="" />5K</span>
                <span><img src={share} alt="" />Share</span>
                <span><img src={save} alt="" />Save</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={jack} alt="" />
            <div>
                <p>Apple</p>
                <span>20M Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>Official cahnnel for Apple</p>
            <p>We have launched the new iPhone 16, Go grab it now!!</p>
            <hr />
            <h4>45K Comments</h4>
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

export default PlayVideo2