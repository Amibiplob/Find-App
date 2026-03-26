import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router";
import downloadImg from "../assets/icon-downloads.png";
import ratingImg from "../assets/icon-ratings.png";
import review from "../assets/icon-review.png";
import Charts from "./Charts";
import { useApps } from "../Context/AppContext";
import { toast } from "react-toastify";
export default function AppsDetails() {
  let params = useParams();
  const { installedApps, setAllInstalledApps, setInstalledApps } = useApps();
  //   console.log(params);
  // console.log(installedApps);
  const allApps = useLoaderData();

  const detailsApps = allApps.find((item) => item.id == params.id);

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
  const localItem = JSON.parse(localStorage.getItem("allApps"));
  useEffect(() => {
    if (localItem) setInstalledApps(localItem);
  }, []);

  const installApps = installedApps.find((item) => item.id == id);

  const allInstallApps = (data) => {
    setAllInstalledApps(data);
    localStorage.setItem("allApps", JSON.stringify([...installedApps, data]));
    toast.success(data.title + " Install Successfuly");
  };

  return (
    <div className="ml-4">
      <div className="flex flex-col md:flex-row justify-start gap-6 shadow-lg hover:shadow-xl py-3">
        <figure className="flex gap-5 px-2">
          <img
            className="rounded-md w-80 bg-neutral-100"
            src={image}
            alt={title}
          />
        </figure>
        <div className="flex flex-col justify-around gap-5">
          <h2 className="card-title text-3xl">{title}</h2>
          <h2 className="font-bold">
            <span className="font-light">Developed by</span> {companyName}
          </h2>
          <div className="border-t"></div>
          <div className="flex flex-col gap-7">
            <div className="flex items-center gap-2">
              <span>Downloads :</span>
              <img className="h-4 w-4" src={downloadImg} alt="" />
              <span>{(downloads / 1000000000).toFixed(1) + "B"}</span>
            </div>

            <div className="flex items-center gap-2">
              <span>Average Ratings :</span>
              <img className="h-4 w-4" src={ratingImg} alt="" />
              <span>{ratingAvg}</span>
            </div>

            <div className="flex items-center gap-2">
              <span>Total Reviews :</span>
              <img className="h-4 w-4" src={review} alt="" />
              <span>{(reviews / 1000000).toFixed(1) + "M"}</span>
            </div>
          </div>
          <div>
            <button
              disabled={installApps}
              onClick={() => allInstallApps(detailsApps)}
              className="btn my-2"
            >
              {installApps ? "Installed Now" : "Install Now"} ({size}) MB
            </button>
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
