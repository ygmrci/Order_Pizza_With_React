import React from "react";

const CategoryNav = () => {
  return (
    <div>
      {/* <!-- Category Navigation --> */}
      <nav className="category-nav">
        <ul className="category-list">
          <li className="category-item">
            <img src="/main/1.png" alt="Kore" className="category-icon" />
            <span>YENİ! Kore</span>
          </li>
          <li className="category-item active">
            <img src="/main/2.png" alt="Pizza" className="category-icon" />
            <span>Pizza</span>
          </li>
          <li className="category-item">
            <img src="/main/3.png" alt="Burger" className="category-icon" />
            <span>Burger</span>
          </li>
          <li className="category-item">
            <img
              src="/main/4.png"
              alt="Kızartmalar"
              className="category-icon"
            />
            <span>Kızartmalar</span>
          </li>
          <li className="category-item">
            <img src="/main/5.png" alt="Fast Food" className="category-icon" />
            <span>Fast food</span>
          </li>
          <li className="category-item">
            <img
              src="/main/6.png"
              alt="Gazlı İçecek"
              className="category-icon"
            />
            <span>Gazlı İçecek</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CategoryNav;
