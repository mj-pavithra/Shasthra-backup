import React from 'react';
import '../Styles/AboutUs.css';

const AboutUs: React.FC = () => {
  // const videoRef = useRef<HTMLVideoElement>(null);
  // const [aboutUsHeight, setAboutUsHeight] = useState<string | number>('auto');

  // useEffect(() => {
  //   const handleVideoLoaded = () => {
  //     if (videoRef.current) {
  //       setAboutUsHeight(videoRef.current.videoHeight + 50);
  //     }
  //   };

  //   const videoElement = videoRef.current;
  //   if (videoElement) {
  //     videoElement.addEventListener('loadedmetadata', handleVideoLoaded);
  //   }

  //   return () => {
  //     if (videoElement) {
  //       videoElement.removeEventListener('loadedmetadata', handleVideoLoaded);
  //     }
  //   };
  // }, []);

  return (
    <div className="aboutUs" >
      <video className="backgroundVideo"  autoPlay loop muted>
        <source src="/introVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default AboutUs;
