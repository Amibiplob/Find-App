import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { useApps } from "../Context/AppContext";

import downloadImg from "../assets/icon-downloads.png";
import ratingImg from "../assets/icon-ratings.png";
import AppErrorPage from "./AppErrorPage";

export default function AllApps() {
  const { allAppsDetails, setInitialData } = useApps();

  const {
    data: allData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["allData"],
    queryFn: () => fetch("/FakeDB.json").then((res) => res.json()),
  });

  const [sortMethod, setSortMethod] = useState([]);
  const [sortDefault, setSortDefault] = useState([]);

  useEffect(() => {
    if (allData) {
      setInitialData(allData);
      setSortDefault(allData);
      setSortMethod(allData);
    }
  }, [allData]);
  // console.log(allAppsDetails);

  // console.log("isLoading:", isLoading);
  // console.log("data:", allData);
  // console.log("error:", error);

  const sortHighToLow = [...sortMethod].sort(
    (a, b) => b.downloads - a.downloads,
  );

  const sortLowToHigh = [...sortMethod].sort(
    (a, b) => a.downloads - b.downloads,
  );

  // console.log(sortHighToLow)
  // console.log(sortLowToHigh);

  const searchItem = (value) => {
    const filterItem = [...allAppsDetails].filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase()),
    );

    setSortMethod(filterItem);
  };

  return (
    <div>
      <div className="text-center m-8">
        <h1 className="text-4xl font-bold p-5">Our All Applications</h1>
        <p className="">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-3 justify-between m-6">
        <h1 className="text-2xl">
          {allAppsDetails?.length} Apps Found
        </h1>
        <div className="flex flex-col md:flex-row gap-4">
          <select
            defaultValue="Sort By Default"
            className="select appearance-none"
            onChange={(e) => {
              if (e.target.value === "default") setSortMethod(sortDefault);
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
      {sortMethod.length == 0 && <AppErrorPage />}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-5">
        {sortMethod?.map((item) => (
          <Link to={`/appsdetails/${item.id}`} key={item.id}>
            <div className="card bg-base-100 shadow-sm hover:shadow-2xl">
              <figure className="p-3">
                <img
                  className="rounded-md w-fit h-48 bg-neutral-100"
                  src={item.image}
                  alt={item.title}
                />
              </figure>
              <div className="card-body pt-0 p-3 ">
                <h2 className="card-title">{item.title}</h2>
                <div className="card-actions justify-between">
                  <button className="flex items-center gap-1 bg-neutral-200 rounded-md p-1">
                    <img className="h-4 w-4" src={downloadImg} alt="" />
                    {(item.downloads / 1000000000).toFixed(1) + "B"}
                  </button>
                  <button className="flex items-center gap-1 bg-neutral-200 rounded-md p-1">
                    <img className="h-4 w-4" src={ratingImg} alt="" />
                    {item.ratingAvg}
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
