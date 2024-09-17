import ReactDOM from 'react-dom/client';
import App from './app/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { WindowWidthProvider } from './app/providers/WidthProviders.jsx';
import { CartProvider } from './app/providers/CartContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <WindowWidthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </WindowWidthProvider>
  </CartProvider>
);
