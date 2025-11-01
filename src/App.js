import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home/Home.component";
import NavigationBar from "./Routes/Navigation/Navigation.component";
import NotFoundPage from "./Routes/NotFound/NotFound.component";
import { ToastContainer } from "react-toastify";
import Auth from "./Routes/authentication/authentication.component";
import Shop from "./Routes/shop/shop.component";
import Checkout from "./Routes/checkout/checkout.component";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/crown-clothing" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
     <ToastContainer />
    </>
  );
};

export default App;
