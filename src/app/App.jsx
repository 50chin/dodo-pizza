import './styles/global.css';
import './styles/fonts.css';
import { Route, Routes } from 'react-router-dom';
import { Cart } from '../pages/Cart/Cart';
import { Home } from '../pages/Home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path={'/dodo-pizza'}></Route>
        <Route element={<Cart />} path={'/cart'}></Route>
      </Routes>
    </>
  );
}

export default App;
