import { Route, Routes } from 'react-router-dom';
import { Cart } from '../pages/Cart/Cart';
import { Home } from '../pages/Home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path={'/dodo-pizza'}></Route>
        <Route element={<Cart />} path={'/dodo-pizza/cart'}></Route>
      </Routes>
    </>
  );
}

export default App;
