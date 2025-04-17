import { Route, Routes } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ShopPage from "./pages/ShopPage";
import RegisterPage from "./pages/RegisterPage";
import { ToastContainer } from "react-toastify";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import CheckoutPage from "./pages/CheckoutPage";

export default function App() {
  return (
    <div className="App">
      <ToastContainer />
      <MainHeader />
      <Routes>
        <Route path="/">
          <Route index element={<ShopPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="profile" element={<h1>Profile</h1>} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="products/:id" element={<h1>Details Page</h1>} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<h1> Page 404 | Not Found</h1>} />
        </Route>
      </Routes>
      {/* <footer>Footer</footer> */}
    </div>
  )
}
