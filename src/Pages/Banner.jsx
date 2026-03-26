import React from "react";
import bannerImg from "../assets/hero.png";
import { Link } from "react-router-dom";
export default function Banner() {
  const totalStats = [
    {
      label: "Total Downloads",
      value: "29.6M",
      sub: "21% More Than Last Month",
    },
    {
      label: "Total Reviews",
      value: "906K",
      sub: "46% More Than Last Month",
    },
    { label: "Active Apps", value: "132+", sub: "31 More Will Launch" },
  ];
  return (
    <div className="text-center">
      <h1 className="text-5xl mb-5 mt-9 font-bold">
        We Build <span className="text-blue-800">Productive</span> Apps
      </h1>
      <p className="text-xl text-balance">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className="my-5 flex justify-center gap-4 md:gap-7">
        <Link
          to="https://play.google.com/store/apps"
          className="flex items-center gap-3 btn btn-soft btn-accent"
        >
          <img
            className="w-9 h-9"
            src="https://img.icons8.com/?size=96&id=rZwnRdJyYqRi&format=png"
            alt=""
          />
          <span>Play Store</span>
        </Link>
        <Link
          to="https://www.apple.com/app-store/"
          className="flex items-center gap-3 btn btn-soft btn-accent"
        >
          <img
            className="w-9 h-9"
            src="https://img.icons8.com/?size=160&id=FY7tVsFoeON4&format=png"
            alt=""
          />
          <span>App Store</span>
        </Link>
      </div>
      <img src={bannerImg} alt="Banner" className="mx-auto" />
      <div className="bg-violet-500 text-white p-12">
        <h1 className="text-4xl pb-4">Trusted By Millions, Built For You</h1>
        <div className="flex justify-center gap-2 md:gap-16 lg:gap-24">
          {totalStats.map((item) => (
            <div key={item.label} className="">
              <p className="text-xs">{item.label}</p>
              <p className="text-5xl m-4">{item.value}</p>
              <p className="text-xs">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
