import React, { useEffect, useState, useRef } from 'react';
import '../Styles/Roadmap.css';

interface RoadmapItem {
  timestamp: string;
  description: string;
  title: string;
}

interface RoadmapProps {
  items: RoadmapItem[];
}

const Roadmap: React.FC<RoadmapProps> = ({ items = [] }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollPosition(scrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const timelineHeight = timelineRef.current?.offsetHeight || 0;
  const calculatedHeight = Math.min(scrollPosition - 720, timelineHeight);

  const showProgress = {
    height: `${calculatedHeight}px`,
  };

  return (
    <div className="roadmap">
      <div className="timeline" ref={timelineRef}>
        <div className="topbar" style={showProgress}>
          <div className='dotOnTop'></div>
        </div>
      </div>
      {items.length > 0 ? (
        items.map((item, index) => (
          <div
            key={index}
            className={`roadmap-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className='item-container'>
              <div className="timestamp">{item.timestamp}</div>
              <div className="description">{item.description}</div>
              <div className="itemTitle">{item.title}</div>
            </div>
          </div>
        ))
      ) : (
        <div>No roadmap items available</div>
      )}
    </div>
  );
};

export default Roadmap;
