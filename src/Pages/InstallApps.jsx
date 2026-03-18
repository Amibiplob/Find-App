import React from "react";
import { useLoaderData } from "react-router";
import downloadImg from "../assets/icon-downloads.png";
import ratingImg from "../assets/icon-ratings.png";
export default function InstallApps() {
  const allApps = useLoaderData();
  console.log(allApps[0]);
  return (
    <div>
      <div className="text-center m-8">
        <h1 className="text-4xl font-bold p-5">Your Installed Apps</h1>
        <p className="">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between m-6">
        <h1 className="text-2xl"> {allApps.length} Apps Found</h1>
        <div className="flex gap-4">
          <select
            defaultValue="Sort By Default"
            className="select appearance-none"
            // onChange={(e) => {
            //   if (e.target.value === "default") setSortMethod(sortDefault);
            //   if (e.target.value === "high-low") setSortMethod(sortHighToLow);
            //   if (e.target.value === "low-high") setSortMethod(sortLowToHigh);
            // }}
          >
            <option value="default">Sort By Default</option>
            <option value="high-low">Downloads: High → Low</option>
            <option value="low-high">Downloads: Low → High</option>
          </select>
          <input
            // onChange={(e) => searchItem(e.target.value)}
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
      </div>
      <div>
        {allApps.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center shadow-lg hover:shadow-xl py-3"
          >
            <figure className="flex gap-5 px-2">
              <img
                className="rounded-md w-36 bg-neutral-100"
                src={item.image}
                alt={item.title}
              />
              <div className="flex flex-col justify-around">
                <h2 className="card-title">{item.title}</h2>
                <div className="flex gap-4">
                  <p className="flex items-center gap-1">
                    <img className="h-4 w-4" src={downloadImg} alt="" />
                    <span>
                      {(item.downloads / 1000000000).toFixed(1) + "B"}
                    </span>
                  </p>
                  <p className="flex items-center gap-1">
                    <img className="h-4 w-4" src={ratingImg} alt="" />
                    {item.ratingAvg}
                  </p>
                  <p>{item.size} MB</p>
                </div>
              </div>
            </figure>

            <button className="btn mr-4">Uninstall</button>
          </div>
        ))}
      </div>
    </div>
  );
}
