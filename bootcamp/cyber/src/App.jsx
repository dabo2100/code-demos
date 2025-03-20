import { Route, Routes } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ShopPage from "./pages/ShopPage";

export default function App() {
  return (
    <div className="App">
      <MainHeader />
      <Routes>
        <Route path="/">
          <Route index element={<ShopPage />} />
        
          <Route path="products/:id" element={<h1>Details Page</h1>} />
          <Route path="cart" element={<h1>Cart Page</h1>} />
          <Route path="*" element={<h1> Page 404 | Not Found</h1>} />
        </Route>
      </Routes>
      <footer>Footer</footer>
    </div>
  )
}
