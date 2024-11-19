"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  CiFacebook,
  CiTwitter,
  CiYoutube,
  CiInstagram,
  CiSearch,
} from "react-icons/ci";

const Header = (posts:any) => {
  console.log('posts', posts)
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md mx-auto flex max-w-8xl items-center justify-between p-3 lg:px-8">
      <Image
        src="/assets/full-logo-e1535259923350.png"
        alt="logo"
        height={140}
        width={140}
      />
      <div className="flex items-center">
        <ul className="flex">
          <li className="ml-2 cursor-pointer">
            <CiFacebook />
          </li>
          <li className="ml-2 cursor-pointer">
            <CiTwitter />
          </li>
          <li className="ml-2 cursor-pointer">
            <CiYoutube />
          </li>
          <li className="ml-2 cursor-pointer">
            <CiInstagram />
          </li>
        </ul>
        <div className="flex relative items-center ml-6">
          {!isFocused && (
            <div className="absolute ml-2">
              <CiSearch />
            </div>
          )}
          <input
            className="border p-2 text-sm rounded-md outline-none"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
