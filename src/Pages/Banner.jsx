import React from "react";
import bannerImg from '../assets/hero.png'
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
      <div className="m-5">
        <a
          href="https://play.google.com/store/apps"
          className="btn btn-soft btn-accent mr-2"
        >
          Play Store
        </a>
        <a
          href="https://www.apple.com/app-store/"
          className="btn btn-soft btn-info ml-2"
        >
          App Store
        </a>
      </div>
      <img src={bannerImg} alt="Banner" className="mx-auto" />
      <div className="bg-violet-500 text-white p-12">
        <h1 className="text-4xl pb-4">
          Trusted By Millions, Built For You
        </h1>
        <div className="flex justify-center gap-24">
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
