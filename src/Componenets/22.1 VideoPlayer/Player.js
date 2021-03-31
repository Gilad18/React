import React , {useRef} from 'react'
import Video from './video.mp4'

export default function Player() {

    const videoRef = useRef();

    const playVideo = () => {
        videoRef.current.play()
    }
    const pauseVideo = () => {
        videoRef.current.pause()
    }

    return (
        <div>
            <input type="button" value="PLAY" onClick={playVideo}/>
            <input type="button" value="PAUSE" onClick={pauseVideo}/>
            <video width="620" ref={videoRef} height="540" controls>
              <source src={Video}/>
              </video>
        </div>
    )
}
