import React from "react";

const Banner = () => {
  return (
    <div className="flex h-[500px] overflow-clip">
      <div className="flex-1 h-full transition-all mr-[-15%] clip-start hover:flex-[1.25] relative group">
        <a href="#link" className="relative block h-full">
          <div className="absolute inset-0 bg-black opacity-50 z-10 transition-opacity group-hover:opacity-0"></div>
          <div className="absolute bottom-4 left-4 text-white text-[clamp(12px,5cqw,32px)] z-20">
            Kashmir
          </div>
          <img
            src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
            className="w-full h-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
            alt="Chennai"
          />
        </a>
      </div>

      <div className="flex-1 h-full transition-all mr-[-15%] clip-middle hover:flex-[1.25] relative group">
        <a href="#link" className="relative block h-full">
          <div className="absolute inset-0 bg-black opacity-50 z-10 transition-opacity group-hover:opacity-0"></div>
          <div className="absolute bottom-4 left-4 text-white text-[clamp(12px,5cqw,32px)] z-20">
            Odisha
          </div>
          <img
            src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3NrOTc5MS1pbWFnZS1rd3Z1amE5Ni5qcGc.jpg"
            className="w-full h-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
            alt="Chennai"
          />
        </a>
      </div>

      <div className="flex-1 h-full transition-all mr-[-15%] clip-middle hover:flex-[1.25] relative group">
        <a href="#link" className="relative block h-full">
          <div className="absolute inset-0 bg-black opacity-50 z-10 transition-opacity group-hover:opacity-0"></div>
          <div className="absolute bottom-4 left-4 text-white text-[clamp(12px,5cqw,32px)] z-20">
            Goa
          </div>
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20240106/pngtree-coloful-nature-beautiful-scenery-image_15576031.jpg"
            className="w-full h-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
            alt="Chennai"
          />
        </a>
      </div>

      <div className="flex-1 h-full transition-all mr-[-15%] clip-end hover:flex-[1.25] relative group">
        <a href="#link" className="relative block h-full">
          <div className="absolute inset-0 bg-black opacity-50 z-10 transition-opacity group-hover:opacity-0"></div>
          <div className="absolute bottom-4 left-4 text-white text-[clamp(12px,5cqw,32px)] z-20">
            Chennai
          </div>
          <img
            src="https://t3.ftcdn.net/jpg/05/68/52/52/360_F_568525285_CrGJ8Yh1noTyqu6QsocfVeGQGY91E0Jb.jpg"
            className="w-full h-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
            alt="Chennai"
          />
        </a>
      </div>
    </div>
  );
};

export default Banner;
