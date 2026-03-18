import { useState } from "react";
import { Link, useLoaderData } from "react-router";
import appNotFound from "../assets/App-Error.png";
export default function AllApps() {
  const allApps = useLoaderData();
  console.log(allApps);
  const sortDefault = [...allApps];
  const sortHighToLow = [...allApps].sort((a, b) => b.downloads - a.downloads);
  const sortLowToHigh = [...allApps].sort((a, b) => a.downloads - b.downloads);
  // console.log(sortHighToLow)
  console.log(sortLowToHigh);
  const [sortMethod, setSortMethod] = useState(sortDefault);
  const searchItem = (value) => {
    const filterItem = [...sortDefault].filter((item) =>
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
      <div className="flex justify-between m-6">
        <h1 className="text-2xl"> {allApps.length} Apps Found</h1>
        <div className="flex gap-4">
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
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
      </div>
      {sortMethod.length == 0 && (
        <div>
          <div className="mx-auto">
            <img src={appNotFound} alt="Not Found" className="mx-auto m-8" />
          </div>
          <div className="text-center m-8">
            <h1 className="text-4xl font-bold p-5">OPPS!! APP NOT FOUND</h1>
            <p>
              The App you are requesting is not found on our system. please try
              another apps
            </p>
          </div>
        </div>
      )}
      <div className="grid grid-cols-4 gap-4 my-5">
        {sortMethod.map((item) => (
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
                    <img
                      className="h-4 w-4"
                      src="/src/assets/icon-downloads.png"
                      alt=""
                    />
                    {(item.downloads / 1000000000).toFixed(1) + "B"}
                  </button>
                  <button className="flex items-center gap-1 bg-neutral-200 rounded-md p-1">
                    <img
                      className="h-4 w-4"
                      src="/src/assets/icon-ratings.png"
                      alt=""
                    />
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
