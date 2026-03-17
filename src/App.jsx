import Banner from "./Pages/Banner";
import Footer from "./Pages/Footer";
import Navbar from "./Pages/Navbar";
import Trending from "./Pages/Trending";

function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Banner />
      <Trending />
      <Footer/>
    </div>
  );
}

export default App;
