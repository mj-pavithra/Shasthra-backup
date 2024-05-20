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
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  let reducedHeight: number = 950;

  if(window.innerWidth < 1024) {
    reducedHeight = 600;
  }
  if (window.innerWidth < 768) {
    reducedHeight = 400;
  }


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
  const calculatedHeight = Math.min(scrollPosition - reducedHeight, timelineHeight);

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
        items.map((item, index) => {
          const isOpen = itemRefs.current[index]?.offsetTop! + reducedHeight <= scrollPosition;
          return (
            <div
              key={index}
              className={`roadmap-item ${index % 2 === 0 ? 'left' : 'right'}`}
              ref={el => itemRefs.current[index] = el}
            >
              <div className={`item-container ${isOpen ? 'open' : ''}`}>
                <div className="timestamp">{item.timestamp}</div>
                <h1 className="itemTitle">{item.title}</h1>
                <div className="description">{item.description}</div>
              </div>
            </div>
          );
        })
      ) : (
        <div>No roadmap items available</div>
      )}
    </div>
  );
};

export default Roadmap;
