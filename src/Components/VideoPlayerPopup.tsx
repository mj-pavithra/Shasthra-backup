import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';import {
    FaWhatsapp 
  } from 'react-icons/fa';
// import { FaPlay, FaPause, FaForward, FaBackward, FaExpand, FaCompress } from 'react-icons/fa';
import '../Styles/VideoPlayerPopup.css';

interface VideoPlayerPopupProps {
    videoUrl: string;
    onClose: () => void;
}

const VideoPlayerPopup: React.FC<VideoPlayerPopupProps> = ({ videoUrl, onClose }) => {
    const [playing, setPlaying] = useState<boolean>(true);
    // const [seekTime] = useState<number>(10); 
    // const [playbackRate, setPlaybackRate] = useState<number>(1.0);
    // const [fullScreen, setFullScreen] = useState<boolean>(false);

    const playerRef = useRef<ReactPlayer>(null);

    // const handleSeek = (forward: boolean) => {
    //     const player = playerRef.current;
    //     if (!player) return;

    //     const currentTime = player.getCurrentTime();
    //     const newTime = forward ? currentTime + seekTime : currentTime - seekTime;
    //     player.seekTo(newTime);
    // };

    return (
        <div className="video-player-popup">
            <div className="video-container">
                <ReactPlayer
                    ref={playerRef}
                    url={videoUrl}
                    playing={playing}
                    // playbackRate={playbackRate}
                    width="100%"
                    height="100%"
                    controls
                    onEnded={() => setPlaying(false)}
                />
                <button className="close-button" onClick={onClose}>X</button>
            </div>
           
            <div className='videoAnnouncement '>
                <p className='announcementText'>මෙම වීඩියෝවට අදාල සටහන් සහ ආදර්ශ ප්‍රශ්න පත්‍ර ලබා ගැනීම‍ට සම්බන්ධ වන්න</p>
                <button className='whatsappButton'> <a href="https://chat.whatsapp.com/Clp33li43pR7lELjXDfSrt" className='whatsappLink' target="_blank" rel="noopener noreferrer" ><FaWhatsapp/>.  +94 77 257 6289</a></button>
            </div>
        </div>
    );
};

export default VideoPlayerPopup;
