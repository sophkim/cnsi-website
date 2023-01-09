import Banner from "./components/Banner/Banner";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Banner />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
