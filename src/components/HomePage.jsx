import React from "react";
import { useHistory } from "react-router-dom";
import CategoryNav from "./CategoryNav";

const HomePage = () => {
  const history = useHistory();

  const handleOrderClick = () => {
    history.push("/order");
  };

  return (
    <div>
      {/* <!-- Hero Banner Section --> */}
      <section className="hero-banner">
        {/* <!-- Background Pattern (Subtle Line Art Icons) --> */}
        <div className="hero-background-pattern">
          <img
            src="/home/shape-1.png"
            alt=""
            className="pattern-shape pattern-shape-1"
          />
          <img
            src="/home/shape-2.png"
            alt=""
            className="pattern-shape pattern-shape-2"
          />
        </div>

        {/* <!-- Floating Decorative Elements (div.png) --> */}
        <img src="/home/div.png" alt="" className="hero-decorative-elements" />

        {/* <!-- Hero Content --> */}
        <div className="hero-content">
          <img
            src="/home/logo.png"
            alt="Teknolojik Yemekler"
            className="hero-logo"
          />
          <p className="hero-tagline">fırsatı kaçırma</p>
          <p className="hero-slogan-line1">KOD ACIKTIRIR</p>
          <p className="hero-slogan-line2">PIZZA, DOYURUR</p>
          <button onClick={handleOrderClick} className="hero-cta-button">
            ACIKTIM
          </button>
        </div>

        {/* <!-- Pizza Image --> */}
        <div className="hero-pizza-image">
          <img
            src="/home/home-banner.png"
            alt="Pizza"
            className="pizza-main-image"
          />
        </div>
      </section>

      <CategoryNav />
    </div>
  );
};

export default HomePage;
