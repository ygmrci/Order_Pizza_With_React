import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import OrderPizza from "./components/OrderPizza";
import Success from "./components/Success";

function App() {
  const [order, setOrder] = useState(null);

  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/home" component={HomePage} />

      <Route path="/order" render={() => <OrderPizza setOrder={setOrder} />} />

      <Route path="/success" render={() => <Success order={order} />} />
    </Switch>
  );
}

export default App;
