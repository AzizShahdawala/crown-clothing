import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home/Home.component";
import NavigationBar from "./Routes/Navigation/Navigation.component";
import NotFoundPage from "./Routes/NotFound/NotFound.component";
import Auth from "./Routes/authentication/authentication.component";

const Shop = () => {
  return (
    <div>
      <h1>This is a shop component</h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/crown-clothing" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
