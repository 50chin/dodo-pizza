import './styles/global.css';
import './styles/fonts.css';
import { Header } from '../layouts/Header';
import { Main } from '../layouts/Main/Main';
import { Footer } from '../layouts/Footer/Footer';
import { WindowWidthProvider } from './providers/WidthProviders';
import { Cart } from '../components/Cart/Cart';

function App() {
  return (
    <>
      {/* <Cart></Cart> */}
      <WindowWidthProvider>
        <Header />
        <Main />
        <Footer />
      </WindowWidthProvider>
    </>
  );
}

export default App;
