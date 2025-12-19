import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const PopularMenus = () => {
  const history = useHistory();
  const goOrder = (productName) => {
    history.push("/order", { productName }); //
  };
  return (
    <div>
      <section className="popular-menus">
        <div className="popular-menus-header">
          <p className="popular-subtitle">En çok paketlenen menüler</p>
          <h2 className="popular-title">
            <span>Acıktıran</span> <span>Kodlara Doyuran</span>
            <span>Lezzetler</span>
          </h2>
        </div>

        {/* <!-- Category Navigation (Second) --> */}
        <nav className="category-nav-second">
          <ul className="category-list-second">
            <li className="category-item-second">
              <img src="/main/1.png" alt="Ramen" className="category-icon" />
              <span>Ramen</span>
            </li>
            <li className="category-item-second">
              <img src="/main/2.png" alt="Pizza" className="category-icon" />
              <span>Pizza</span>
            </li>
            <li className="category-item-second">
              <img src="/main/3.png" alt="Burger" className="category-icon" />
              <span>Burger</span>
            </li>
            <li className="category-item-second">
              <img
                src="/main/4.png"
                alt="French fries"
                className="category-icon"
              />
              <span>French fries</span>
            </li>
            <li className="category-item-second">
              <img
                src="/main/5.png"
                alt="Fast food"
                className="category-icon"
              />
              <span>Fast food</span>
            </li>
            <li className="category-item-second">
              <img
                src="/main/6.png"
                alt="Soft drinks"
                className="category-icon"
              />
              <span>Soft drinks</span>
            </li>
          </ul>
        </nav>

        {/* <!-- Menu Items Grid --> */}
        <div className="menu-items-grid">
          <div
            className="menu-item-card"
            data-cy="product-terminal-pizza"
            onClick={() => goOrder("Terminal Pizza")}
          >
            <img
              src="/main/food-1.png"
              alt="Termina Pizza"
              className="menu-item-image"
            />
            <h3 className="menu-item-title">Terminal Pizza</h3>
            <div className="menu-item-info">
              <div className="menu-item-rating">
                <span className="rating-value">4.9</span>
                <span className="rating-count">(200)</span>
              </div>

              <div className="menu-item-price">
                <span className="price">60₺</span>
              </div>
            </div>
          </div>

          <div
            className="menu-item-card"
            onClick={() => goOrder("Position Absolute Acı Pizza")}
          >
            <img
              src="/main/food-2.png"
              alt="Pendiklin Simsalabim Pizza"
              className="menu-item-image"
            />
            <h3 className="menu-item-title">Position Absolute Acı Pizza</h3>
            <div className="menu-item-info">
              <div className="menu-item-rating">
                <span className="rating-value">4.8</span>
                <span className="rating-count">(200)</span>
              </div>

              <div className="menu-item-price">
                <span className="price">60₺</span>
              </div>
            </div>
          </div>

          <div
            className="menu-item-card"
            onClick={() => goOrder("useEffect Tavuklu Burger")}
          >
            <img
              src="/main/food-3.png"
              alt="useEffect Tavuklu Burger"
              className="menu-item-image"
            />
            <h3 className="menu-item-title">useEffect Tavuklu Burger</h3>
            <div className="menu-item-info">
              <div className="menu-item-rating">
                <span className="rating-value">4.9</span>
                <span className="rating-count">(200)</span>
              </div>

              <div className="menu-item-price">
                <span className="price">60₺</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularMenus;
