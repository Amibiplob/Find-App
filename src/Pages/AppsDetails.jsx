import React from "react";
import { useLoaderData, useParams } from "react-router";
import downloadImg from "../assets/icon-downloads.png";
import ratingImg from "../assets/icon-ratings.png";
import Charts from "./Charts";
export default function AppsDetails() {
  let params = useParams();
  //   console.log(params);
  const allApps = useLoaderData();
  const detailsApps = allApps.find((item) => item.id == params.id);
  //
  const {
    id,
    image,
    title,
    description,
    companyName,
    reviews,
    ratings,
    ratingAvg,
    size,
    downloads,
  } = detailsApps;
  return (
    <div>
      <div className="flex justify-start shadow-lg hover:shadow-xl py-3">
        <figure className="flex gap-5 px-2">
          <img
            className="rounded-md w-80 bg-neutral-100"
            src={image}
            alt={title}
          />
        </figure>
        <div className="flex flex-col justify-around">
          <h2 className="card-title text-3xl">{title}</h2>
          <h2 className="font-bold">Developed by {companyName}</h2>
          <div className="border-t"></div>
          <div className="flex flex-col gap-4">
            <p className="flex items-center gap-1">
              <img className="h-4 w-4" src={downloadImg} alt="" />
              <span>{(downloads / 1000000000).toFixed(1) + "B"}</span>
            </p>
            <p className="flex items-center gap-1">
              <img className="h-4 w-4" src={ratingImg} alt="" />
              {ratingAvg}
            </p>
            <p>{size} MB</p>
          </div>
          <div>
            <button className="btn">Install Now ({size}) MB</button>
          </div>
        </div>
      </div>
      <div className="border-y py-5 my-3">
        <Charts ratings={ratings} />
      </div>
      <div className="">
        <h1 className="text-3xl my-3">Description</h1>
        <p className="my-4">{description}</p>
      </div>
    </div>
  );
}
