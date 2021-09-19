import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

const App = () => {
  return (
  <div>
    <Navbar/>
    <ProductCard 
      img = "/images/riva.jpg"
      title = "Riva Full Face Helmet"
    />
    
    <ProductCard 
      img = "/images/gloss black.jpg"
      title = "MT Gloss Black Helmet"
    />

    <ProductCard 
      img = "/images/shoe.jpg"
      title = "Shoe Full Face Helmet"
    />

    <ProductCard 
      img = "/images/vega.jpg"
      title = "Vega Full Face Helmet"
    />

    <ProductCard 
      img = "/images/open face.jpg"
      title = "Half Face Helmet"
    />

    <ProductCard 
      img = "/images/dirt.jpg"
      title = "Off Road Helmet"
    />

    <ProductCard 
      img = "/images/dirt2.jpg"
      title = "Cross Helmet"
    />

    <ProductCard 
      img = "/images/steelbird.jpg"
      title = "Steelbird Full Face Helmet"
    />

  </div>)
};

export default App;