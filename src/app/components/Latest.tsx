import Image from "next/image";
import React from "react";

const Latest = () => {
  return (
    <div className="mx-auto flex flex-wrap gap-4 max-w-8xl items-start justify-between p-4 lg:px-8">

      <div className="flex space-x-3 w-full sm:w-[calc(100%/2-1rem)] lg:w-[calc(100%/3-1rem)] xl:w-[calc(100%/6-1rem)] text-gray-500 hover:text-black cursor-pointer items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <Image
            src="/assets/i.jpg"
            alt="logo"
            height={100}
            width={100}
            className="object-cover h-full w-full"
          />
        </div>
        <div className="flex-1">
          <p className="line-clamp-2 overflow-hidden text-ellipsis text-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
      
      <div className="flex space-x-3 w-full sm:w-[calc(100%/2-1rem)] lg:w-[calc(100%/3-1rem)] xl:w-[calc(100%/6-1rem)] text-gray-500 hover:text-black cursor-pointer items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <Image
            src="/assets/i2.jpg"
            alt="logo"
            height={100}
            width={100}
            className="object-cover h-full w-full"
          />
        </div>
        <div className="flex-1">
          <p className="line-clamp-2 overflow-hidden text-ellipsis text-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
      <div className="flex space-x-3 w-full sm:w-[calc(100%/2-1rem)] lg:w-[calc(100%/3-1rem)] xl:w-[calc(100%/6-1rem)] text-gray-500 hover:text-black cursor-pointer items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <Image
            src="/assets/i.jpg"
            alt="logo"
            height={100}
            width={100}
            className="object-cover h-full w-full"
          />
        </div>
        <div className="flex-1">
          <p className="line-clamp-2 overflow-hidden text-ellipsis text-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
      <div className="flex space-x-3 w-full sm:w-[calc(100%/2-1rem)] lg:w-[calc(100%/3-1rem)] xl:w-[calc(100%/6-1rem)] text-gray-500 hover:text-black cursor-pointer items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <Image
            src="/assets/i2.jpg"
            alt="logo"
            height={100}
            width={100}
            className="object-cover h-full w-full"
          />
        </div>
        <div className="flex-1">
          <p className="line-clamp-2 overflow-hidden text-ellipsis text-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
      <div className="flex space-x-3 w-full sm:w-[calc(100%/2-1rem)] lg:w-[calc(100%/3-1rem)] xl:w-[calc(100%/6-1rem)] text-gray-500 hover:text-black cursor-pointer items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <Image
            src="/assets/i.jpg"
            alt="logo"
            height={100}
            width={100}
            className="object-cover h-full w-full"
          />
        </div>
        <div className="flex-1">
          <p className="line-clamp-2 overflow-hidden text-ellipsis text-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
      <div className="flex space-x-3 w-full sm:w-[calc(100%/2-1rem)] lg:w-[calc(100%/3-1rem)] xl:w-[calc(100%/6-1rem)] text-gray-500 hover:text-black cursor-pointer items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <Image
            src="/assets/i2.jpg"
            alt="logo"
            height={100}
            width={100}
            className="object-cover h-full w-full"
          />
        </div>
        <div className="flex-1">
          <p className="line-clamp-2 overflow-hidden text-ellipsis text-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>

      

    </div>
  );
};

export default Latest;
