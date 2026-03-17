import Banner from "./Pages/Banner";
import Navbar from "./Pages/Navbar";
import Trending from "./Pages/Trending";

function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Banner />
      <Trending/>
    </div>
  );
}

export default App;
