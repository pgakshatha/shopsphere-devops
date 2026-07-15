import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Categories from "./components/Categories";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import TrustBanner from "./components/TrustBanner";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <TrustBanner />
      <Categories />
      <ProductList />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;