import React, { useEffect, useRef, useState } from 'react';
import '../Styles/AboutUs.css';

const AboutUs: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [aboutUsHeight, setAboutUsHeight] = useState<string | number>('auto');

  useEffect(() => {
    const handleVideoLoaded = () => {
      if (videoRef.current) {
        setAboutUsHeight(videoRef.current.videoHeight + 50);
      }
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('loadedmetadata', handleVideoLoaded);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('loadedmetadata', handleVideoLoaded);
      }
    };
  }, []);

  return (
    <div className="aboutUs" style={{ height: aboutUsHeight }}>
      <video className="backgroundVideo" ref={videoRef} autoPlay loop muted>
        <source src="/introVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1 className="greeting">
          ආයුබෝවන් <br />
          ආයුෂ ශාස්ත්‍රක<br />
          ගණිතය රසවත්ව
        </h1>
        <h3 className="slogan">
          B.Sc Engineering Hons. (ug) <br />
          Electronic & Telecommunication (UoM)
        </h3>
      </div>
    </div>
  );
};

export default AboutUs;
