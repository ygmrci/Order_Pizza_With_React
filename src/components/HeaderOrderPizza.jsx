import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/HeaderOrderPizza.css";

const HeaderOrderPizza = () => {
  return (
    <header className="navOrderPizza">
      <div className="logo">
        <img src="/home/logo.png" alt="Teknolojik Yemekler" />
      </div>

      <nav className="category">
        <NavLink
          to="/home"
          exact
          activeClassName="active"
          data-cy="breadcrumb-home"
        >
          Ana Sayfa
        </NavLink>
        <span>/</span>
        <NavLink to="/order" activeClassName="active">
          Sipariş Oluştur
        </NavLink>
      </nav>
    </header>
  );
};

export default HeaderOrderPizza;
