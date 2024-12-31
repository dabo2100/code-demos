import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductsPage from "./pages/Products";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div className="col-12 App d-flex flex-column justify-content-between">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<ProductsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}
