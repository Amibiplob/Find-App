import React from "react";

export default function Trending() {
  return (
    <div className="pt-5">
      <div className="text-center">
        <h1 className="text-5xl font-bold p-5">Trending Apps</h1>
        <p className=" p-3">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div>
        <div className="card bg-base-100 w-80 shadow-sm">
          <figure className="p-3">
            <img
              className="rounded-md"
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body pt-0 p-3 ">
            <h2 className="card-title">Card Title</h2>
            <div className="card-actions justify-between">
              <button className="flex items-center gap-1 bg-neutral-200 rounded-md p-1">
                <img
                  className="h-4 w-4"
                  src="/src/assets/icon-downloads.png"
                  alt=""
                />
                56
              </button>
              <button className="flex items-center gap-1 bg-neutral-200 rounded-md p-1">
                <img
                  className="h-4 w-4"
                  src="/src/assets/icon-ratings.png"
                  alt=""
                />
                56
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center my-5">
        <button className="btn btn-wide">Show All</button>
      </div>
    </div>
  );
}
