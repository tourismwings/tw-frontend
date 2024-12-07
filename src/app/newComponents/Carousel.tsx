import React, { useEffect, useRef } from "react";

const Carousel: React.FC = () => {
  const scrollingWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = scrollingWrapperRef.current;
    const scrollSpeed = 1;
    const delay = 16; 

    let animationFrameId: ReturnType<typeof setTimeout> | null = null;

    const autoScroll = () => {
      if (wrapper) {
        wrapper.scrollLeft += scrollSpeed;

        if (wrapper.scrollLeft >= wrapper.scrollWidth / 2) {
          wrapper.scrollLeft = 0;
        }
      }
      animationFrameId = setTimeout(autoScroll, delay);
    };

    autoScroll();

    return () => {
      if (animationFrameId !== null) clearTimeout(animationFrameId); 
    };
  }, []);

  const images = Array.from({ length: 6 }).map(
    (_, index) => `https://via.placeholder.com/150?text=Image+${index + 1}`
  );

  return (
    <div className="relative">
      <div
        className="flex overflow-x-auto space-x-4 scrolling-wrapper scrollbar-hide"
        ref={scrollingWrapperRef}
      >
        {[...images, ...images].map((src, index) => (
          <div
            key={index}
            className="flex-none w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6"
          >
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

const css = `
  /* Hide scrollbar */
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;

if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = css;
  document.head.appendChild(style);
}
