import "./App.css";
import Navbar from "./components/shared/Navbar";
import BannerSection from "./components/Home/BannerSection";
import TokenomicsSection from "./components/Home/TokenMicsSection";
import TradeBuzzySection from "./components/Home/TradeBuzzySection";
import BessSection from "./components/Home/BessSection";
import Footer from "./components/Home/Footer";

function App() {
  return (
    <div>
      <div className="container mx-auto">
        {" "}
        <Navbar></Navbar>
      </div>
      <BannerSection />
      {/* buzzy section */}
      <div id="buzzy" className="container mx-auto py-[50px] text-center">
        <div className="mt-5 mb-10 token-gide bg-yellow  py-4 md:px-20 px-5 border-paste">
          <p className="md:text-4xl text-2xl break-words   text-center uppercase">
            ca: CgQ44kxXi4VeK668TfoNkdB6KUYJmxBHAPsJhmWYsSt3
          </p>
        </div>
        <h1
          style={{ color: "#ffc147" }}
          className="text-4xl uppercase font-soggy"
        >
          What is $buzzy?
        </h1>
        <p className="mt-10 text-2xl max-w-3xl mx-auto leading-[40px]">
          $BUZZY is a vibrant and engaging meme coin centered around a
          psychedelic bee intoxicated on its own mad honey. This unique
          cryptocurrency not only brings fun and excitement to the crypto
          community but also supports verified bee rescue charities, making it
          both entertaining and impactful.
        </p>
      </div>
      <TokenomicsSection />
      <TradeBuzzySection />
      <BessSection />
      <Footer />
    </div>
  );
}

export default App;
