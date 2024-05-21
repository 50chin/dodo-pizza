import "./styles/global.css";
import "./styles/fonts.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "../pages/Cart/Cart";
import { Home } from "../pages/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path={"*"}></Route>
          <Route element={<Cart />} path={"/cart"}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
