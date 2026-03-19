import { Link } from "react-router";
import downloadImg from "../assets/icon-downloads.png";
import ratingImg from "../assets/icon-ratings.png";

export default function Trending({ allApps }) {
  // console.log(allApps);
  const trendingApps = [...allApps].filter((item) => item.ratingAvg > 4.5);
  // console.log(trendingApps)
  return (
    <div className="pt-5">
      <div className="text-center">
        <h1 className="text-5xl font-bold p-5">Trending Apps</h1>
        <p className=" p-3">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {trendingApps.map((item) => (
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
                    {item.downloads / 1000000}M
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
      <div className="text-center my-5">
        <Link to="/apps" className="btn btn-wide">
          Show All
        </Link>
      </div>
    </div>
  );
}
