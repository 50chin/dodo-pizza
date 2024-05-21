import ReactDOM from "react-dom/client";
import App from "./app/App.jsx";
import { WindowWidthProvider } from "./app/providers/WidthProviders.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <WindowWidthProvider>
    <App />
  </WindowWidthProvider>
);
