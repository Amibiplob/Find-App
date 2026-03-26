import Banner from "./Banner";
import Trending from "./Trending";
import { useLoaderData } from "react-router-dom";

export default function Home() {
  const allApps = useLoaderData();
  //   console.log(allApps);
  return (
    <div>
      <Banner />
      <Trending allApps={allApps} />
    </div>
  );
}
