import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Openpage from "./Openpage";
import Offers from "./Offers";
import Newad from "./Newad";
import ErrorPage from "./ErrorPage";
import './bootstrap.min.css';
import './openpage.css';
import './offers.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route index element={<Openpage />} />
        <Route path="/" element={<Openpage />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/newad" element={<Newad />} />
        <Route path="*" element={<ErrorPage />} />

      </Routes>

    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);