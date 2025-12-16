import React from "react";

const OfferSection = () => {
  return (
    <div>
      {/* // <!-- Featured Offers Section --> */}
      <section className="featured-offers">
        <div className="offers-container">
          <div className="offer-card offer-card-large">
            <img
              src="/main/kart-1.png"
              alt="Özel Lezzetus"
              className="offer-image"
            />
            <div className="offer-content">
              <h2 className="offer-title">
                Özel <br />
                Lezzetus
              </h2>
              <p className="offer-description">Position: Absolute Acı Burger</p>
              <button className="offer-button">SİPARİŞ VER</button>
            </div>
          </div>

          <div className="offers-secondary">
            <div className="offer-card-small offer-card-burger">
              {/* <!-- Sol: başlık + buton --> */}
              <div className="offer-content">
                <h3 className="offer-title-small">
                  Hackathon <br />
                  Burger Menü
                </h3>
                <button className="offer-button">SİPARİŞ VER</button>
              </div>
              <form action=""></form>

              {/* <!-- Sağ: burger görseli --> */}
              <div className="offer-burger-image">
                <img src="/main/kart-2.png" alt="Hackathon Burger Menüsü" />
              </div>
            </div>

            <div className="offer-card-small offer-card-npm">
              <div className="offer-bg">
                <img src="/main/small2-bg.png" alt="" />
              </div>

              <div className="offer-content">
                <h3 className="offer-title-small">
                  <span className="red-text">Çoooook</span> hızlı
                  <br />
                  npm gibi kurye
                </h3>
                <button className="offer-button">SİPARİŞ VER</button>
              </div>

              <div className="courier-image">
                <img src="/main/kart-3.png" alt="Kurye" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OfferSection;
