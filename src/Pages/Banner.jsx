import React from "react";

export default function Banner() {
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
      <img src="/src/assets/hero.png" alt="Banner" className="mx-auto" />
    </div>
  );
}
