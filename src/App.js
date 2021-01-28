import React from "react";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from './pages/shop/shop.component';
import { Route, Switch } from "react-router-dom";
import Header from './components/header/header.component'
import SignIn from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
