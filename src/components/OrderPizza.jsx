import React from "react";
import HeaderOrderPizza from "./HeaderOrderPizza";
import MainOrderPizza from "./MainOrderPizza";

const OrderPizza = ({ setOrder }) => {
  return (
    <div>
      <HeaderOrderPizza />
      <MainOrderPizza setOrder={setOrder} />
    </div>
  );
};

export default OrderPizza;
