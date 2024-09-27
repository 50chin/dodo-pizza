import ReactDOM from 'react-dom/client';
import App from './app/App.jsx';
import './app/styles/global.css';
import './app/styles/fonts.css';
import { BrowserRouter } from 'react-router-dom';
import { WindowWidthProvider } from './app/providers/WidthProviders.jsx';
import { CartProvider } from './app/providers/CartContext.jsx';
import { ScrollProvider } from './app/providers/ScrollContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ScrollProvider>
    <CartProvider>
      <WindowWidthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </WindowWidthProvider>
    </CartProvider>
  </ScrollProvider>
);
