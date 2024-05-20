import React, { useEffect, useState } from "react";
import AboutUs from "../Components/AboutUs";
import Introduction from "../Components/Introduction";
import ModifiedPhotoReel from "../Components/ModifiedPhotoReel";
import YouTubeVideoGrid from "../Components/YouTubeVideoGrid";
import Roadmap from "../Components/Readmap";
import '../Styles/HPmiddle.css';

interface RoadmapItem {
  timestamp: string;
  description: string;
  title: string;
}

const HPmiddle: React.FC = () => {
  const photos = [
    "/youtube-Thumbnail 7.jpg",
    "/youtube-Thumbnail 8.jpg",
    "/youtube-Thumbnail 9.jpg",
    "/youtube-Thumbnail 10.jpg",
    "/youtube-Thumbnail 11.jpg",
    "/youtube-Thumbnail 12.jpg",
    "/youtube-Thumbnail 13.jpg",
    "/youtube-Thumbnail 14.jpg",
  ];

  const [items, setItems] = useState<RoadmapItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate fetching data from an API or some asynchronous source
    setTimeout(() => {
      const fetchedItems: RoadmapItem[] = [
        { timestamp: '2024-01-01', description: 'Project kickoff' , title: 'Project kickoff'},
        { timestamp: '2024-02-01', description: 'First milestone' , title: 'Project kickoff'},
        { timestamp: '2024-03-01', description: 'Second milestone', title: 'Project kickoff' },
        { timestamp: '2024-04-01', description: 'Third milestone', title: 'Project kickoff' },
      ];
      setItems(fetchedItems);
      setLoading(false);
    }, 1000); // Simulating a 1-second delay
  }, []);

  return (
    <div>
      <AboutUs />
      <ModifiedPhotoReel photos={photos} />
      {loading ? <div>Loading...</div> : <Roadmap items={items} />}
      <YouTubeVideoGrid
        channelId="UCV1TbG7QfpMVIKKp6ewqT6Q"
        apiKey="AIzaSyBjc5_ztmiXI3mOaizTceIqUOfWLZUMbRk"
      />
      <Introduction />
    </div>
  );
}

export default HPmiddle;
