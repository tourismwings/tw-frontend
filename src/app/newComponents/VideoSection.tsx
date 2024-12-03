"use client";
import React, { useRef, useState } from "react";
import Carousel from "./Carousel";

interface VideoSectionProps {
  videoSrc: string;
  content: React.ReactNode;
}

const VideoSection: React.FC<VideoSectionProps> = ({ videoSrc, content }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
     <section className="relative h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
        <div className="max-w-5xl flex items-center justify-center h-full text-center flex-col">
            <div className="p-4 max-w-lg mb-8">{content}</div>
            <Carousel />
        </div>
        
       
      </div>
      
      <button
        onClick={toggleVideo}
        className="absolute bottom-5 left-5 z-10 bg-black bg-opacity-75 text-white px-4 py-2 rounded"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </section>
   
    </>
   
  );
};

export default VideoSection;
