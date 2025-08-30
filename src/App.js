import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home/Home.component";
import NavigationBar from "./Routes/Navigation/Navigation.component";
import NotFoundPage from "./Routes/NotFound/NotFound.component";

const Shop = () => {
  return (
    <div>
      <h1>I am the shop component</h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
