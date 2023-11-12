import React from 'react';
import '../Css/HomePage.css';
import Header from './Header.js'; 
import Footer from "./Footer.js";

function HomePage() {
  return (
    <div className="HomePage">
      <Header />
      <div className="top-buttons">
        <button>Dog</button>
        <button>Cat</button>
        <button>Rodents</button>
        <button>Birds</button>
        <button>Reptiles</button>
      </div>

      <div className="featured-categories">
        <h2>Featured Categories</h2>
        <div className="category-container">
          <div className="category">
            <button>
              <img src={require('../Images/DogFood.png')} alt="Dog Food" />
            </button>
            <p>Dog Food</p>
          </div>
          <div className="category">
            <button>
              <img src={require('../Images/CatFood.png')} alt="Cat Food" />
            </button>
            <p>Cat Food</p>
          </div>
          <div className="category">
            <button>
              <img src={require('../Images/DogAccessories.jpg')} alt="Dog Accessories" />
            </button>
            <p>Dog Accessories</p>
          </div>
          <div className="category">
            <button>
              <img src={require('../Images/CatLitter.png')} alt="Cat Litter" />
            </button>
            <p>Cat Litter</p>
          </div>
          <div className="category">
            <button>
              <img src={require('../Images/CatAccessories.png')} alt="Cat Accessories" />
            </button>
            <p>Cat Accessories</p>
          </div>
        </div>
      </div>
      <div className="most-selled">
        <h2>Most Selled Products</h2>
        <div className="most-selled-container">
          <div className="product">
            <button>
              <img src={require('../Images/NoProduct.png')} alt="No product" />
            </button>
            <p>There's no products yet</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;

