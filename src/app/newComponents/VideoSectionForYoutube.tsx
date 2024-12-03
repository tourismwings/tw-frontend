"use client";
import React, { useState } from "react";

interface VideoSectionProps {
  videoSrc: string; // YouTube video URL
  content: React.ReactNode;
}

const VideoSection: React.FC<VideoSectionProps> = ({ videoSrc, content }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const toggleVideo = () => {
    setIsPlaying(!isPlaying);
  };

  // Extract YouTube video ID from URL
  const extractYouTubeId = (url: string): string | null => {
    const regExp =
      /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };

  const videoId = extractYouTubeId(videoSrc);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        {videoId && isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&modestbranding=1&rel=0`}
            title="YouTube video player"
            className="absolute top-0 left-0 w-full h-full object-cover"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        ) : (
          <div className="absolute top-0 left-0 w-full h-full bg-black" />
        )}
      </div>
      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-black/70 to-gray-600 opacity-90" />
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
        <div className="p-4 max-w-lg">{content}</div>
      </div>
      <button
        onClick={toggleVideo}
        className="absolute bottom-5 left-5 z-10 bg-black bg-opacity-75 text-white px-4 py-2 rounded"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </section>
  );
};

export default VideoSection;