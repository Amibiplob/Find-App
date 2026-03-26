import React, { useEffect, useState } from "react";
import appNotFound from "../assets/App-Error.png";
import downloadImg from "../assets/icon-downloads.png";
import ratingImg from "../assets/icon-ratings.png";
import { useApps } from "../Context/AppContext";
import { Bounce, toast } from "react-toastify";
import AppErrorPage from "./AppErrorPage";
export default function InstallApps() {
  const { installedApps, setUninstallApp, setInstalledApps } = useApps();
  // console.log(installedApps)

  const [sortMethod, setSortMethod] = useState(installedApps);
  useEffect(() => {
    const allApps = JSON.parse(localStorage.getItem("allApps"));
    // console.log(allApps);
    if (allApps) setInstalledApps(allApps);
    setSortMethod(allApps);
  }, []);

  // console.log(installedApps);
  // console.log(sortMethod);

  const sortHighToLow = [...installedApps].sort(
    (a, b) => b.downloads - a.downloads,
  );

  const sortLowToHigh = [...installedApps].sort(
    (a, b) => a.downloads - b.downloads,
  );

  // console.log(sortHighToLow)
  // console.log(sortLowToHigh);

  const searchItem = (value) => {
    const filterItem = [...installedApps].filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase()),
    );

    setSortMethod(filterItem);
  };

  const uninstallApp = (data) => {
    const updatedApps = installedApps.filter((item) => item.id !== data.id);
    // console.log(updatedApps)
    localStorage.setItem("allApps", JSON.stringify(updatedApps));
    setSortMethod(updatedApps);
    setUninstallApp(data);
    toast.success(data.title + " Uninstall Successfuly");
  };
  return (
    <div>
      <div className="text-center m-8">
        <h1 className="text-4xl font-bold p-5">Your Installed Apps</h1>
        <p className="">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-3 justify-between m-6">
        <h1 className="text-2xl">
          {sortMethod?.length} Apps Found
        </h1>
        <div className="flex flex-col md:flex-row gap-4">
          <select
            defaultValue="Sort By Default"
            className="select appearance-none"
            onChange={(e) => {
              if (e.target.value === "default") setSortMethod(installedApps);
              if (e.target.value === "high-low") setSortMethod(sortHighToLow);
              if (e.target.value === "low-high") setSortMethod(sortLowToHigh);
            }}
          >
            <option value="default">Sort By Default</option>
            <option value="high-low">Downloads: High → Low</option>
            <option value="low-high">Downloads: Low → High</option>
          </select>
          <input
            onChange={(e) => searchItem(e.target.value)}
            type="text"
            placeholder="Search"
            className="input input-bordered md:w-auto"
          />
        </div>
      </div>
      {sortMethod?.length == 0 && <AppErrorPage />}
      <div>
        {sortMethod?.map((item) => (
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
            <button onClick={() => uninstallApp(item)} className="btn mr-4">
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
