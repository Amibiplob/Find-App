import React, { use } from "react";

export default function AllApps({ fetchingData }) {
  const allApps = use(fetchingData);
  console.log(allApps[0]);
    return (
      <div>
        <div className="text-center m-8">
          <h1 className="text-4xl font-bold p-5">Our All Applications</h1>
          <p className="">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex justify-between">
          <h1 className="text-2xl"> {allApps.length} Apps Found</h1>
          <div className="flex gap-4">
            <select
              defaultValue="Sort By Default"
              className="select appearance-none"
            >
              <option value="default">Sort By Default</option>
              <option value="high-low">Downloads: High → Low</option>
              <option value="low-high">Downloads: Low → High</option>
            </select>
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
        </div>
        <div className="grid grid-cols-4">
          {allApps.map((item) => (
            <div key={item.id}>
              <div className="card bg-base-100 w-80 shadow-sm">
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
                      {item.downloads / 1000000}M
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
            </div>
          ))}
        </div>
      </div>
    );
}
