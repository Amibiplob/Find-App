import { Suspense } from "react";
import AllApps from "./Pages/AllApps";
import Banner from "./Pages/Banner";
import Footer from "./Pages/Footer";
import Navbar from "./Pages/Navbar";
import Trending from "./Pages/Trending";

function App() {
  const fetchingData = fetch("/FakeDB.json").then((res) => res.json());
  return (
    <div className="container mx-auto">
      <Navbar />
      <Banner />
      <Suspense fallback={<p>⌛Downloading...</p>}>
        <Trending fetchingData={fetchingData} />
      </Suspense>

      <Suspense fallback={<p>⌛Downloading...</p>}>
        <AllApps fetchingData={fetchingData} />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
