import ReactDOM from 'react-dom/client';
import App from './app/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { WindowWidthProvider } from './app/providers/WidthProviders.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <WindowWidthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </WindowWidthProvider>
);
