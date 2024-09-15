//import React from 'react'
import './PlayVideo.css'
import video2 from '../../assets/video14.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/cameron.jpg'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo4 = () => {
  return (
    <div className='play-video'>
        <video src={video2} controls autoPlay muted ></video>
        <h3>Diamonds - Rihanna</h3>
        <div className="play-video-info">
            <p>
                896M Views &bull; 1 Month ago 
            </p>

            <div>
                <span><img src={like} alt="" />3M</span>
                <span><img src={dislike} alt="" />2K</span>
                <span><img src={share} alt="" />Share</span>
                <span><img src={save} alt="" />Save</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={jack} alt="" />
            <div>
                <p>Rihanna</p>
                <span>30.4M Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>Music</p>
            <p>My new song is here..hope you all like it!!</p>
            <hr />
            <h4>130K Comments</h4>
            <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Clare<span>5 hours ago</span></h3>
                    <p>Woooooowwwwwwww</p>
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
                    <h3>Katherine <span>8 Hours ago</span></h3>
                    <p>Rihanna rocks as always!!</p>
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
                    <h3>Hannah <span>1 day ago</span></h3>
                    <p>OMG!!You slayed</p>
                    <div className='comment-action'>
                        <img src={like} alt="" />
                        <span>504</span>
                        <img src={dislike} alt="" />
                        

                    </div>
                </div>

            </div>

            <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Moe Lester <span>8 day ago</span></h3>
                    <p>Missed me??</p>
                    <div className='comment-action'>
                        <img src={like} alt="" />
                        <span>15K</span>
                        <img src={dislike} alt="" />
                        

                    </div>
                </div>

            </div>

            <div className='comment'>
                <img src={user_profile} alt="" />
                <div>
                    <h3>Eren <span>5 day ago</span></h3>
                    <p>Nice one</p>
                    <div className='comment-action'>
                        <img src={like} alt="" />
                        <span>3k</span>
                        <img src={dislike} alt="" />
                        

                    </div>
                </div>

            </div>


        </div>
    </div>
  )
}

export default PlayVideo4