import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductPage from "./pages/ProductPage";

export default function App() {
  return (
    <div className="App d-flex flex-column">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route
            path="/product/:productId"
            element={<h1>Product Details</h1>}
          />
          <Route path="/cart" element={<h1>Cart Page</h1>} />
          <Route path="*" element={<h1>Page 404</h1>} />
        </Routes>
        <footer className="d-flex bg-dark p-5">This is Footer</footer>
      </BrowserRouter>
    </div>
  );
}
